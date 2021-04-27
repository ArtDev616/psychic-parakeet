import ProfileImage from 'components/user/ProfileImage';
import React from 'react';
import Countdown from 'components/time/Countdown';
import styled from 'styled-components';
import { fontStyles } from 'utils/style';
import { WinnerUserFragment } from 'generated/graphql';

const StyledCountdown = styled(Countdown)({
  marginTop: 12,
});

const StyledWinnerRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginTop: 12,
  borderRadius: 8,
  backgroundColor: '#F3F3F7',
  padding: '8px 12px',
});

const StyledWinnerProfile = styled(ProfileImage)({
  borderColor: '#ADAEC5',
});

const StyledWinnerTextContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 8,
});

const StyledWinnerName = styled.small({
  ...fontStyles.small,
  fontWeight: 800,
  color: '#000000',
});

const StyledWinnerText = styled.small({
  ...fontStyles.small,
});

type Props = {
  winner: WinnerUserFragment | null;
  endAt: string | undefined | null;
};

const FamChallengesGridListItemEndRow: React.FunctionComponent<Props> = ({ endAt, winner }) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const challengeEnded = !endAt || now >= new Date(endAt);
  const countdownTimer = !endAt ? null : <StyledCountdown endDate={endAt} />;
  const winnerRow = (
    <StyledWinnerRow>
      <StyledWinnerProfile path={winner?.photos?.length ? winner.photos[0]?.id : undefined} size={24} borderSize={2} />
      <StyledWinnerTextContainer>
        <StyledWinnerName>
          {winner ? `${winner?.firstName} ${winner?.lastName}` : challengeEnded ? 'No Winner' : 'No Submissions'}
        </StyledWinnerName>
        <StyledWinnerText>{challengeEnded ? 'Winner' : 'In the lead'}</StyledWinnerText>
      </StyledWinnerTextContainer>
    </StyledWinnerRow>
  );

  return !challengeEnded ? countdownTimer : winnerRow;
};

export default FamChallengesGridListItemEndRow;
