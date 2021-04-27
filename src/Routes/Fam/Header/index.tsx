import svg from 'assets/svg';
import Button from 'components/buttons/ImageButton';
import { NavBarContext } from 'contexts/navbar';
import React, { useContext } from 'react';
import { HAMBURGER_MENU_ICON_SIZE } from 'Routes/Fam/constants';
import styled from 'styled-components';
import { breakpoints, fontStyles, textOverflowEllipses } from 'utils/style';

// Styled components
const StyledContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: '28px 0 20px',
  borderBottom: '1px solid #1A474D0F',
  [breakpoints.md.css]: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    border: 'none',
    padding: 0,
    backgroundColor: '#f2f6f6',
  },
});

const StyledIconButton = styled(Button)({
  height: 24,
  width: 24,
  paddingRight: 20,
});

const StyledHamburger = styled(Button)({
  height: 20,
  width: 20,
  display: 'none',
  [breakpoints.md.css]: {
    display: 'block',
    padding: '20px 24px',
  },
});

const StyledTitle = styled.p<{$back: boolean}>(props => ({
  ...(props.$back ? fontStyles.h4 : fontStyles.h1),
  ...textOverflowEllipses,
  [breakpoints.md.css]: {
    ...fontStyles.h4,
  },
}));

type Props = {
  title: string;
  goBack?: () => void
};

const FamHeader: React.FunctionComponent<Props> = ({ title, goBack }) => {
  const { openNav } = useContext(NavBarContext);

  return (
    <StyledContainer>
      <StyledHamburger size={HAMBURGER_MENU_ICON_SIZE} src={svg.hamburger} onClick={openNav} />
      {Boolean(goBack) && <StyledIconButton src={svg.chevronLeft} onClick={goBack} />}
      <StyledTitle $back={Boolean(goBack)}>{title}</StyledTitle>
    </StyledContainer>
  );
};

export default FamHeader;
