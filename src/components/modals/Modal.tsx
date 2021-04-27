import React from 'react';
import ReactDOM from 'react-dom';
import styled, { CSSObject } from 'styled-components';
import Button from 'components/buttons/ImageButton';
import svg from 'assets/svg';
import useClickOutside from 'hooks/useClickOutside';

interface Props {
  isModalVisible: boolean;
  hide?: () => void;
  hideCloseButton?: boolean;
  children?: any;
  styleOverrides?: {
    body?: CSSObject;
    center?: CSSObject;
  }
}

const StyledModalOverlay = styled.div({
  position: 'fixed',
  zIndex: 9999,
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  overflow: 'hidden',
});

const StyledBody = styled.div({
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'hidden',
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  width: 680,
  minHeight: 532,
  maxWidth: '80%',
  maxHeight: '76%',
});

const StyledCloseButton = styled(Button)({
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 1,
  height: 16,
  width: 16,
  padding: 20,
});

const StyledContainerCenter = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  display: 'flex',
});

const Modal: React.FunctionComponent<Props> = ({
  isModalVisible, hide, children, styleOverrides, hideCloseButton,
}: Props) => {
  const modalRef = React.useRef(null);
  useClickOutside({
    ref: modalRef,
    action: hide,
    disable: !hide,
  });
  return (isModalVisible
    ? ReactDOM.createPortal(
      <StyledModalOverlay>
        <StyledBody style={styleOverrides?.body} ref={modalRef}>
          {!hideCloseButton && <StyledCloseButton src={svg.x} onClick={hide} />}
          <StyledContainerCenter style={styleOverrides?.center}>
            {children}
          </StyledContainerCenter>
        </StyledBody>
      </StyledModalOverlay>,
      document.body,
    )
    : null);
};

export default Modal;
