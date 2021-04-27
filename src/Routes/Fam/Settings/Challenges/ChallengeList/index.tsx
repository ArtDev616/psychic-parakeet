import dayjs from 'dayjs';
import React from 'react';

import ChallengesTable, { ChallengeData } from 'Routes/Fam/Settings/Challenges/ChallengeList/Table';
import Modal from 'components/modals/Modal';
import ChallengeForm from 'Routes/Fam/Settings/Challenges/ChallengeList/Form';
import { ApolloQueryResult } from '@apollo/client';
import {
  SettingsChallengeFragment,
  SettingsChallengeSeriesFragment,
  SettingsGetGroupChallengesQuery,
} from 'generated/graphql';
import { CHALLENGE_MODAL_STYLE_OVERRIDES } from 'Routes/Fam/Settings/Challenges/CreateButtons';

type Props = {
  challenges: Array<SettingsChallengeFragment>;
  challengeSeries?: SettingsChallengeSeriesFragment,
  refetchChallenges: () => Promise<ApolloQueryResult<SettingsGetGroupChallengesQuery>>
}

const SettingsChallenges: React.FunctionComponent<Props> = ({
  challenges,
  challengeSeries,
  refetchChallenges,
}) => {
  const [showChallengeModal, setShowChallengeModal] = React.useState(false);
  const [selectedChallengeId, setSelectedChallengeId] = React.useState<string>();
  const [selectedChallengeSeriesId, setSelectedChallengeSeriesId] = React.useState<string>();
  const isModalVisible = showChallengeModal
    && selectedChallengeSeriesId === challengeSeries?.id;

  const onEditChallengeClick = (challengeId: string, challengeSeriesId?: string) => {
    setSelectedChallengeId(challengeId);
    setSelectedChallengeSeriesId(challengeSeriesId);
    setShowChallengeModal(true);
  };
  const hideChallengeModal = (shouldRefetch?: boolean) => {
    setSelectedChallengeId(undefined);
    setSelectedChallengeSeriesId(undefined);
    setShowChallengeModal(false);
    if (shouldRefetch) {
      refetchChallenges();
    }
  };
  const transformedChallenges: Array<ChallengeData> = (challenges || []).map(c => ({
    id: c.id,
    challengeSeriesId: challengeSeries?.id,
    title: c.title || '',
    prize: c.prize || '',
    imagePath: c.files?.[0].file.path,
    status: dayjs().isBefore(dayjs(c.endAt || '')) ? 'Active' : 'Expired',
    entryCount: `${c.entries_aggregate.aggregate?.count || 0} entries`,
  }));
  return (
    <>
      <Modal
        isModalVisible={isModalVisible}
        styleOverrides={CHALLENGE_MODAL_STYLE_OVERRIDES}
        hide={hideChallengeModal}
      >
        <ChallengeForm
          challengeId={selectedChallengeId}
          challengeSeriesId={selectedChallengeSeriesId}
          closeModal={hideChallengeModal}
        />
      </Modal>
      {transformedChallenges.length
        ? <ChallengesTable data={transformedChallenges} onEditClick={onEditChallengeClick} />
        : "No challenges found for this series. Why don't you create one?"}
    </>
  );
};

export default SettingsChallenges;
