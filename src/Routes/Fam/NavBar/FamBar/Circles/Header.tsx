import React from 'react';
import styled from 'styled-components';
import { breakpoints, fontStyles } from 'utils/style';

const StyledContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px 24px 16px 24px',
  [breakpoints.xs.css]: {
    padding: '20px 20px 16px 24px',
  },
});

const StyledTitle = styled.h4({
  ...fontStyles.h4,
});

const FamBarCircleHeader: React.FunctionComponent<Record<string, never>> = () => {
  return (
    <StyledContainer>
      <StyledTitle>Circles</StyledTitle>
    </StyledContainer>
  );
};

export default FamBarCircleHeader;
