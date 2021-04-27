/* eslint-disable no-underscore-dangle */
import { gql, useQuery } from '@apollo/client';
import svg from 'assets/svg';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { breakpoints, fontStyles } from 'utils/style';
import { FamBarGetGroupStatsQuery, FamBarGetGroupStatsQueryVariables } from 'generated/graphql';
import {
  RouteComponentProps, withRouter,
} from 'react-router';
import { ModalContext, CustomModalTypes } from 'contexts/modal';
import { openMagicLink } from 'utils/helpers';
import { NavLink } from 'react-router-dom';
import { NavBarContext } from 'contexts/navbar';
import { logEvent } from 'clients/amplitude';

const StyledContainer = styled.div({
  padding: '0 24px',
  [breakpoints.xs.css]: {
    padding: '0 24px',
  },
});

const StyledHorizontalDivider = styled.div({
  borderBottom: '1px solid #F0F0F0',
  width: '94%',
  margin: 'auto',
});

const StyledButtonRow = styled.div({
  padding: 12,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: 8,
  backgroundColor: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#EEF6F6',
  },
});

const StyledNavButton = styled(NavLink)({
  textDecoration: 'none',
  padding: 12,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: 8,
  backgroundColor: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#EEF6F6',
  },
});

const StyledButtonText = styled.label({
  ...fontStyles.h6,
  textAlign: 'left',
  marginLeft: 12,
  cursor: 'pointer',
});

const StyledButtonIcon = styled.img({
  height: 14,
  width: 14,
});

const GetGroupStatsQuery = gql`
  query FamBarGetGroupStats($alphaName: String!) {
    group_(where: {alphaName: {_eq: $alphaName}}) {
      id
      users_aggregate {
        aggregate {
          count
        }
      }
      challengeGroup {
        id
        challenges_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  }
`;

type PathParamsType = {
  famAlphaName: string,
}

type Props = RouteComponentProps<PathParamsType>

const shouldShowMemberCount = (count: number, famAlphaName: string) => famAlphaName !== 'heroes' && count > 100;

const ContentButtons: React.FunctionComponent<Props> = ({ match: { params: { famAlphaName } } }) => {
  const { data: stats, loading } = useQuery<FamBarGetGroupStatsQuery, FamBarGetGroupStatsQueryVariables>(
    GetGroupStatsQuery,
    { variables: { alphaName: famAlphaName } },
  );

  const challengeCount = (stats?.group_[0].challengeGroup?.challenges_aggregate.aggregate?.count || 0);
  const memberCount = (stats?.group_[0].users_aggregate.aggregate?.count || 0);

  const { closeNav } = useContext(NavBarContext);
  const { showModal } = useContext(ModalContext);
  const onChallengesClick = () => {
    logEvent('Fam Bar', 'Challenges tab click', { famAlphaName });
    closeNav();
  };
  const openDownloadAppModal = () => {
    logEvent('Fam Bar', 'Members tab click', { famAlphaName });
    showModal({
      type: CustomModalTypes.DOWNLOAD_APP,
      buttonAction: () => openMagicLink(famAlphaName),
    });
  };

  if (loading) {
    return null;
  }

  return (
    <StyledContainer>
      <StyledHorizontalDivider />
      <StyledNavButton
        to={`/${famAlphaName}/challenges`}
        activeStyle={{ backgroundColor: '#EEF6F6' }}
        onClick={onChallengesClick}
      >
        <StyledButtonIcon src={svg.checkmark} alt="check_mark" />
        <StyledButtonText>
          Challenges
          {challengeCount > 0 ? ` (${challengeCount})` : ''}
        </StyledButtonText>
      </StyledNavButton>
      <StyledHorizontalDivider />
      <StyledButtonRow onClick={openDownloadAppModal}>
        <StyledButtonIcon src={svg.membersIcon} alt="members" />
        <StyledButtonText>
          Members
          {shouldShowMemberCount(memberCount, famAlphaName) ? ` (${memberCount})` : ''}
        </StyledButtonText>
      </StyledButtonRow>
      <StyledHorizontalDivider />
    </StyledContainer>
  );
};

export default withRouter(ContentButtons);
