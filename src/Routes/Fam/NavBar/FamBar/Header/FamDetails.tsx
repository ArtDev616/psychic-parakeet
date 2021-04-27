import React from 'react';
import styled from 'styled-components';
import { breakpoints, fontStyles, textOverflowEllipses } from 'utils/style';
import FamJoinButton from 'Routes/Fam/NavBar/FamBar/Header/JoinButton';

const StyledFamDetailsRow = styled.div({
  padding: 24,
  textAlign: 'left',
  [breakpoints.xs.css]: {
    padding: '20px 24px',
  },
});

const StyledFamDescription = styled.p({
  ...fontStyles.body,
  margin: '12px 0',
});

const StyledTitle = styled.h3({
  ...fontStyles.h3,
  ...textOverflowEllipses,
});

type Props = {
  groupId: string;
  groupName: string;
  groupDescription: string | null | undefined;
}

const FamDetails: React.FunctionComponent<Props> = ({ groupId, groupName, groupDescription }) => {
  return (
    <StyledFamDetailsRow>
      <StyledTitle>{groupName}</StyledTitle>
      <StyledFamDescription>{groupDescription}</StyledFamDescription>
      <FamJoinButton groupId={groupId} />
    </StyledFamDetailsRow>
  );
};

export default FamDetails;
