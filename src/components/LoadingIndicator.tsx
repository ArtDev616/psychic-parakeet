import assets from 'assets';
import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  size?: number;
};

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const StyledIcon = styled.img<{size: number}>`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`;

const LoadingIndicator: React.FunctionComponent<Props> = ({ size = 16 }) => (
  <StyledIcon src={assets.svg.loader} size={size} />
);

export default LoadingIndicator;
