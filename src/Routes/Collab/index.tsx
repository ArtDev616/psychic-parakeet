import React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';

type Props = RouteComponentProps<{ famAlphaName: string }>;

const StyledTest = styled.div({
  backgroundColor: 'yellow',
});

const Collab: React.FunctionComponent<Props> = () => {
  return (
    <StyledTest>
      test
    </StyledTest>
  );
};

export default Collab;
