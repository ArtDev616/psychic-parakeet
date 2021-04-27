import { gql, useQuery } from '@apollo/client';
import { UserContext } from 'contexts/user';
import { useContext } from 'react';
import { useParams } from 'react-router';

const CheckGroupMembership = gql`
  query CheckGroupMembership($alphaName: String!, $userId: uuid!) {
    group: group_(where: {alphaName: {_eq: $alphaName}}) {
      id
      leaderUserId
      users(where: {userId: {_eq: $userId}}, limit: 1) {
        userId
      }
    }
  }
`;

export default (): { isFamMember: boolean | null; isFamLeader: boolean | null; dataLoading: boolean; } => {
  const { user, loading: userLoading } = useContext(UserContext);
  const { famAlphaName } = useParams<{famAlphaName: string}>();
  const { data, loading } = useQuery(CheckGroupMembership, {
    variables: {
      userId: user?.id || '',
      alphaName: famAlphaName,
    },
    skip: !user?.id,
  });

  const isFamMember = Boolean(user?.id && data?.group?.length && data?.group[0]?.users?.length);
  const isFamLeader = Boolean(data?.group?.length && data.group[0]?.leaderUserId === user?.id);
  const dataLoading = userLoading || loading;

  return { isFamMember, isFamLeader, dataLoading };
};
