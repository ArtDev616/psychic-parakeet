import { ReactComponent as ChevronRight } from 'assets/svg/chevronRight.svg';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { breakpoints } from '../../utils/style';

type PropsType = {
  canContinue: boolean;
  onBackClick?: () => void
  onNextClick: () => void
}

const StyledControls = styled.div({
  display: 'flex',
  width: '100%',
  marginBottom: 24,
  justifyContent: 'space-between',
  [breakpoints.md.css]: {
    justifyContent: 'center',
  },
  [breakpoints.xs.css]: {
    flexDirection: 'column',
  },
});

const StyledButton = styled.a({
  padding: 12,
  minWidth: 190,
  borderRadius: 40,
  fontSize: 14,
  fontFamily: 'stolzl-bold',
  boxSizing: 'border-box',
  textAlign: 'center',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ':first-child': {
    marginRight: 12,
    [breakpoints.xs.css]: {
      marginRight: 0,
    },
  },
  [breakpoints.xs.css]: {
    marginBottom: 12,
  },
});

const StyledPrimaryButton = styled(StyledButton)((props: {disabled: boolean}) => ({
  backgroundColor: props.disabled ? '#ccc' : '#40D5A0',
  cursor: props.disabled ? 'not-allowed' : 'pointer',
  color: '#FFFFFF',
  ':hover': {
    backgroundColor: props.disabled ? '#ccc' : '#FFFFFF',
    color: props.disabled ? '#FFFFFF' : '#40D5A0',
  },
}));

const StyledSecondaryButton = styled(StyledButton)({
  border: '1px solid #03004E',
  color: '#03004E',
  ':hover': {
    backgroundColor: '#03004E',
    color: '#FFFFFF',
  },
});

const StyledChevronRight = styled(ChevronRight)({
  marginLeft: 6,
  width: 20,
  height: 20,
});

const Controls: React.FunctionComponent<PropsType> = ({ canContinue, onBackClick, onNextClick }) => {
  const history = useHistory();
  return (
    <StyledControls>
      <StyledSecondaryButton onClick={onBackClick || history.goBack}>Back</StyledSecondaryButton>
      <StyledPrimaryButton disabled={!canContinue} onClick={canContinue ? onNextClick : undefined}>
        <span>
          Continue
        </span>
        <StyledChevronRight />
      </StyledPrimaryButton>
    </StyledControls>
  );
};

export default Controls;
