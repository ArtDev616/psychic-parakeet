import svg from 'assets/svg';
import Button from 'components/buttons/ImageButton';
import ProfileImage from 'components/user/ProfileImage';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { breakpoints, fontStyles } from 'utils/style';
import { copyToClipboard, getMagicLinkForFam, openMagicLink } from 'utils/helpers';
import { ModalContext, CustomModalTypes } from 'contexts/modal';
import { useParams } from 'react-router';
import { logEvent } from 'clients/amplitude';

const FamLeaderProfileImageSize = {
  xl: 72,
  md: 72,
  xs: 60,
};

const StyledIntroRow = styled.div({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  marginTop: -0.6 * FamLeaderProfileImageSize.xl,
  padding: '0 24px 0 20px',
  [breakpoints.xs.css]: {
    marginTop: -0.6 * FamLeaderProfileImageSize.xs,
    padding: '0 20px 0 16px',
  },
});

const StyledProfileImage = styled(ProfileImage)({
  width: FamLeaderProfileImageSize.xl,
  height: FamLeaderProfileImageSize.xl,
  zIndex: 1,
  borderWidth: 4,
  [breakpoints.xs.css]: {
    borderWidth: 2,
    width: FamLeaderProfileImageSize.xs,
    height: FamLeaderProfileImageSize.xs,
  },
});

const StyledRowTextAndButtons = styled.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  minWidth: 0,
  marginTop: 32,
  marginLeft: 4,
  height: FamLeaderProfileImageSize.xl * 0.5,
  [breakpoints.xs.css]: {
    height: FamLeaderProfileImageSize.xs * 0.5,
    marginTop: 42,
  },
});

const StyledRowLeaderRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  minWidth: 0,
});

const StyledTitle = styled.h6({
  ...fontStyles.h6,
  color: '#111456',
  margin: '0 4px',
  flex: 1,
});

const StyledButtonContainer = styled.div({
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: 16,
});

const StyledRowLeaderBadge = styled.img({
  width: 14,
  height: 14,
});

type PropsType = {
  leaderName: string;
  leaderImage: string;
};

const IntroRow: React.FunctionComponent<PropsType> = ({ leaderName, leaderImage }) => {
  const { showModal } = useContext(ModalContext);
  const { famAlphaName } = useParams<{ famAlphaName: string; }>() || {};

  const openDownloadAppModal = () => showModal({
    type: CustomModalTypes.DOWNLOAD_APP,
    buttonAction: () => {
      openMagicLink(famAlphaName);
    },
  });

  const onShareClick = () => {
    logEvent('Fam Bar', 'Share clicked', { famAlphaName });
    const result = copyToClipboard(getMagicLinkForFam(famAlphaName));
    // eslint-disable-next-line no-alert
    alert(
      result
        ? 'Link is copied to your clipboard, share it with your friends!'
        : 'Please copy the URL from your browser and share it with your friends!',
    );
  };

  return (
    <StyledIntroRow>
      <StyledProfileImage path={leaderImage} onClick={openDownloadAppModal} size={FamLeaderProfileImageSize.xl} />
      <StyledRowTextAndButtons>
        <StyledRowLeaderRow>
          <StyledTitle>{leaderName}</StyledTitle>
          {/* TODO(howard): check if we should show the badge */}
          <StyledRowLeaderBadge alt="leader_badge" src={svg.leaderbadge} />
        </StyledRowLeaderRow>
        <StyledButtonContainer>
          <Button src={svg.shareIcon} onClick={onShareClick} />
        </StyledButtonContainer>
      </StyledRowTextAndButtons>
    </StyledIntroRow>
  );
};

export default IntroRow;
