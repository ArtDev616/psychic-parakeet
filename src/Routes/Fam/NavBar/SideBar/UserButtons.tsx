import svg from 'assets/svg';
import Button from 'components/buttons/ImageButton';
import ProfileImage from 'components/user/ProfileImage';
import { ModalContext, CustomModalTypes } from 'contexts/modal';
import { UserContext } from 'contexts/user';
import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { openMagicLink } from 'utils/helpers';
import { breakpoints } from 'utils/style';

const SideBarButtonSize = {
  xl: 32,
  md: 24,
  xs: 24,
};

const SideBarProfileButtonSize = {
  xl: 32,
  md: 28,
  xs: 24,
};

const StyledIconButtonContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [breakpoints.xs.css]: {
    marginTop: 12,
  },
});

const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
  margin: '8px 0',
  width: SideBarProfileButtonSize.xl,
  height: SideBarProfileButtonSize.xl,
  [breakpoints.xs.css]: {
    width: SideBarProfileButtonSize.md,
    height: SideBarProfileButtonSize.md,
  },
});

const StyledProfileImage = styled(ProfileImage)({
  margin: '8px 0 20px 0',
  width: SideBarProfileButtonSize.xl,
  height: SideBarProfileButtonSize.xl,
  [breakpoints.xs.css]: {
    width: SideBarProfileButtonSize.md,
    height: SideBarProfileButtonSize.md,
  },
});

const SettingsButtons: React.FunctionComponent<Record<string, never>> = () => {
  const { user } = useContext(UserContext);
  const { showModal } = useContext(ModalContext);
  const routeParams = useParams<{ famAlphaName: string; }>();

  const openDownloadAppModal = () => showModal({
    type: CustomModalTypes.DOWNLOAD_APP,
    buttonAction: () => {
      openMagicLink(routeParams?.famAlphaName);
    },
  });

  return (
    <StyledIconButtonContainer>
      {user && (
        <StyledNavLink to="/logout">
          <Button src={svg.logout} size={SideBarButtonSize.xl} />
        </StyledNavLink>
      )}
      <StyledProfileImage
        path={user?.photos?.length ? user.photos[0]?.id : svg.nonMemberProfile}
        sourceType={user?.photos?.length ? 'cloudinary' : 'other'}
        onClick={openDownloadAppModal}
      />
    </StyledIconButtonContainer>
  );
};

export default SettingsButtons;
