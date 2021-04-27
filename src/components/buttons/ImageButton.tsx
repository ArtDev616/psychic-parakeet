import React from 'react';
import styled from 'styled-components';

const DefaultSize = 16;

const StyledButton = styled.img({
  cursor: 'pointer',
});

type Props = {
  className?: string;
  onClick?(): void;
  size?: number;
  src?: string;
};

const ImageButton: React.FunctionComponent<Props> = ({
  className,
  onClick = () => null,
  size = DefaultSize,
  src = '',
}: Props) => (
  <StyledButton alt="icon_button" src={src} onClick={onClick} height={size} width={size} className={className} />
);

export default ImageButton;
