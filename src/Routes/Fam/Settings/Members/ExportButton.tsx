import React, { useContext } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

import {
  gql, useApolloClient,
} from '@apollo/client';
import {
  SettingsExportGroupMembersQuery,
  SettingsExportGroupMembersQueryVariables,
  SettingsExportedGroupUserFragment,
} from 'generated/graphql';
import Button from 'components/buttons/Button';
import { exportToCsv } from 'utils/file';
import dayjs from 'dayjs';
import { ReactComponent as DownloadIcon } from 'assets/svg/download.svg';
import { transformRoles } from 'Routes/Fam/Settings/Members';
import { UserContext } from 'contexts/user';

const Fragments = {
  exportedGroupUser: gql`
    fragment SettingsExportedGroupUser on user_group { 
      createdAt
      weeklyPoints
      monthlyPoints
      user: user_ {
        id
        firstName
        lastName
        email
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

const ExportGroupMembersQuery = gql`
  query SettingsExportGroupMembers($alphaName: String!, $loggedInUserId: uuid!) {
    group: group_(where: {alphaName: {_eq: $alphaName}}) {
      id
      users(
        order_by: {user_: {roles_aggregate: {count: desc}, firstName: asc}}
        where: {userId: {_neq: $loggedInUserId}}
      ) {
        ...SettingsExportedGroupUser
      }
    }
  }
  ${Fragments.exportedGroupUser}
`;

const StyledIcon = styled(DownloadIcon)({
  marginRight: 6,
});

const StyledButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: 18,
});

const transformMembers = (users: Array<SettingsExportedGroupUserFragment>) => users.map(d => ({
  email: d.user.email,
  firstName: d.user.firstName,
  lastName: d.user.lastName,
  role: transformRoles(d.user.roles),
  memberSince: dayjs(d.createdAt).format('MM/DD/YYYY'),
  weeklyPoints: Math.round(d.weeklyPoints).toString(),
  monthlyPoints: Math.round(d.monthlyPoints).toString(),
}));

const MembersTableExportButton: React.FunctionComponent<Record<string, never>> = () => {
  const { user } = useContext(UserContext);
  const { famAlphaName } = useParams<{famAlphaName: string}>();
  const client = useApolloClient();
  const onClick = async () => {
    const response = await client.query<
      SettingsExportGroupMembersQuery,
      SettingsExportGroupMembersQueryVariables
    >(
      {
        query: ExportGroupMembersQuery,
        variables: {
          alphaName: famAlphaName,
          loggedInUserId: user?.id,
        },
      },
    );
    const members = transformMembers(response.data.group?.[0].users || []);
    const rows = [
      Object.keys(members[0]).map(k => k.toUpperCase()),
      ...members.map(m => Object.values(m)),
    ];
    exportToCsv('members.csv', rows);
  };
  return (
    <StyledButtonContainer>
      <Button type="primary" onClick={onClick}>
        <StyledIcon />
        Export
      </Button>
    </StyledButtonContainer>
  );
};

export default MembersTableExportButton;
