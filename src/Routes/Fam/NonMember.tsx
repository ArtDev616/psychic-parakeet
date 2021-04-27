/* eslint-disable no-underscore-dangle */
import { gql, useMutation, useQuery } from '@apollo/client';
import svg from 'assets/svg';
import Button from 'components/buttons/ImageButton';
import { NavBarContext } from 'contexts/navbar';
import { UserContext } from 'contexts/user';
import useIsFamMember from 'hooks/useIsFamMember';
import React, { useContext } from 'react';
import { RouteComponentProps, useHistory, withRouter } from 'react-router';
import { HAMBURGER_MENU_ICON_SIZE } from 'Routes/Fam/constants';
import styled from 'styled-components';
import { breakpoints, fontStyles } from 'utils/style';
import {
  NonMemberGetGroupIdQuery,
  NonMemberGetGroupIdQueryVariables,
  NonMemberGetGroupJoinRequestStatusQuery,
  NonMemberGetGroupJoinRequestStatusQueryVariables,
} from 'generated/graphql';
import { ReactComponent as ChevronRight } from 'assets/svg/chevronRight.svg';
import { CustomModalTypes, ModalContext } from 'contexts/modal';
import FamOwnerProfileImage from 'components/user/FamOwnerProfileImage';

const GetGroupJoinRequestStatusQuery = gql`
  query NonMemberGetGroupJoinRequestStatus($userId: uuid!, $groupId: uuid!) {
    joinRequest: group_join_request(where: {userId: {_eq: $userId}, groupId: {_eq: $groupId}}) {
      id
      status
    }
  }
`;

const GetGroupIdQuery = gql`
  query NonMemberGetGroupId($alphaName: String!) {
    group: group_(where: {alphaName: {_eq: $alphaName}}) {
      id
    }
  }
`;

const JoinGroupMutation = gql`
  mutation NonMemberJoinGroup($groupId: uuid!, $userId: uuid!) {
    joinRequest: insert_group_join_request_one(
      object: { groupId: $groupId, userId: $userId, status: pending }
      on_conflict: { constraint: group_join_request_group_id_user_id_key, update_columns: status }
    ) {
      id
    }
  }
`;

const StyledContent = styled.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#f2f6f6',
  overflow: 'auto',
});

const StyledTitle = styled.h2({
  ...fontStyles.h2,
  margin: '0 0 8px 0',
  textAlign: 'center',
  padding: '0 24px',
});

const StyledText = styled.h5({
  ...fontStyles.h5,
  textAlign: 'center',
  padding: '0 24px',
});

const StyledProfileImage = styled(FamOwnerProfileImage)({
  width: 300,
  height: 300,
  borderRadius: 24,
  marginBottom: 32,
  cursor: 'default',
});

const StyledHamburger = styled(Button)({
  position: 'fixed',
  top: 20,
  left: 24,
  height: 20,
  width: 20,
  zIndex: 2,
  display: 'none',
  [breakpoints.md.css]: {
    display: 'block',
  },
});

const StyledLink = styled.div({
  ...fontStyles.button,
  fontSize: 16,
  display: 'flex',
  alignItems: 'center',
  color: '#3BB6B5',
  backgroundColor: 'transparent',
  marginTop: 20,
});

const StyledRightIcon = styled(ChevronRight)({
  width: 20,
  height: 20,
  marginLeft: 4,
  color: '#3BB6B5',
});

type PathParamsType = {
  famAlphaName: string;
};

type Props = RouteComponentProps<PathParamsType>

const FamNonMember: React.FunctionComponent<Props> = ({ match }) => {
  const history = useHistory();
  const { openNav } = useContext(NavBarContext);
  const { user, auth0User, loading } = useContext(UserContext);
  const { showModal } = useContext(ModalContext);
  const { isFamMember } = useIsFamMember();
  const { data } = useQuery<NonMemberGetGroupIdQuery, NonMemberGetGroupIdQueryVariables>(GetGroupIdQuery, {
    variables: {
      alphaName: match.params.famAlphaName,
    },
  });
  const groupId = data?.group?.[0]?.id;
  const { data: joinRequest } = useQuery<
    NonMemberGetGroupJoinRequestStatusQuery,
    NonMemberGetGroupJoinRequestStatusQueryVariables
  >(
    GetGroupJoinRequestStatusQuery, {
      variables: {
        userId: user?.id,
        groupId,
      },
      skip: !user?.id || !groupId,
    },
  );
  const [joinGroup] = useMutation(JoinGroupMutation, {
    variables: {
      groupId,
      userId: user?.id,
    },
  });
  const onJoinClick = async () => {
    if (user) {
      await joinGroup();
      // Refreshing the page so we don't need to update the apollo cache, cutting corners.
      window.location.reload();
      return;
    }

    history.replace({
      search: 'join=true',
    });

    showModal({
      type: CustomModalTypes.LOGIN,
      buttonAction: () => {},
    });
  };

  return (
    <StyledContent>
      <StyledHamburger size={HAMBURGER_MENU_ICON_SIZE} src={svg.hamburger} onClick={openNav} />
      {((!loading && !auth0User) || isFamMember !== null) && (
        <>
          <StyledProfileImage size={300} famAlphaName={match.params.famAlphaName} />
          <StyledTitle>Welcome, let's crush it together. </StyledTitle>
          <StyledText>Don't miss out on friends & support across the world.</StyledText>
          {!joinRequest?.joinRequest?.[0]?.id && (
            <StyledLink onClick={onJoinClick}>
              Join the conversation
              <StyledRightIcon />
            </StyledLink>
          )}
        </>
      )}
    </StyledContent>
  );
};

export default withRouter(FamNonMember);
