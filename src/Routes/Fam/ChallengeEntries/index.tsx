import React from 'react';
import { RouteComponentProps } from 'react-router';
import FamAnnouncement from 'Routes/Fam/Announcement';
import FamHeader from 'Routes/Fam/Header';
import { STICKY_NAV_HEADER_HEIGHT } from 'Routes/Fam/constants';
import NavBar from 'Routes/Fam/NavBar';
import styled from 'styled-components';
import { hideScrollBar, breakpoints } from 'utils/style';
import BubbleHeader from 'Routes/Fam/ChallengeEntries/BubbleHeader';
import GridList, { SCROLLABLE_DIV_ID } from 'Routes/Fam/ChallengeEntries/GridList';
import useIsFamMember from 'hooks/useIsFamMember';
import FamNonMember from 'Routes/Fam/NonMember';

// Styled components
const StyledContainer = styled.div({
  display: 'flex',
  height: '100%',
});

const StyledContentContainer = styled.div({
  backgroundColor: '#f2f6f6',
  flex: 1,
  overflow: 'auto',
});

const StyledContent = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '0 28px',
  maxWidth: 1200,
  margin: '0 auto',
  ...hideScrollBar,
  [breakpoints.md.css]: {
    paddingTop: STICKY_NAV_HEADER_HEIGHT,
  },
});

type Props = RouteComponentProps<{
  famAlphaName: string;
  challengeId: string;
}>;

const FamChallenge: React.FunctionComponent<Props> = ({
  match: {
    params: { famAlphaName, challengeId },
  },
  history,
}) => {
  const { isFamMember } = useIsFamMember();
  const goBack = () => history.push(`/${famAlphaName}/challenges`);
  return (
    <StyledContainer>
      <NavBar />
      {!isFamMember ? <FamNonMember /> : (
        <StyledContentContainer id={SCROLLABLE_DIV_ID}>
          <StyledContent>
            <FamAnnouncement />
            <FamHeader title="Challenges" goBack={goBack} />
            <BubbleHeader challengeId={challengeId} />
            <GridList challengeId={challengeId} />
          </StyledContent>
        </StyledContentContainer>
      )}
    </StyledContainer>
  );
};

export default FamChallenge;
