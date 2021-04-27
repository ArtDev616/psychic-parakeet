import svg from 'assets/svg';
import React from 'react';
import styled from 'styled-components';
import { fontStyles, textOverflowLineClamp } from 'utils/style';

const StyledRow = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const StyledBubble = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 12px',
  borderRadius: 8,
  backgroundColor: '#F3F3F7',
  overflow: 'auto',
});

const StyledBubbleFlex = styled(StyledBubble)({
  flex: 1,
  marginRight: 12,
});

const StyledBubbleIcon = styled.img({
  height: 16,
  width: 16,
  color: '#8F95B1',
});

const StyledBubbleTextContainer = styled.div({
  marginLeft: 8,
});

const StyledBubbleTitle = styled.p({
  ...fontStyles.small,
  fontWeight: 800,
  color: '#000000',
  ...textOverflowLineClamp,
});

const StyledBubblePlaceholder = styled.p({
  ...fontStyles.small,
});

type Props = {
  prize: string;
  acceptedCount: string;
};

const FamChallengesGridListItemBubbleRow: React.FunctionComponent<Props> = ({ prize, acceptedCount }) => (
  <StyledRow>
    <StyledBubbleFlex>
      <StyledBubbleIcon src={svg.trophy} alt="trophy" />
      <StyledBubbleTextContainer>
        <StyledBubbleTitle>{prize}</StyledBubbleTitle>
        <StyledBubblePlaceholder>Prize</StyledBubblePlaceholder>
      </StyledBubbleTextContainer>
    </StyledBubbleFlex>
    <StyledBubble>
      <StyledBubbleIcon src={svg.membersIcon} alt="members" />
      <StyledBubbleTextContainer>
        <StyledBubbleTitle>{acceptedCount}</StyledBubbleTitle>
        <StyledBubblePlaceholder>Participants</StyledBubblePlaceholder>
      </StyledBubbleTextContainer>
    </StyledBubble>
  </StyledRow>
);

export default FamChallengesGridListItemBubbleRow;
