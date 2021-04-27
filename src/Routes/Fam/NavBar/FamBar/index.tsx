import React from 'react';
import Circles from 'Routes/Fam/NavBar/FamBar/Circles';
import ContentButtons from 'Routes/Fam/NavBar/FamBar/ContentButtons';
import Header from 'Routes/Fam/NavBar/FamBar/Header';
import styled from 'styled-components';
import { hideScrollBar } from 'utils/style';
import { FamBarWidth, NavBarBreakpoint } from 'Routes/Fam/NavBar/constants';

const StyledFamBar = styled.div({
  width: FamBarWidth.xl,
  flex: `0 0 ${FamBarWidth.xl}px`,
  height: '100%',
  overflow: 'auto',
  ...hideScrollBar,
  [NavBarBreakpoint]: {
    width: '100%',
    flex: 1,
  },
});

const FamBar: React.FunctionComponent<Record<string, any>> = () => (
  <StyledFamBar>
    <Header />
    <ContentButtons />
    <Circles />
  </StyledFamBar>
);

export default FamBar;
