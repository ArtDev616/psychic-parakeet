import svg from 'assets/svg';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { breakpoints } from '../../utils/style';

const StyledContainer = styled.div({
  width: '100%',
});

const StyledLink = styled.a({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  textDecoration: 'none',
  color: '#000000',
  marginTop: 56,
  marginBottom: 56,
  [breakpoints.md.css]: {
    marginTop: 32,
    marginBottom: 32,
  },
});

const StyledProgressBar = styled.div({
  backgroundColor: '#CDEAEA',
  height: 24,
  width: '100%',
  borderRadius: 18,
});

const StyledProgress = styled.div((props: {percentage: number}) => ({
  width: `${props.percentage}%`,
  background: 'linear-gradient(90deg, #40D5A0 0%, #3BB6B5 102.2%), #CDEAEA',
  transition: 'width 1s',
  borderRadius: 18,
  height: 24,
}));

const ProgressBar: React.FunctionComponent<Record<string, any>> = () => {
  const history = useHistory();
  const step = parseInt(history.location.pathname[history.location.pathname.length - 1], 10);
  const percentage = step === 1 ? 50 : step === 2 ? 75 : 95;
  return (
    <StyledContainer>
      <StyledLink href="https://vibely.io">
        <img width={18} height={18} src={svg.x} alt="close" />
      </StyledLink>
      <StyledProgressBar>
        <StyledProgress percentage={percentage} />
      </StyledProgressBar>
    </StyledContainer>
  );
};

export default ProgressBar;
