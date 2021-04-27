import React from 'react';
import styled, { CSSObject } from 'styled-components';
import { fontStyles } from 'utils/style';

type ButtonType = 'primary' | 'secondary' | 'tertiary' | 'danger'

const styles: { [key: string]: CSSObject } = {
  primary: {
    background:
      'linear-gradient(90deg, #2BD2FF 0%, #8395F7 102.2%), linear-gradient(90deg, #40D5A0 0%, #3BB6B5 102.2%);',
    color: '#FFFFFF',
  },
  secondary: {
    background: 'linear-gradient(90deg, #40D5A0 0%, #3BB6B5 102.2%)',
    color: '#FFFFFF',
  },
  tertiary: {
    backgroundColor: '#EEF6F6',
    color: '#111456',
  },
  danger: {
    backgroundColor: '#FFFFFF',
    color: '#FF6969',
  },
};

const StyledButton = styled.div<{ $disabled?: boolean; $type: ButtonType }>(props => ({
  ...fontStyles.button,
  ...styles[props.$type],
  cursor: props.$disabled ? 'not-allowed' : 'pointer',
  borderRadius: 40,
  padding: '6px 36px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

type Props = {
  className?: string;
  children: any;
  disabled?: boolean;
  onClick?(): void;
  style?: CSSObject;
  type: ButtonType;
};

const Button: React.FunctionComponent<Props> = ({
  className,
  children,
  disabled,
  onClick = () => null,
  style,
  type,
}: Props) => (
  <StyledButton
    $disabled={disabled}
    $type={type}
    style={style}
    onClick={disabled ? () => {} : onClick}
    className={className}
  >
    {children}
  </StyledButton>
);

export default Button;
