import { gql, useQuery } from '@apollo/client';
import React from 'react';
import {
  SettingsGetGroupChallengesQuery,
  SettingsGetGroupChallengesQueryVariables,
} from 'generated/graphql';
import styled from 'styled-components';

import { fontStyles } from 'utils/style';
import Modal from 'components/modals/Modal';
import ChallengeSeriesForm from 'Routes/Fam/Settings/Challenges/SeriesSection/Form';
import { ReactComponent as EditIcon } from 'assets/svg/edit.svg';
import SettingsChallenges from 'Routes/Fam/Settings/Challenges/ChallengeList';
import { CHALLENGE_SERIES_MODAL_STYLE_OVERRIDES } from 'Routes/Fam/Settings/Challenges/CreateButtons';

const StyledSeries = styled.div({
  marginBottom: 32,
});

const StyledSeriesTitle = styled.h4({
  ...fontStyles.h4,
  display: 'flex',
  alignItems: 'center',
  color: '#333333',
  padding: '18px 0',
  borderBottom: '',
});

const StyledSeriesTitleUngrouped = styled(StyledSeriesTitle)({
  ...fontStyles.h6,
  padding: '18px 0',
});

const StyledEditIcon = styled(EditIcon)`
  color: #ADAEC5;
  padding: 4px 8px;
  cursor: pointer;
  display: none;

  ${StyledSeriesTitle}:hover & {
    display: block;
  },
`;

const Fragments = {
  SettingsChallengeSeries: gql`
    fragment SettingsChallengeSeries on challenge_series {
      id
      title
    }
  `,
  SettingsChallenge: gql`
    fragment SettingsChallenge on challenge {
      id
      title
      prize
      endAt
      entries_aggregate {
        aggregate {
          count
        }
      }
      files {
        file {
          id
          path
        }
      }
      challenge_series_challenges {
        challenge_series {
          id
          title
        }
      }
    } 
  `,
};

const GetGroupChallengesQuery = gql`
  query SettingsGetGroupChallenges($alphaName: String!) {
    details: group_(where: {alphaName: {_eq: $alphaName}}) {
      id
      challengeGroup {
        id
        challenges(order_by: {endAt: desc}) {
          ...SettingsChallenge
        }
        challenge_series(order_by: {createdAt: desc}) {
          ...SettingsChallengeSeries
        }
      }
    }
  }
  ${Fragments.SettingsChallenge}
  ${Fragments.SettingsChallengeSeries}
`;

type Props = {
  famAlphaName: string;
}

const SettingsChallengeSeries: React.FunctionComponent<Props> = ({ famAlphaName }) => {
  const [selectedChallengeSeriesId, setSelectedChallengeSeriesId] = React.useState('');
  const [showChallengeSeriesModal, setShowChallengeSeriesModal] = React.useState(false);
  const { data, refetch } = useQuery<
    SettingsGetGroupChallengesQuery,
    SettingsGetGroupChallengesQueryVariables
  >(
    GetGroupChallengesQuery, {
      variables: {
        alphaName: famAlphaName,
      },
    },
  );

  const allChallenges = data?.details[0].challengeGroup?.challenges || [];
  const allChallengeSeries = data?.details[0].challengeGroup?.challenge_series || [];
  const ungroupedChallenges = allChallenges.filter(c => c.challenge_series_challenges.length === 0);

  const onEditChallengeSeriesClick = (challengeSeriesId: string) => {
    setSelectedChallengeSeriesId(challengeSeriesId);
    setShowChallengeSeriesModal(true);
  };
  const hideChallengeSeriesModal = (shouldRefetch?: boolean) => {
    setSelectedChallengeSeriesId('');
    setShowChallengeSeriesModal(false);
    if (shouldRefetch) {
      refetch();
    }
  };

  return (
    <>
      <Modal
        isModalVisible={showChallengeSeriesModal}
        hide={hideChallengeSeriesModal}
        styleOverrides={CHALLENGE_SERIES_MODAL_STYLE_OVERRIDES}
      >
        <ChallengeSeriesForm
          challengeSeriesId={selectedChallengeSeriesId}
          closeModal={hideChallengeSeriesModal}
        />
      </Modal>
      {allChallengeSeries.map(series => {
        return (
          <StyledSeries key={series.id}>
            <StyledSeriesTitle>
              {series.title}
              <StyledEditIcon onClick={() => onEditChallengeSeriesClick(series.id)} />
            </StyledSeriesTitle>
            <SettingsChallenges
              challenges={
                allChallenges.filter(c => c.challenge_series_challenges.map(
                  s => s.challenge_series.id,
                ).indexOf(series.id) !== -1)
              }
              challengeSeries={series}
              refetchChallenges={refetch}
            />
          </StyledSeries>
        );
      })}
      {Boolean(ungroupedChallenges.length) && (
        <StyledSeries>
          <StyledSeriesTitleUngrouped>
            Ungrouped
          </StyledSeriesTitleUngrouped>
          <SettingsChallenges
            challenges={ungroupedChallenges}
            refetchChallenges={refetch}
          />
        </StyledSeries>
      )}
    </>
  );
};

export default SettingsChallengeSeries;
