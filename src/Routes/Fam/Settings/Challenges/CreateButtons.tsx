import React from 'react';
import styled from 'styled-components';

import Button from 'components/buttons/Button';
import { ReactComponent as ChallengeIcon } from 'assets/svg/challenge.svg';
import Modal from 'components/modals/Modal';
import ChallengeSeriesForm from 'Routes/Fam/Settings/Challenges/SeriesSection/Form';
import ChallengeForm from 'Routes/Fam/Settings/Challenges/ChallengeList/Form';

export const CHALLENGE_SERIES_MODAL_STYLE_OVERRIDES = {
  body: {
    minHeight: '425px',
  },
};

export const CHALLENGE_MODAL_STYLE_OVERRIDES = {
  body: {
    maxHeight: 650, maxWidth: 720, width: '100%', height: '100vh',
  },
};

const StyledButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
});

const StyledChallengeIcon = styled(ChallengeIcon)({
  marginRight: 8,
  width: 16,
  height: 16,
});

const SettingsCreateButtons: React.FunctionComponent<Record<string, never>> = () => {
  const [showChallengeModal, setShowChallengeModal] = React.useState(false);
  const [showChallengeSeriesModal, setShowChallengeSeriesModal] = React.useState(false);
  const hideChallengeModal = () => setShowChallengeModal(false);
  const hideChallengeSeriesModal = () => setShowChallengeSeriesModal(false);

  return (
    <>
      <StyledButtonContainer>
        <Button type="tertiary" onClick={() => setShowChallengeSeriesModal(true)} style={{ marginRight: 24 }}>
          New challenge series
        </Button>
        <Button type="primary" onClick={() => setShowChallengeModal(true)}>
          <StyledChallengeIcon />
          New challenge
        </Button>
      </StyledButtonContainer>
      <Modal
        isModalVisible={showChallengeSeriesModal}
        hide={hideChallengeSeriesModal}
        styleOverrides={CHALLENGE_SERIES_MODAL_STYLE_OVERRIDES}
      >
        <ChallengeSeriesForm closeModal={hideChallengeSeriesModal} />
      </Modal>
      <Modal
        isModalVisible={showChallengeModal}
        styleOverrides={CHALLENGE_MODAL_STYLE_OVERRIDES}
        hide={hideChallengeModal}
      >
        <ChallengeForm closeModal={hideChallengeModal} />
      </Modal>
    </>
  );
};

export default SettingsCreateButtons;
