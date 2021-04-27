import { gql, useQuery } from '@apollo/client';
import svg from 'assets/svg';
import ImageButton from 'components/buttons/ImageButton';
import { NavBarContext } from 'contexts/navbar';
import { ChatGetHeaderDataQuery, ChatGetHeaderDataQueryVariables } from 'generated/graphql';
import React, { useContext } from 'react';
import { HAMBURGER_MENU_ICON_SIZE } from 'Routes/Fam/constants';
import styled from 'styled-components';
import { breakpoints, fontStyles, textOverflowEllipses } from 'utils/style';

const ChatGetHeaderData = gql`
  query ChatGetHeaderData($channelId: uuid!) {
    channel: channel_by_pk(id: $channelId) {
      id
      name
    }
  }
`;

// Styled components
const StyledContainer = styled.div({
  display: 'none',
  [breakpoints.md.css]: {
    backgroundColor: '#f2f6f6',
    position: 'fixed',
    zIndex: 1,
    top: 0,
    left: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const StyledTitleRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
});

const StyledHamburger = styled(ImageButton)({
  height: 20,
  width: 20,
  padding: '20px 24px',
});

const StyledTitle = styled.p({
  ...fontStyles.h1,
  ...textOverflowEllipses,
  [breakpoints.md.css]: {
    ...fontStyles.h4,
  },
});

const StyledMenuButton = styled(ImageButton)({
  transform: 'rotate(90deg)',
  padding: '20px 24px',
});

type Props = {
  channelId: string;
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FamContentChatHeader: React.FunctionComponent<Props> = ({ channelId, sideMenuOpen, setSideMenuOpen }) => {
  const { openNav } = useContext(NavBarContext);
  const toggleTopMenu = () => setSideMenuOpen(prev => !prev);
  const { data } = useQuery<ChatGetHeaderDataQuery, ChatGetHeaderDataQueryVariables>(ChatGetHeaderData, {
    variables: {
      channelId,
    },
    skip: !channelId,
  });

  const channel = data?.channel;

  return (
    <StyledContainer>
      <StyledTitleRow>
        <StyledHamburger size={HAMBURGER_MENU_ICON_SIZE} src={svg.hamburger} onClick={openNav} />
        <StyledTitle>{channel?.name || 'Circle'}</StyledTitle>
      </StyledTitleRow>
      <StyledMenuButton src={sideMenuOpen ? svg.chevronLeft : svg.chevronRight} size={20} onClick={toggleTopMenu} />
    </StyledContainer>
  );
};

export default FamContentChatHeader;
