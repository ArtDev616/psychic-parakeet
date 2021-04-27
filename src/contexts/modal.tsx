import React, { useContext } from 'react';
import styled from 'styled-components';
import svg from 'assets/svg';
import Modal from 'components/modals/Modal';
import GradientButton from 'components/buttons/GradientButton';
import { breakpoints, fontStyles } from 'utils/style';
import ModalCompleteProfile from 'components/modals/ModalCompleteProfile';
import Button from 'components/buttons/Button';
import { UserContext } from 'contexts/user';
import FamOwnerProfileImage from 'components/user/FamOwnerProfileImage';
import { logEvent } from 'clients/amplitude';

export enum CustomModalTypes {
  CUSTOM = 0,
  DOWNLOAD_APP = 1,
  COMPLETE_PROFILE = 2,
  LOGIN = 3,
}

export type ModalPropsType = {
  type: CustomModalTypes;
  hideCloseButton?: boolean;
  buttonAction?: () => void;
  customContent?: any;
};

const StyledContainer = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
});

const StyledTitle = styled.h1({
  ...fontStyles.h1,
  margin: '36px 0 24px 0',
  maxWidth: '80%',
  [breakpoints.md.css]: {
    fontSize: 20,
    lineHeight: '24px',
  },
  [breakpoints.xs.css]: {
    fontSize: 16,
    lineHeight: '20px',
  },
});

const StyledDescription = styled.p({
  ...fontStyles.body,
  fontSize: 16,
  lineHeight: '20px',
  maxWidth: '70%',
  textAlign: 'center',
  [breakpoints.md.css]: {
    lineHeight: '16px',
    fontSize: 12,
  },
});

const StyledImage = styled.img({
  width: '40%',
  maxWidth: 180,
});

const StyledGradientButton = styled(GradientButton)({
  fontSize: 16,
  padding: '12px 36px',
  margin: '24px 0',
  [breakpoints.md.css]: {
    fontSize: 12,
    padding: '12px 32px',
    marginBottom: 16,
  },
  [breakpoints.xs.css]: {
    fontSize: 12,
    padding: '12px 24px',
    marginBottom: 16,
  },
});

const StyledButton = styled(Button)({
  fontSize: 16,
  padding: '12px 96px',
  marginTop: 24,
  [breakpoints.md.css]: {
    fontSize: 12,
    padding: '12px 48px',
  },
  [breakpoints.xs.css]: {
    fontSize: 12,
    padding: '12px 48px',
  },
});

const StyledProfileImage = styled(FamOwnerProfileImage)({
  width: 180,
  height: 180,
  borderRadius: '100%',
  cursor: 'default',
  border: '6px solid #F2F5F5',
});

const DownloadAppModal = (buttonAction: ModalPropsType['buttonAction']) => {
  const onDownloadClick = () => {
    logEvent('Fam Modal', 'Download mobile app click', undefined, () => {
      if (buttonAction) {
        buttonAction();
      }
    });
  };
  return (
    <StyledContainer>
      <StyledImage src={svg.downloadApp} />
      <StyledTitle>Download the Vibely app to continue</StyledTitle>
      <StyledDescription>To get the full Vibely experience, download our mobile app!</StyledDescription>
      <StyledGradientButton text="Download Now" colors={['#3BB6B5', '#40D5A0']} onClick={onDownloadClick} />
    </StyledContainer>
  );
};

const LoginModal = () => {
  const { login, signup } = useContext(UserContext);
  const onLoginClick = () => {
    logEvent('Fam Modal', 'Login click', undefined, () => {
      login();
    });
  };
  const onSignupClick = () => {
    logEvent('Fam Modal', 'Signup click', undefined, () => {
      signup();
    });
  };

  // Modals are rendered outside of router. Hacky way to get the fam name:
  const famAlphaName = window.location.href.split('/')[3];
  return (
    <StyledContainer>
      <StyledProfileImage famAlphaName={famAlphaName} size={180} />
      <StyledTitle>So happy you're here</StyledTitle>
      <StyledDescription>Get started in 10 seconds!</StyledDescription>
      <StyledButton className="ga-signup" type="secondary" onClick={onSignupClick}>Sign up</StyledButton>
      <StyledButton className="ga-login" type="tertiary" onClick={onLoginClick}>Log in &raquo;</StyledButton>
    </StyledContainer>
  );
};

const getModalContent = (props: ModalPropsType) => {
  switch (props.type) {
  case CustomModalTypes.CUSTOM:
    return props.customContent;
  case CustomModalTypes.DOWNLOAD_APP:
    return DownloadAppModal(props.buttonAction);
  case CustomModalTypes.COMPLETE_PROFILE:
    return <ModalCompleteProfile />;
  case CustomModalTypes.LOGIN:
    return <LoginModal />;
  default:
    return null;
  }
};

export const ModalContext = React.createContext<{
  showModal:(props: ModalPropsType) => void;
  hideModal: () => void;
  isModalVisible: boolean;
    }>({
      showModal: () => {},
      hideModal: () => {},
      isModalVisible: false,
    });

const ModalProvider: React.FunctionComponent = ({ children }) => {
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);
  const [modalProps, setModalProps] = React.useState<ModalPropsType>({
    type: CustomModalTypes.CUSTOM,
    buttonAction: undefined,
    customContent: null,
    hideCloseButton: false,
  });

  const showModal = (props: ModalPropsType) => {
    setModalProps(props);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const modalContent = getModalContent(modalProps);

  return (
    <ModalContext.Provider
      value={{
        showModal,
        hideModal,
        isModalVisible,
      }}
    >
      {children}
      <Modal isModalVisible={isModalVisible} hide={hideModal} hideCloseButton={modalProps.hideCloseButton}>
        {modalContent}
      </Modal>
    </ModalContext.Provider>
  );
};

export default ModalProvider;
