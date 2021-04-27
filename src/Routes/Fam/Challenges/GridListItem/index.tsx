import { gql, useQuery } from '@apollo/client';
import ImageOrVideo from 'components/media/ImageOrVideo';
import { CustomModalTypes, ModalContext } from 'contexts/modal';
import { UserContext } from 'contexts/user';
import {
  File,
  FamGetChallengeQuery,
  FamGetChallengeQueryVariables,
} from 'generated/graphql';
import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import BubbleRow from 'Routes/Fam/Challenges/GridListItem/BubbleRow';
import EndRow from 'Routes/Fam/Challenges/GridListItem/EndRow';
import styled from 'styled-components';
import { fontStyles, textOverflowLineClamp } from 'utils/style';

const WinnerFragment = gql`
  fragment winnerUser on user_ {
    id
    firstName
    lastName
    photos
  }
`;

export const Fragments = {
  challengeDetails: gql`
    fragment challengeDetails on challenge {
      id
      title
      description
      prize
      endAt
      files {
        file {
          id
          mimeType
          path
          width
          height
        }
      }
      winner: entries(
        where: { completedAt: { _is_null: false } }
        order_by: { reactions_aggregate: { count: desc } }
        limit: 1
      ) {
        id
        user: user_ {
          ...winnerUser
        }
      }
      acceptedCount: entries_aggregate {
        aggregate {
          count
        }
      }
    }
    ${WinnerFragment}
  `,
};

const FamGetChallenge = gql`
  query FamGetChallenge($challengeId: uuid!) {
    challenge: challenge_by_pk(id: $challengeId) {
      ...challengeDetails
    }
  }
  ${Fragments.challengeDetails}
`;

// Styled components
const StyledGridContainer = styled.div({
  cursor: 'pointer',
  backgroundColor: '#FFFFFF',
  borderRadius: 24,
  transition: '0.2s',
  ':hover': {
    boxShadow: '4px 4px 24px #0000001F',
    WebkitBoxShadow: '4px 4px 24px #0000001F',
  },
});

const StyledMediaContainer = styled.div({
  borderTopRightRadius: 24,
  borderTopLeftRadius: 24,
  height: 200,
  overflow: 'hidden',
});

const StyledMedia = styled(ImageOrVideo)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const StyledDetailsContainer = styled.div({
  padding: 20,
});

const StyledTitle = styled.h4({
  ...fontStyles.h4,
  ...textOverflowLineClamp,
  WebkitLineClamp: 2,
});

const StyledDescription = styled.p({
  ...fontStyles.cardsBody,
  margin: '12px 0',
  ...textOverflowLineClamp,
  WebkitLineClamp: 3,
});

type Props = {
  challengeId: string;
};

const FamChallengesGridListItem: React.FunctionComponent<Props> = ({ challengeId }) => {
  const { famAlphaName } = useParams<{ famAlphaName: string }>();
  const history = useHistory();
  const { user } = React.useContext(UserContext);
  const { showModal } = React.useContext(ModalContext);
  const openLoginModal = () => showModal({
    type: CustomModalTypes.LOGIN,
    buttonAction: () => {},
  });

  const navigateChallenge = () => (!user
    ? openLoginModal() : history.push(`/${famAlphaName}/challenge/${challengeId}`));

  const { data: challengeData } = useQuery<
    FamGetChallengeQuery,
    FamGetChallengeQueryVariables>(FamGetChallenge, {
      variables: {
        challengeId,
      },
    });

  const challenge = challengeData?.challenge;
  const challengeImage = challenge?.files?.length ? challenge.files[0]?.file : null;
  const winner = challenge?.winner?.length ? challenge.winner[0]?.user || null : null;

  if (!challenge) {
    return null;
  }

  return (
    <StyledGridContainer onClick={navigateChallenge}>
      {Boolean(challengeImage?.path) && (
        <StyledMediaContainer>
          <StyledMedia source={challengeImage as File} />
        </StyledMediaContainer>
      )}
      <StyledDetailsContainer>
        <StyledTitle>{challenge?.title}</StyledTitle>
        <StyledDescription>{challenge?.description}</StyledDescription>
        <BubbleRow
          prize={challenge?.prize || 'Vibes'}
          acceptedCount={challenge?.acceptedCount?.aggregate?.count?.toString() || '-'}
        />
        <EndRow winner={winner} endAt={challenge?.endAt} />
      </StyledDetailsContainer>
    </StyledGridContainer>
  );
};

export default FamChallengesGridListItem;
