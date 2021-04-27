import { logEvent } from 'clients/amplitude';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Controls from '../Controls';
import { StyledContainer } from '../Step1User';
import challenges from '../Step3Challenge/challenges';

const StyledExtendedContainer = styled(StyledContainer)({
  flexDirection: 'column',
});

// @ts-ignore
const StyledInput = styled.input<{marginBottom?: boolean}>((props) => ({
  width: '100%',
  maxWidth: 560,
  textAlign: 'center',
  borderRadius: 40,
  padding: '12px 24px',
  marginTop: 20,
  marginBottom: props.marginBottom ? 24 : 0,
  boxSizing: 'border-box',
  fontSize: 16,
  fontFamily: 'stolzl-book',
  border: '1px solid #E5E5E5',
  ':focus': {
    borderColor: '#03004E',
  },
}));

const StyledLabel = styled.label({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  fontWeight: 'bold',
  fontSize: 24,
  fontFamily: 'stolzl-bold',
  color: '#03004E',
  textAlign: 'center',
  ':first-child': {
    marginBottom: 80,
  },
});

const StyledSelect = styled.select({
  width: '100%',
  maxWidth: 560,
  marginTop: 20,
  appearance: 'none',
  fontSize: 16,
  fontFamily: 'stolzl-book',
  background: '#FFFFFF',
  boxSizing: 'border-box',
  padding: '12px 24px',
  textAlign: 'center',
  textAlignLast: 'center',
  border: '1px solid #E5E5E5',
  borderRadius: 40,
  ':focus': {
    borderColor: '#03004E',
  },
});

const CreateFamDetails: React.FunctionComponent<Record<string, never>> = () => {
  const history = useHistory();
  const {
    firstName, lastName, email, picture, famName: initialFamName, challengeCategory: initialChallengeCategory,
  } = history
    .location.state as any || {};
  const [famName, setFamName] = React.useState(initialFamName || `${firstName} ${lastName}`.trim());
  const [challengeCategory, setChallengeCategory] = React.useState(
    initialChallengeCategory || Object.keys(challenges)[0],
  );
  const onNextClick = () => {
    logEvent('Create Fam', 'navigated to step 3');
    const newState = {
      firstName,
      lastName,
      picture,
      email,
      famName,
      challengeCategory,
    };
    history.replace('/create-fam/step-2', newState);
    history.push('/create-fam/step-3', newState);
  };

  // Redirect back to step 1 if data is missing
  React.useEffect(() => {
    if (!firstName || !lastName || !email || !picture) {
      history.replace('/create-fam/step-1');
    }
  });

  return (
    <>
      <StyledExtendedContainer>
        <StyledLabel>
          <span>
            Fam name
          </span>
          <StyledInput
            onChange={(e) => setFamName(e.target.value)}
            defaultValue={famName}
            placeholder="Your fam name"
          />
        </StyledLabel>
        <StyledLabel>
          <span>What does your community love?</span>
          <StyledSelect
            value={challengeCategory}
            onChange={(e) => setChallengeCategory(e.target.value)}
            placeholder="Select something your community loves"
          >
            {Object.keys(challenges).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </StyledSelect>
          {/* disabled={!famName || !challengeCategory}  */}
        </StyledLabel>
      </StyledExtendedContainer>
      <Controls
        canContinue={famName?.length > 2 && challengeCategory.length}
        onNextClick={onNextClick}
      />
    </>
  );
};

export default CreateFamDetails;
