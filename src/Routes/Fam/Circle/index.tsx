import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import NavBar from 'Routes/Fam/NavBar';
import FamNonMember from 'Routes/Fam/NonMember';
import FamContentChat from 'Routes/Fam/Circle/Chat';
import useIsFamMember from 'hooks/useIsFamMember';

// Styled components
const StyledContainer = styled.div({
  display: 'flex',
  height: '100%',
});

type PathParamsType = {
  channelId: string;
  famAlphaName: string;
};

type Props = RouteComponentProps<PathParamsType>;

const FamCircle: React.FunctionComponent<Props> = ({
  match: {
    params: { channelId },
  },
}: Props) => {
  const { isFamMember } = useIsFamMember();

  return (
    <StyledContainer>
      <NavBar />
      {!isFamMember ? <FamNonMember /> : <FamContentChat channelId={channelId} />}
    </StyledContainer>
  );
};

export default FamCircle;
