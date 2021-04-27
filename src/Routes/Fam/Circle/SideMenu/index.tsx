import svg from 'assets/svg';
import React from 'react';
import Content from 'Routes/Fam/Circle/SideMenu/Content';
import { STICKY_NAV_HEADER_HEIGHT, ChatSideMenuWidth } from 'Routes/Fam/constants';
import styled from 'styled-components';
import { breakpoints, fontStyles } from 'utils/style';

const StyledContainer = styled.div<{ $open: boolean }>(props => ({
  display: 'flex',
  width: props.$open ? ChatSideMenuWidth.xl : 0,
  transition: props.$open ? 'width 0.2s ease-in-out' : 'width 0.1s ease-in-out',
  backgroundColor: '#F2F6F6',
  overflow: 'hidden',
  borderLeft: '1px solid #E3E9E9',
  [breakpoints.l.css]: {
    width: props.$open ? ChatSideMenuWidth.l : 0,
  },
  [breakpoints.md.css]: {
    paddingTop: 4,
    flexDirection: 'column',
    position: 'fixed',
    zIndex: 2,
    top: STICKY_NAV_HEADER_HEIGHT - 2,
    width: '100%',
    height: props.$open ? '100%' : 0,
    transition: 'height 0.4s ease-in-out',
    borderLeft: 'none',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
}));

const StyledSideMenuButton = styled.button<{ $open: boolean }>(props => ({
  ...fontStyles.button,
  color: '#000000',
  position: 'absolute',
  top: 40,
  right: props.$open ? ChatSideMenuWidth.xl - 20 : 40,
  transition: 'right 0.2s ease-in-out',
  zIndex: 2,
  padding: 12,
  borderRadius: 44,
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  boxShadow: '0px 2px 4px #0000004F',
  WebkitBoxShadow: '0px 2px 4px #0000004F',
  [breakpoints.l.css]: {
    right: props.$open ? ChatSideMenuWidth.l - 20 : 40,
  },
  [breakpoints.md.css]: {
    display: 'none',
  },
}));

const StyledImage = styled.img({
  height: 20,
  width: 20,
});

const StyledButtonText = styled.span({
  marginLeft: 8,
});

type Props = {
  channelId: string;
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatSideMenu: React.FunctionComponent<Props> = ({ channelId, sideMenuOpen, setSideMenuOpen }: Props) => {
  const toggleSideMenu = () => setSideMenuOpen(prev => !prev);
  return (
    <StyledContainer $open={sideMenuOpen}>
      <StyledSideMenuButton $open={sideMenuOpen} onClick={toggleSideMenu}>
        <StyledImage src={sideMenuOpen ? svg.chevronRight : svg.chevronLeft} />
        {!sideMenuOpen && <StyledButtonText>Chat Info</StyledButtonText>}
      </StyledSideMenuButton>
      <Content channelId={channelId} />
    </StyledContainer>
  );
};

export default ChatSideMenu;
