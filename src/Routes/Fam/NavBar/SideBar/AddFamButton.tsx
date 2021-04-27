import assets from 'assets';
import React from 'react';
import styled from 'styled-components';

const StyledButtonContainer = styled.div({
  margin: '20px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledButtonImage = styled.img({
  cursor: 'pointer',
  width: 36,
  height: 36,
  borderRadius: '100%',
  transition: 'transform 0.15s',
  ':hover': {
    transform: 'scale(1.05)',
  },
});

type Props = {
  onClick: () => void;
}

const AddFamButton: React.FunctionComponent<Props> = ({ onClick }) => (
  <StyledButtonContainer>
    <StyledButtonImage onClick={onClick} src={assets.svg.addFamButton} alt="add_fam_button" />
  </StyledButtonContainer>
);

export default AddFamButton;
