import React, { ChangeEventHandler } from 'react';
import styled, { CSSObject } from 'styled-components';
import { fontStyles } from 'utils/style';

const StyledInput = styled.input({
  ...fontStyles.body,
  background: '#FAFAFA',
  border: '1px solid #F0F0F0',
  boxSizing: 'border-box',
  padding: '8px 12px',
  borderRadius: 6,
  marginTop: 6,
  marginBottom: 18,
});

const StyledLabel = styled.label({
  ...fontStyles.small,
  fontWeight: 800,
  color: '#333333',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  textAlign: 'left',
});

type Props = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (newValue: string) => void;
  styleOverrides?: {[key: string]: CSSObject}
}

const Input : React.FunctionComponent<Props> = ({
  label, placeholder, onChange, styleOverrides, value,
}) => {
  const [inputValue, setInputValue] = React.useState('');
  const isControlledInput = typeof value !== 'undefined';

  const onValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <StyledLabel style={styleOverrides?.label}>
      {label && (
        <span>
          {label}
        </span>
      )}
      <StyledInput
        style={styleOverrides?.input}
        placeholder={placeholder}
        onChange={onValueChange}
        value={isControlledInput ? value : inputValue}
      />
    </StyledLabel>
  );
};

export default Input;
