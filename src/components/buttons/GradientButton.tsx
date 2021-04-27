import React from 'react';
import styled from 'styled-components';
import { fontStyles } from 'utils/style';

type Props = {
  text: string;
  colors?: string[];
  className?: string;
  onClick?(): void;
  disabled?: boolean;
};

const defaultColors = ['#8395F7', '#2BD2FF'];

const StyledGradientButton = styled.button<{ disabled: boolean; colors: string[] }>(({ disabled, colors }) => ({
  ...fontStyles.button,
  textAlign: 'center',
  padding: 8,
  color: disabled ? '#8F95B1' : '#FFFFFF',
  borderRadius: 40,
  border: disabled ? '1px solid #EEF6F6' : 'none',
  backgroundColor: disabled ? '#EEF6F6' : 'none',
  backgroundImage: disabled ? 'none' : `linear-gradient(to left, ${colors.join(', ')})`,
  transition: 'transform 0.2s',
  ...(!disabled && {
    '&:hover': {
      transform: 'scale(1.1)',
    },
  }),
}));

const GradientButton: React.FunctionComponent<Props> = ({
  className,
  disabled = false,
  onClick = () => null,
  text = '',
  colors = defaultColors,
}: Props) => (
  <StyledGradientButton className={className} onClick={onClick} disabled={disabled} colors={colors}>
    {text}
  </StyledGradientButton>
);

export default GradientButton;
