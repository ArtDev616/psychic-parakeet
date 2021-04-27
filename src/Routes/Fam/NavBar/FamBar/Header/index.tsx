/* eslint-disable no-underscore-dangle */
import { gql, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import FamDetails from 'Routes/Fam/NavBar/FamBar/Header/FamDetails';
import IntroRow from 'Routes/Fam/NavBar/FamBar/Header/IntroRow';
import styled from 'styled-components';
import { FamBarGetGroupQuery, FamBarGetGroupQueryVariables } from 'generated/graphql';
import { useParams } from 'react-router';
import { breakpoints } from 'utils/style';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SettingsIcon } from 'assets/svg/settings.svg';
import { UserContext } from 'contexts/user';

const StyledContainer = styled.div({});

const StyledFamImage = styled.img({
  width: '100%',
  height: 200,
  objectFit: 'cover',
  [breakpoints.xs.css]: {
    height: 180,
  },
});

const StyledFamImageContainer = styled.div({
  position: 'relative',
  display: 'flex',
});

const StyledGradient = styled.div({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 38.94%)',
});

const StyledSettingsIcon = styled(NavLink)({
  color: '#ffffff',
  position: 'absolute',
  top: 16,
  right: 16,
  padding: 8,
  zIndex: 1,
  [breakpoints.md.css]: {
    position: 'fixed',
    top: 16,
    right: 52,
    padding: 0,
  },
});

const GetGroupQuery = gql`
  query FamBarGetGroup($alphaName: String!) {
    group_(where: {alphaName: {_eq: $alphaName}}) {
      id
      alphaName
      description
      imageUrl
      name
      userCount
      leader_ {
        id
        firstName
        lastName
        photos
      }
    }
  }
`;

type PathParamsType = {
  famAlphaName: string,
}

const FamHeader: React.FunctionComponent<Record<string, never>> = () => {
  const { user } = useContext(UserContext);
  const params = useParams<PathParamsType>();
  const { loading, data: groups } = useQuery<FamBarGetGroupQuery, FamBarGetGroupQueryVariables>(GetGroupQuery, {
    variables: {
      alphaName: params.famAlphaName,
    },
  });

  const group = groups?.group_[0];

  if (loading || !group) {
    return null;
  }

  return (
    <StyledContainer>
      <StyledFamImageContainer>
        {(user?.employee || user?.id === group.leader_?.id) && (
          <StyledSettingsIcon to={`/${params.famAlphaName}/settings/challenges`}>
            <SettingsIcon />
          </StyledSettingsIcon>
        )}
        <StyledFamImage alt="fam_image" src={group.imageUrl || ''} />
        <StyledGradient />
      </StyledFamImageContainer>
      <IntroRow
        leaderImage={group.leader_?.photos[0].id}
        leaderName={`${group.leader_?.firstName} ${group.leader_?.lastName}`}
      />
      <FamDetails groupId={group.id} groupName={group.name} groupDescription={group.description} />
    </StyledContainer>
  );
};

export default FamHeader;
