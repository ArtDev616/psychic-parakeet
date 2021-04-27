import React from 'react';
import { RouteComponentProps } from 'react-router';
import FamNonMember from 'Routes/Fam/NonMember';
import Nav from 'Routes/Fam/NavBar';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import { FamGetFirstChannelQuery, FamGetFirstChannelQueryVariables } from 'generated/graphql';
import { UserContext } from 'contexts/user';

const GetFirstChannelQuery = gql`
  query FamGetFirstChannel($alphaName: String!) {
    group: group_(where: {alphaName: {_eq: $alphaName}}) {
      id
      channels(
        where: {private: {_eq: false}}, 
        order_by: {default: desc, members_aggregate: {count: desc}},
        limit: 1
      ) {
        id
      }
    }
  }
`;

const StyledContainer = styled.div({
  display: 'flex',
  height: '100%',
});

type Props = RouteComponentProps<{
  famAlphaName: string;
}>;

const FamRedirect: React.FunctionComponent<Props> = ({ match: { params: { famAlphaName } }, history }) => {
  const { auth0User, loading: userLoading } = React.useContext(UserContext);

  const { data, loading: dataLoading } = useQuery<FamGetFirstChannelQuery, FamGetFirstChannelQueryVariables>(
    GetFirstChannelQuery, {
      variables: {
        alphaName: famAlphaName || '',
      },
    },
  );

  const firstCircleId = data?.group?.length && data?.group[0]?.channels?.length ? data.group[0].channels[0].id : null;

  React.useEffect(() => {
    if (!userLoading && !dataLoading && famAlphaName) {
      const url = !auth0User
        ? `/${famAlphaName}/challenges`
        : firstCircleId ? `/${famAlphaName}/circle/${firstCircleId}` : '';

      if (url !== '') history.replace(url);
    }
  }, [history, famAlphaName, auth0User, userLoading, dataLoading, firstCircleId]);

  return (
    <StyledContainer>
      <Nav />
      <FamNonMember />
    </StyledContainer>
  );
};

export default FamRedirect;
