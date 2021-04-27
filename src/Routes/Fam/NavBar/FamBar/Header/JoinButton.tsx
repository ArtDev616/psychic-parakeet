/* eslint-disable no-underscore-dangle */
import { gql, useMutation, useQuery } from '@apollo/client';
import GradientButton from 'components/buttons/GradientButton';
import { UserContext } from 'contexts/user';
import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  FamBarGetGroupJoinRequestStatusQuery,
  FamBarGetGroupJoinRequestStatusQueryVariables,
  Group_Join_Request_Type_Enum as GroupJoinRequestTypeEnum,
} from 'generated/graphql';
import { useHistory, useLocation, useParams } from 'react-router';

import { CustomModalTypes, ModalContext } from 'contexts/modal';
import useIsFamMember from 'hooks/useIsFamMember';
import { logEvent } from 'clients/amplitude';

const StyledButton = styled(GradientButton)<{textColor?: string}>(props => ({
  color: props.textColor || '#FFFFFF',
  width: '100%',
}));

const GetGroupJoinRequestStatusQuery = gql`
  query FamBarGetGroupJoinRequestStatus($userId: uuid!, $groupId: uuid!) {
    joinRequest: group_join_request(where: {userId: {_eq: $userId}, groupId: {_eq: $groupId}}) {
      id
      status
    }
  }
`;

const LeaveGroupMutation = gql`
  mutation FamBarLeaveGroup($groupId: uuid!, $userId: uuid!) {
    channelMembers: update_channel_member(
      where: {
        _and: [
          { channel: { _and: [{ groupId: { _eq: $groupId } }, { type: { _neq: direct } }] } }
          { userId: { _eq: $userId } }
        ]
      }
      _set: { deletedAt: "now()" }
    ) {
      returning {
        id
      }
    }
    joinRequests: delete_group_join_request(where: { groupId: { _eq: $groupId }, userId: { _eq: $userId } }) {
      returning {
        id
      }
    }
    groupRoles: delete_group_role(where: { groupId: { _eq: $groupId }, userId: { _eq: $userId } }) {
      returning {
        id
      }
    }
    userGroup: delete_user_group_by_pk(userId: $userId, groupId: $groupId) {
      userId
      groupId
      user: user_ {
        groups(order_by: { group: { name: asc } }, limit: 1) {
          group {
            id
          }
        }
      }
    }
  }
`;

const JoinGroupMutation = gql`
  mutation FamBarJoinGroup($groupId: uuid!, $userId: uuid!) {
    joinRequest: insert_group_join_request_one(
      object: { groupId: $groupId, userId: $userId, status: pending }
      on_conflict: { constraint: group_join_request_group_id_user_id_key, update_columns: status }
    ) {
      id
    }
  }
`;

const CancelJoinGroupMutation = gql`
  mutation CancelJoinGroup($groupId: uuid!, $userId: uuid!) {
    joinRequests: delete_group_join_request(where: { groupId: { _eq: $groupId }, userId: { _eq: $userId } }) {
      affected_rows
    }
  }
`;

type Props = {
  groupId: string;
}

type PathParamsType = { famAlphaName: string };

const FamJoinButton: React.FunctionComponent<Props> = ({ groupId }) => {
  const { famAlphaName } = useParams<PathParamsType>();
  const { showModal } = useContext(ModalContext);
  const location = useLocation();
  const history = useHistory();
  const {
    user, auth0User, loading: userLoading,
  } = useContext(UserContext);

  const { isFamMember, isFamLeader, dataLoading } = useIsFamMember();

  const [joinGroup] = useMutation(JoinGroupMutation, {
    variables: {
      groupId,
      userId: user?.id,
    },
  });

  const [cancelJoinGroup] = useMutation(CancelJoinGroupMutation, {
    variables: {
      groupId,
      userId: user?.id,
    },
  });

  const [leaveGroup] = useMutation(LeaveGroupMutation, {
    variables: {
      groupId,
      userId: user?.id,
    },
  });

  const { data } = useQuery<
    FamBarGetGroupJoinRequestStatusQuery,
    FamBarGetGroupJoinRequestStatusQueryVariables
  >(
    GetGroupJoinRequestStatusQuery, {
      variables: {
        userId: user?.id,
        groupId,
      },
      skip: !user?.id,
    },
  );

  React.useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const shouldJoin = user && queryParams.get('join') === 'true' && (!dataLoading && !isFamMember);
    if (shouldJoin) {
      joinGroup().then(() => {
        queryParams.delete('join');
        history.replace({
          search: queryParams.toString(),
        });
        window.location.reload();
      });
    }
  }, [dataLoading, history, isFamMember, joinGroup, location.search, user]);

  // Showing a button depending on user's join request
  const joinStatus = data?.joinRequest?.[0]?.status;

  const onJoinClick = async () => {
    // If the user is a member, leave on click
    if (isFamMember && !isFamLeader) {
      logEvent('Fam Bar', 'Leave fam click', { groupId, famAlphaName });
      await leaveGroup();
    } else if (joinStatus === GroupJoinRequestTypeEnum.Rejected) {
      // Not letting rejected users apply again
      return;
    } else if (joinStatus === GroupJoinRequestTypeEnum.Pending) {
      logEvent('Fam Bar', 'Cancel join fam click', { groupId, famAlphaName });
      // Cancel join request
      await cancelJoinGroup();
    } else if (!joinStatus) {
      logEvent('Fam Bar', 'Join fam click (authenticated user)', { groupId, famAlphaName });
      // Join fam
      await joinGroup();
    }

    // Refreshing the page so we don't need to update the apollo cache, cutting corners.
    window.location.reload();
  };

  // User context loading
  if (userLoading) {
    return <StyledButton text="Loading..." textColor="#8F95B1" disabled colors={['#EEF6F6', '#EEF6F6']} />;
  }

  // Not logged in
  if (!auth0User) {
    const onJoinFamClick = () => {
      history.replace({
        search: 'join=true',
      });
      showModal({ type: CustomModalTypes.LOGIN, buttonAction: () => {} });
      logEvent('Fam Bar', 'Join fam click (non-authenticated user)', { groupId, famAlphaName });
    };
    return <StyledButton text="Join our fam" onClick={onJoinFamClick} />;
  }

  // Logged in, but data loading
  if (!data) {
    return <StyledButton text="Loading..." textColor="#8F95B1" disabled colors={['#EEF6F6', '#EEF6F6']} />;
  }

  // User is a member
  if (isFamMember) {
    return (
      <StyledButton
        text="✓ Member"
        textColor="#8F95B1"
        disabled={Boolean(isFamLeader)}
        onClick={onJoinClick}
        colors={['#EEF6F6', '#EEF6F6']}
      />
    );
  }

  // Rejected
  if (joinStatus === GroupJoinRequestTypeEnum.Rejected) {
    return <StyledButton text="Rejected" textColor="#8F95B1" disabled colors={['#EEF6F6', '#EEF6F6']} />;
  }

  // Pending request
  if (joinStatus === GroupJoinRequestTypeEnum.Pending) {
    return (
      <StyledButton
        text="Pending Approval"
        textColor="#8F95B1"
        onClick={onJoinClick}
        colors={['#EEF6F6', '#EEF6F6']}
      />
    );
  }

  // Not a member
  return <StyledButton text="Join our fam" onClick={onJoinClick} />;
};

export default FamJoinButton;
