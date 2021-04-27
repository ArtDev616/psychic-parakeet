import React from 'react';
import styled from 'styled-components';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import svg from 'assets/svg';
import { fontStyles } from 'utils/style';

// Styled components
const StyledHeader = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: 36,
});

const StyledTitle = styled.h1({
  ...fontStyles.h1,
});

const StyledMenu = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 24,
});

const StyledMenuItem = styled.div({
  display: 'flex',
  textAlign: 'center',
  color: '#0C0C0C',
  flexDirection: 'column',
});

const StyledMenuItemIndicator = styled.div<{ active: boolean }>(props => ({
  background: props.active ? 'linear-gradient(90deg, #40D5A0 0%, #3BB6B5 102.2%)' : 'transparent',
  borderRadius: '32px 32px 0px 0px',
  height: 4,
}));

const StyledMenuItemTitle = styled.div({
  ...fontStyles.h6,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '12px 32px',
});

const StyledLink = styled(Link)({
  color: '#0C0C0C',
  textDecoration: 'none',
  ':active': {
    color: '#0C0C0C',
  },
});

const StyledIcon = styled.img({
  width: 16,
  height: 16,
  marginRight: 8,
});

type Props = RouteComponentProps<{
  famAlphaName: string;
}>;

const FamSettingsHeader: React.FunctionComponent<Props> = ({ match }) => (
  <>
    <StyledHeader>
      <StyledTitle>
        <StyledLink to={`/${match.params.famAlphaName}`}>&larr; </StyledLink>
        Settings
      </StyledTitle>
    </StyledHeader>
    <StyledMenu>
      <StyledMenuItem>
        <StyledLink replace to={{ pathname: `${match.url}/challenges` }}>
          <StyledMenuItemTitle>
            <StyledIcon src={svg.challenge} />
            <span>Challenges</span>
          </StyledMenuItemTitle>
          <StyledMenuItemIndicator active={window.location.href.endsWith('/challenges')} />
        </StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledLink replace to={{ pathname: `${match.url}/circles` }}>
          <StyledMenuItemTitle>
            <StyledIcon src={svg.comment} />
            <span>Circles</span>
          </StyledMenuItemTitle>
          <StyledMenuItemIndicator active={window.location.href.endsWith('/circles')} />
        </StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledLink replace to={{ pathname: `${match.url}/members` }}>
          <StyledMenuItemTitle>
            <StyledIcon src={svg.membersIcon} />
            <span>Members</span>
          </StyledMenuItemTitle>
          <StyledMenuItemIndicator active={window.location.href.endsWith('/members')} />
        </StyledLink>
      </StyledMenuItem>
      <StyledMenuItem>
        <StyledLink replace to={{ pathname: `${match.url}/announcements` }}>
          <StyledMenuItemTitle>
            <StyledIcon src={svg.announcement} />
            <span>Announcements</span>
          </StyledMenuItemTitle>
          <StyledMenuItemIndicator active={window.location.href.endsWith('/announcements')} />
        </StyledLink>
      </StyledMenuItem>
    </StyledMenu>
  </>
);

export default withRouter(FamSettingsHeader);
