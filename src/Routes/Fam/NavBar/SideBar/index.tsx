import assets from 'assets';
import React, { useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import AddFamButton from 'Routes/Fam/NavBar/SideBar/AddFamButton';
import UserButtons from 'Routes/Fam/NavBar/SideBar/UserButtons';
import { SideBarWidth } from 'Routes/Fam/NavBar/constants';
import FamListItem from 'Routes/Fam/NavBar/SideBar/FamListItem';
import { breakpoints, hideScrollBar } from 'utils/style';
import { UserContext } from 'contexts/user';
import {
  NavGetUserGroupsQuery,
  NavGetUserGroupsQueryVariables,
  NavGetPendingUserGroupsQuery,
  NavGetPendingUserGroupsQueryVariables,
} from 'generated/graphql';
import { useHistory } from 'react-router';

const StyledContainer = styled.div({
  width: SideBarWidth.xl,
  flex: `0 0 ${SideBarWidth.xl}px`,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f2f6f6',
  [breakpoints.xs.css]: {
    width: SideBarWidth.xs,
    flex: `0 0 ${SideBarWidth.xs}px`,
  },
});

const StyledLogoContainer = styled.a({
  padding: '20px 0 8px',
});

const StyledHeartLogo = styled.img({
  height: 46,
});

const StyledFamListContainer = styled.div({
  display: 'flex',
  flex: 1,
  width: '100%',
  flexDirection: 'column',
  overflow: 'auto',
  position: 'relative',
  ...hideScrollBar,
});

const StyledFamList = styled.ul({
  padding: 0,
  margin: 0,
  overflow: 'auto',
  listStyleType: 'none',
  ...hideScrollBar,

  // Add fade
  '::after': {
    content: "''",
    position: 'absolute',
    zIndex: 1,
    // TODO(selmank): get the height of the input bar instead of hardcoding
    bottom: -1,
    left: 0,
    pointerEvents: 'none',
    backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255, 0), rgb(242, 246, 246, 1) 90%)',
    width: '100%',
    height: 35,
  },
});

const Fragments = {
  navGroup: gql`
    fragment NavGroup on group_ {
      id
      name
      alphaName
      imageUrl
      channels(
        where: {private: {_eq: false}}, 
        order_by: {default: desc, members_aggregate: {count: desc}},
        limit: 1
      ) {
        id
      }
    }
  `,
};

const GetUserGroupsQuery = gql`
  query NavGetUserGroups($userId: uuid!, $limit: Int!, $offset: Int!) {
    groups: user_group(
      where: {userId: {_eq: $userId}}
      limit: $limit
      offset: $offset
      order_by: { group: { name: asc } }
    ) {
      group {
        ...NavGroup
      }
    }
  }
  ${Fragments.navGroup}
`;

const GetPendingUserGroupsQuery = gql`
  query NavGetPendingUserGroups($userId: uuid!) {
    pendingGroups: group_join_request(where: {userId: {_eq: $userId}, status: {_eq: pending}}) {
      group {
        ...NavGroup
      }
    }
  }
  ${Fragments.navGroup}
`;

const SideBar: React.FunctionComponent<Record<string, never>> = () => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const { data: pendingUserGroups } = useQuery<NavGetPendingUserGroupsQuery, NavGetPendingUserGroupsQueryVariables>(
    GetPendingUserGroupsQuery, {
      variables: {
        userId: user?.id || '',
      },
      skip: !user?.id,
    },
  );

  // TODO(selmank): consider paginating
  const { data: userGroups } = useQuery<NavGetUserGroupsQuery, NavGetUserGroupsQueryVariables>(
    GetUserGroupsQuery, {
      variables: {
        userId: user?.id || '',
        limit: 100,
        offset: 0,
      },
      skip: !user?.id,
    },
  );

  const navigateCreateFam = () => history.push('/create-fam/step-1');

  // Render list data
  const famListData = (userGroups?.groups || []).map(result => (
    <FamListItem key={result.group.id} fam={result.group} />
  ));

  const famListPendingData = (pendingUserGroups?.pendingGroups || []).map(result => (result.group ? (
    <FamListItem key={result.group.id} fam={result.group} pending />
  ) : null));

  const didLoadGroups = Boolean(userGroups && pendingUserGroups);

  return (
    <StyledContainer>
      <StyledLogoContainer href="https://vibely.io">
        <StyledHeartLogo src={assets.svg.vibelyHeart} alt="vibely_logo" />
      </StyledLogoContainer>
      <StyledFamListContainer>
        {didLoadGroups && (
          <StyledFamList>
            {famListData}
            {famListPendingData}
            <AddFamButton onClick={navigateCreateFam} />
          </StyledFamList>
        )}
      </StyledFamListContainer>
      <UserButtons />
    </StyledContainer>
  );
};

export default SideBar;
