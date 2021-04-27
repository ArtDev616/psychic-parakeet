import { UserContext } from 'contexts/user';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { breakpoints } from 'utils/style';
import { StyledContainer } from '../Step1User';
import Step3Buttons from './buttons';
import ChallengeCards from './cards';
import { Challenge } from './types';

const StyledExtendedContainer = styled(StyledContainer)({
  flexDirection: 'column',
});

const StyledTitle = styled.h1({
  fontWeight: 'bold',
  fontSize: 24,
  fontFamily: 'stolzl-bold',
  color: '#03004E',
  margin: 0,
  marginTop: 20,
  textAlign: 'center',
  [breakpoints.md.css]: {
    marginTop: 0,
  },
});

const StyledP = styled.p({
  fontSize: 14,
  fontFamily: 'stolzl-book',
  width: '70%',
  color: '#4B5186',
  lineHeight: '24px',
  textAlign: 'center',
  marginTop: 24,
  marginBottom: 60,
  [breakpoints.xs.css]: {
    marginTop: 12,
    marginBottom: 16,
  },
});

const CreateFamChallenge: React.FunctionComponent<Record<string, never>> = () => {
  const history = useHistory();
  const { auth0User } = useContext(UserContext);
  const [selectedChallenges, setSelectedChallenges] = React.useState<Array<Challenge>>([]);
  const {
    firstName, lastName, email, picture, famName, challengeCategory,
  } = (history.location.state as any) || {};

  // Redirect back to step 1 if data is missing
  React.useEffect(() => {
    if (!firstName || !lastName || !email || !picture || !famName || !challengeCategory) {
      history.replace('/create-fam/step-1');
    }
  });

  return (
    <>
      <StyledExtendedContainer>
        <StyledTitle>Select a challenge to get started</StyledTitle>
        <StyledP>
          Challenges will increase the engagement of your community. Pick up the challenge that better fits with your
          audience. You will be able to edit this challenge and create new ones later!
        </StyledP>
        <ChallengeCards
          challengeCategory={challengeCategory}
          selectedChallenges={selectedChallenges}
          setSelectedChallenges={setSelectedChallenges}
        />
      </StyledExtendedContainer>
      <Step3Buttons
        famName={famName}
        picture={picture}
        selectedChallenges={selectedChallenges}
        userId={auth0User?.hasuraUserId}
      />
    </>
  );
};

export default CreateFamChallenge;
