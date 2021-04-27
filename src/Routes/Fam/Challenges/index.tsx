import React from 'react';
import { useParams, RouteComponentProps } from 'react-router';

import FamAnnouncement from 'Routes/Fam/Announcement';
import FamHeader from 'Routes/Fam/Header';
import ChallengesGridList, { SCROLLABLE_DIV_ID } from 'Routes/Fam/Challenges/GridList';
import { STICKY_NAV_HEADER_HEIGHT } from 'Routes/Fam/constants';
import Nav from 'Routes/Fam/NavBar';
import styled from 'styled-components';
import { breakpoints, hideScrollBar } from 'utils/style';
import { logEvent } from 'clients/amplitude';

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
}>;

type PathParamsType = { famAlphaName: string };

const FamChallenges: React.FunctionComponent<Props> = () => {
  const { famAlphaName } = useParams<PathParamsType>();
  React.useEffect(() => {
    logEvent('Fam Challenges', 'Page loaded', { famAlphaName });
  }, [famAlphaName]);

  return (
    <StyledContainer>
      <Nav />
      <StyledContentContainer id={SCROLLABLE_DIV_ID}>
        <StyledContent>
          <FamAnnouncement />
          <FamHeader title="Challenges" />
          <ChallengesGridList />
        </StyledContent>
      </StyledContentContainer>
    </StyledContainer>
  );
};

export default FamChallenges;
