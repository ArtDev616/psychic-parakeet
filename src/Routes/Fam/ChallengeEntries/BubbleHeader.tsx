import { gql, useQuery } from '@apollo/client';
import ImageOrVideo from 'components/media/ImageOrVideo';
import {
  FamGetChallengeDetailsQuery,
  FamGetChallengeDetailsQueryVariables,
  File,
} from 'generated/graphql';
import React from 'react';
import AcceptCompleteButton from 'Routes/Fam/ChallengeEntries/AcceptCompleteButton';
import { Fragments } from 'Routes/Fam/Challenges/GridListItem';
import BubbleRow from 'Routes/Fam/Challenges/GridListItem/BubbleRow';
import EndRow from 'Routes/Fam/Challenges/GridListItem/EndRow';
import styled from 'styled-components';
import { breakpoints, fontStyles } from 'utils/style';

const FamGetChallengeDetails = gql`
  query FamGetChallengeDetails($challengeId: uuid!) {
    challenge: challenge_by_pk(id: $challengeId) {
      ...challengeDetails
    }
  }
  ${Fragments.challengeDetails}
`;

const StyledHeaderBubble = styled.div({
  borderRadius: 24,
  margin: '28px 0',
  padding: '16px 20px',
  backgroundColor: '#FFFFFF',
  boxShadow: '4px 4px 24px #0000001F',
  WebkitBoxShadow: '4px 4px 24px #0000001F',
  [breakpoints.md.css]: {
    marginTop: 16,
  },
});

const StyledDetailsContainer = styled.div({
  display: 'flex',
  paddingTop: 12,
  [breakpoints.l.css]: {
    flexDirection: 'column',
  },
});

const StyledColumn = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  marginLeft: 20,
  [breakpoints.l.css]: {
    marginTop: 12,
    marginLeft: 0,
  },
});

const StyledMediaContainer = styled.div({
  borderRadius: 12,
  overflow: 'hidden',
  maxWidth: 400,
  maxHeight: 400,
  [breakpoints.l.css]: {
    maxWidth: '100%',
  },
});

const StyledMedia = styled(ImageOrVideo)({
  borderRadius: 12,
  width: '100%',
  objectFit: 'cover',
});

const StyledHeaderTitle = styled.h1({
  ...fontStyles.h1,
});

const StyledChallengeDescription = styled.p({
  ...fontStyles.cardsBody,
});

type Props = {
  challengeId: string;
}

const FamChallengeBubbleHeader: React.FunctionComponent<Props> = ({ challengeId }) => {
  const { data } = useQuery<
    FamGetChallengeDetailsQuery,
    FamGetChallengeDetailsQueryVariables>(
      FamGetChallengeDetails, {
        variables: {
          challengeId,
        },
      },
    );

  const challenge = data?.challenge;
  const challengeImage = challenge?.files?.length ? challenge.files[0]?.file : null;
  const winner = challenge?.winner?.length ? challenge.winner[0]?.user || null : null;

  if (!challenge) {
    return null;
  }

  return (
    <StyledHeaderBubble>
      <StyledHeaderTitle>{challenge?.title}</StyledHeaderTitle>
      <StyledDetailsContainer>
        {Boolean(challengeImage?.path) && (
          <StyledMediaContainer>
            <StyledMedia source={challengeImage as File} />
          </StyledMediaContainer>
        )}
        <StyledColumn>
          <StyledChallengeDescription>{challenge?.description}</StyledChallengeDescription>
          <EndRow endAt={challenge.endAt} winner={winner} />
        </StyledColumn>
        <StyledColumn>
          <BubbleRow
            prize={challenge?.prize || 'Vibes'}
            acceptedCount={challenge?.acceptedCount?.aggregate?.count?.toString() || '-'}
          />
          <AcceptCompleteButton challengeId={challengeId} />
        </StyledColumn>
      </StyledDetailsContainer>
    </StyledHeaderBubble>
  );
};

export default FamChallengeBubbleHeader;
