import svg from 'assets/svg';
import React from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../../utils/style';
import challenges from './challenges';
import { Challenge, ChallengeCategory } from './types';

type PropsType = {
  challengeCategory: ChallengeCategory;
  selectedChallenges: Array<Challenge>;
  setSelectedChallenges: (items: Array<Challenge>) => void;
}

const StyledCardContainer = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'center',
});

const StyledCard = styled.div<{ selected: boolean }>(props => ({
  position: 'relative',
  width: 252,
  maxWidth: 252,
  display: 'flex',
  flex: '1 auto',
  flexDirection: 'column',
  backgroundColor: '#94afff',
  background: props.selected ? 'linear-gradient(45deg, #FB8CFF, #2CFF8B)' : 'transparent',
  borderRadius: 12,
  overflow: 'hidden',
  padding: 6,
  marginRight: 8,
  cursor: 'pointer',
  userDrag: 'none',
  userSelect: 'none',
  ':last-child': {
    marginRight: 0,
    marginBottom: 0,
  },
  [breakpoints.md.css]: {
    marginBottom: 24,
  },
}));

const StyledCheckMark = styled.div<{ selected: boolean }>(props => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 20,
  height: 20,
  borderRadius: '100%',
  border: '2px solid #FFFFFF',
  position: 'absolute',
  backgroundColor: props.selected ? '#40D5A0' : 'rgba(255, 255, 255, 0.6)',
  top: 12,
  right: 12,
}));

const StyledCardImage = styled.img({
  height: 160,
  width: '100%',
  objectFit: 'cover',
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
  overflow: 'hidden',
});

const StyledCardContent = styled.div({
  backgroundColor: '#FFFFFF',
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
  flex: 1,
  padding: 20,
});

const StyledCardTitle = styled.h2({
  fontSize: 14,
  fontWeight: 'bold',
  fontFamily: 'stolzl-bold',
  color: '#2F2F2F',
  margin: 0,
  marginBottom: 6,
});

const StyledCardDescription = styled.p({
  fontSize: 11,
  fontFamily: 'stolzl-book',
  lineHeight: '18px',
  color: '#2F2F2F',
  margin: 0,
});

const getChallengeIndex = (selectedChallenges: Array<Challenge>, challenge: Challenge) => {
  return selectedChallenges.findIndex(c => c.title === challenge.title);
};

// eslint-disable-next-line max-len
const ChallengeCards: React.FunctionComponent<PropsType> = ({ challengeCategory, selectedChallenges, setSelectedChallenges }) => {
  const addOrRemoveSelectedChallenge = (challenge: Challenge) => {
    const foundChallengeIndex = getChallengeIndex(selectedChallenges, challenge);
    if (foundChallengeIndex !== -1) {
      const newChallenges = [...selectedChallenges];
      newChallenges.splice(foundChallengeIndex, 1);
      setSelectedChallenges(newChallenges);
    } else {
      setSelectedChallenges([...selectedChallenges, challenge]);
    }
  };

  return (
    <StyledCardContainer>
      {challengeCategory
        && challenges[challengeCategory as ChallengeCategory].map((challenge : Challenge) => {
          const isSelected = getChallengeIndex(selectedChallenges, challenge) !== -1;
          return (
            <StyledCard
              selected={isSelected}
              key={challenge.title}
              onClick={() => addOrRemoveSelectedChallenge(challenge)}
            >
              <StyledCheckMark selected={isSelected}>
                {isSelected && <img src={svg.checkmark} alt="checkmark" />}
              </StyledCheckMark>
              <StyledCardImage src={challenge.image} alt={challenge.title} />
              <StyledCardContent>
                <StyledCardTitle>{challenge.title}</StyledCardTitle>
                <StyledCardDescription>{challenge.description}</StyledCardDescription>
              </StyledCardContent>
            </StyledCard>
          );
        })}
    </StyledCardContainer>
  );
};

export default ChallengeCards;
