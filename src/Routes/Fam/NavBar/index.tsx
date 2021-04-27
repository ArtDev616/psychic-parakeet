import svg from 'assets/svg';
import Button from 'components/buttons/ImageButton';
import { ModalContext } from 'contexts/modal';
import { NavBarContext } from 'contexts/navbar';
import useClickOutside from 'hooks/useClickOutside';
import React, { useContext } from 'react';
import { NavBarBreakpoint } from 'Routes/Fam/NavBar/constants';
import FamBar from 'Routes/Fam/NavBar/FamBar';
import SideBar from 'Routes/Fam/NavBar/SideBar';
import styled from 'styled-components';
import { breakpoints } from 'utils/style';

type Props = {
  hideFamBar?: boolean;
};

const StyledCloseButton = styled(Button)({
  position: 'fixed',
  top: 12,
  right: 12,
  backgroundColor: '#FFFFFF',
  height: 16,
  width: 16,
  padding: 8,
  borderRadius: '100%',
  zIndex: 4,
  display: 'none',
  [breakpoints.md.css]: {
    display: 'block',
  },
});

const StyledNav = styled.div<{ open: boolean }>(({ open }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  backgroundColor: '#FFFFFF',
  overflow: 'hidden',
  [breakpoints.md.css]: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 3,
    transition: 'transform 0.15s ease-in-out',
    transform: open ? 'translateX(0)' : 'translateX(-100%)',
    boxShadow: open ? '0px 4px 24px #0000001F' : 'none',
    WebkitBoxShadow: open ? '0px 4px 24px #0000001F' : 'none',
  },
  [NavBarBreakpoint]: {
    width: '100%',
  },
}));

const Nav: React.FunctionComponent<Props> = ({ hideFamBar = false }: Props) => {
  const { closeNav, isNavOpen, isSmallNav } = useContext(NavBarContext);
  const { isModalVisible } = useContext(ModalContext);

  const navRef = React.useRef(null);

  // Click outside to close nav menu
  useClickOutside({
    ref: navRef,
    action: closeNav,
    disable: !isSmallNav || isModalVisible,
  });

  return (
    <StyledNav open={isNavOpen} ref={navRef}>
      <SideBar />
      {!hideFamBar && <FamBar />}
      <StyledCloseButton src={svg.x} onClick={closeNav} />
    </StyledNav>
  );
};

export default Nav;
