/* eslint-disable camelcase */
import { gql, useMutation, useQuery } from '@apollo/client';
import _unionBy from 'lodash/unionBy';
import _uniq from 'lodash/uniq';
import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import {
  SettingsGroupUserFragment,
  SettingsDeleteGroupMembersMutation,
  SettingsDeleteGroupMembersMutationVariables,
  SettingsGetGroupMembersQuery,
  SettingsGetGroupMembersQueryVariables,
  Role_Enum,
} from 'generated/graphql';
import MembersTable, { MemberData } from 'Routes/Fam/Settings/Members/Table';
import styled from 'styled-components';
import dayjs from 'dayjs';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SETTINGS_SCROLLABLE_DIV_ID } from 'Routes/Fam/Settings';
import MembersTableExportButton from 'Routes/Fam/Settings/Members/ExportButton';
import { UserContext } from 'contexts/user';

const MEMBERS_PER_PAGE = 250;

const ROLE_MAP = {
  member: 'Member',
  employee: 'Employee',
  moderator: 'Ambassador',
  admin: 'Admin',
};

const Fragments = {
  groupUser: gql`
    fragment SettingsGroupUser on user_group { 
      createdAt
      weeklyPoints
      monthlyPoints
      user: user_ {
        id
        firstName
        lastName
        roles {
          id
          roleType {
            value
            description
          }
        }
      }
    }
  `,
};

const GetGroupMembersQuery = gql`
  query SettingsGetGroupMembers($alphaName: String!, $loggedInUserId: uuid!, $limit: Int!, $offset: Int!) {
    group: group_(where: {alphaName: {_eq: $alphaName}}) {
      id
      users(
        offset: $offset, 
        limit: $limit, 
        order_by: {user_: {roles_aggregate: {count: desc}, firstName: asc}},
        where: {userId: {_neq: $loggedInUserId}}
      ) {
        ...SettingsGroupUser
      }
    }
  }
  ${Fragments.groupUser}
`;

const DeleteGroupMembersMutation = gql`
  mutation SettingsDeleteGroupMembers($groupId: uuid!, $userIds: [uuid!]!) {
    deletePosts: update_channel_post(
      where: { member: { userId: { _in: $userIds } }, channel: { groupId: { _eq: $groupId } } }
      _set: { deletedAt: "now()" }
    ) {
      affected_rows
    }
    deleteChannelMembers: update_channel_member(
      where: {
        _and: [
          { channel: { _and: [{ groupId: { _eq: $groupId } }, { type: { _neq: direct } }] } }
          { userId: { _in: $userIds } }
        ]
      }
      _set: { deletedAt: "now()" }
    ) {
      affected_rows
    }
    deleteJoinRequests: delete_group_join_request(where: { groupId: { _eq: $groupId }, userId: { _in: $userIds } }) {
      affected_rows
    }
    deleteRoles: delete_group_role(where: { groupId: { _eq: $groupId }, userId: { _in: $userIds } }) {
      affected_rows
    }
    deleteUserGroup: delete_user_group(where: {userId: {_in: $userIds}, groupId: {_eq: $groupId}}) {
      returning {
        userId
        groupId
      }
    } 
  }
`;

const StyledLoading = styled.div({
  marginTop: 24,
  textAlign: 'center',
});

export const transformRoles = (roles: Array<{id: string, roleType: {value: string}}>): string => {
  return _uniq(roles.map(r => ROLE_MAP[r.roleType.value as Role_Enum])).join(', ');
};

const transformMembers = (users: Array<SettingsGroupUserFragment>) => users.map(d => ({
  id: d.user.id,
  name: `${d.user.firstName || ''} ${d.user.lastName || ''}`,
  memberSince: dayjs(d.createdAt).format('MM/DD/YYYY'),
  weeklyPoints: Math.round(d.weeklyPoints).toString(),
  monthlyPoints: Math.round(d.monthlyPoints).toString(),
  roles: transformRoles(d.user.roles),
}));

type PathParamsType = {
  famAlphaName: string;
}

type Props = RouteComponentProps<PathParamsType>

const FamMemberSettings: React.FunctionComponent<Props> = ({ match }) => {
  const { user } = useContext(UserContext);
  const [offset, setOffset] = React.useState(0);
  const [hasMore, setHasMore] = React.useState(false);
  const [members, setMembers] = React.useState<Array<MemberData>>([]);
  const [deleteMembersMutation] = useMutation<
    SettingsDeleteGroupMembersMutation,
    SettingsDeleteGroupMembersMutationVariables
  >(
    DeleteGroupMembersMutation,
  );

  const { data, fetchMore } = useQuery<
    SettingsGetGroupMembersQuery,
    SettingsGetGroupMembersQueryVariables
  >(
    GetGroupMembersQuery, {
      variables: {
        alphaName: match.params.famAlphaName,
        loggedInUserId: user?.id,
        limit: MEMBERS_PER_PAGE,
        offset: 0,
      },
      onCompleted: response => {
        const transformedMembers = transformMembers(response?.group?.[0]?.users || []);
        setHasMore(transformedMembers.length === MEMBERS_PER_PAGE);
        setMembers(transformedMembers);
      },
    },
  );

  const onScroll = React.useCallback(async () => {
    const res = await fetchMore({
      variables: {
        limit: MEMBERS_PER_PAGE,
        offset: offset + MEMBERS_PER_PAGE,
      },
    });
    const transformedMembers = transformMembers(res?.data.group?.[0]?.users || []);
    const newMembers = _unionBy(members, transformedMembers, 'id');
    setMembers(newMembers);
    setHasMore(transformedMembers.length === MEMBERS_PER_PAGE);
    setOffset(offset + MEMBERS_PER_PAGE);
  }, [fetchMore, members, offset]);

  const deleteMembers = async (memberIds: Array<string>) => {
    await deleteMembersMutation({
      variables: {
        userIds: memberIds,
        groupId: data?.group?.[0].id,
      },
    });
    window.location.reload();
  };

  return (
    <>
      <MembersTableExportButton />
      <InfiniteScroll
        dataLength={members.length}
        next={onScroll}
        loader={<StyledLoading>Loading...</StyledLoading>}
        scrollableTarget={SETTINGS_SCROLLABLE_DIV_ID}
        hasMore={hasMore}
        scrollThreshold="250px"
      >
        <MembersTable
          data={members}
          deleteMembers={deleteMembers}
        />
      </InfiniteScroll>
    </>
  );
};

export default FamMemberSettings;
