import { gql, useMutation, useQuery } from '@apollo/client';
import React from 'react';
import styled from 'styled-components';
import { fontStyles } from 'utils/style';
import svg from 'assets/svg';
import { ModalContext, CustomModalTypes } from 'contexts/modal';
import { ReactComponent as ClappingIcon } from 'assets/svg/clapping.svg';
import { UserContext } from 'contexts/user';
import {
  ChallengeEntryGetStatsQuery,
  ChallengeEntryGetStatsQueryVariables,
  ChallengeEntryCreateReactionMutation,
  ChallengeEntryCreateReactionMutationVariables,
  ChallengeEntryDeleteReactionMutation,
  ChallengeEntryDeleteReactionMutationVariables,
} from 'generated/graphql';
import ImageButton from 'components/buttons/ImageButton';

const ChallengeEntryGetStats = gql`
  query ChallengeEntryGetStats($challengeEntryId: uuid!, $userId: uuid!) {
    entry: challenge_entry_by_pk(id: $challengeEntryId) {
      id
      commentCount: comments_aggregate {
        aggregate {
          count
        }
      }
      reactionCount: reactions_aggregate {
        aggregate {
          count
        }
      }
      myReactions: reactions(
        where: { 
          reaction: { userId: {_eq: $userId }}
        }, 
        limit: 1
      ) {
        reactionId
      }
    }
  }
`;

const ChallengeEntryCreateReaction = gql`
  mutation ChallengeEntryCreateReaction($userId: uuid!, $challengeEntryId: uuid!) {
    reaction: insert_challenge_entry_reaction_one(
      object: { challengeEntryId: $challengeEntryId, reaction: { data: { userId: $userId, type: heart } } }
    ) {
      reactionId
    }  
  }
`;

const ChallengeEntryDeleteReaction = gql`
  mutation ChallengeEntryDeleteReaction($reactionId: uuid!, $challengeEntryId: uuid!) {
    reaction: delete_challenge_entry_reaction_by_pk(
      challengeEntryId: $challengeEntryId,
      reactionId: $reactionId
    ) {
      reactionId  
    }  
  }
`;

const StyledLabel = styled.p({
  ...fontStyles.small,
  fontWeight: 800,
  color: '#000000',
});

const StyledCommentLabel = styled(StyledLabel)({
  padding: '12px 16px',
});

const StyledButtonsRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 0',
  margin: '0 16px',
  borderTop: '1px solid #F0F0F0',
});

const StyledRow = styled.div({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

const StyledOffsetIcon = styled(ImageButton)({
  marginRight: 8,
});

const StyledReactIcon = styled(ClappingIcon)<{$highlighted: boolean}>(props => ({
  color: props.$highlighted ? '#3BB6B5' : '#000000',
  marginRight: 8,
  height: 20,
  width: 20,
}));

type Props = {
  challengeEntryId: string;
  showPreview?: () => void;
};

const FamChallengeEntriesGridListItemFooter: React.FunctionComponent<Props> = ({
  challengeEntryId,
  showPreview = () => {},
}) => {
  const { user } = React.useContext(UserContext);
  const [reacting, setReacting] = React.useState(false);
  const [reactToEntry] = useMutation<ChallengeEntryCreateReactionMutation,
    ChallengeEntryCreateReactionMutationVariables>(ChallengeEntryCreateReaction);
  const [deleteReaction] = useMutation<ChallengeEntryDeleteReactionMutation,
    ChallengeEntryDeleteReactionMutationVariables>(ChallengeEntryDeleteReaction);
  const { showModal } = React.useContext(ModalContext);
  const openLoginModal = () => showModal({
    type: CustomModalTypes.LOGIN,
    buttonAction: () => {},
  });

  const { data, refetch } = useQuery<
    ChallengeEntryGetStatsQuery,
    ChallengeEntryGetStatsQueryVariables>(ChallengeEntryGetStats, {
      variables: {
        challengeEntryId,
        userId: user?.id || '',
      },
    });

  const entryReactions = data?.entry;
  const myReactionId = entryReactions?.myReactions?.length ? entryReactions?.myReactions[0]?.reactionId || null : null;
  const onReact = !user ? openLoginModal : async () => {
    // Prevent double click
    if (reacting) return;
    setReacting(true);
    if (myReactionId) {
      await deleteReaction({ variables: { challengeEntryId, reactionId: myReactionId } });
    } else {
      await reactToEntry({ variables: { challengeEntryId, userId: user.id } });
    }
    await refetch();
    setReacting(false);
  };

  return (
    <div>
      <StyledCommentLabel onClick={showPreview}>
        {entryReactions?.commentCount?.aggregate?.count?.toString() || '-'}
        {' '}
        {entryReactions?.commentCount?.aggregate?.count?.toString() === '1' ? 'comment' : 'comments'}
      </StyledCommentLabel>
      <StyledButtonsRow>
        <StyledRow onClick={onReact}>
          <StyledReactIcon $highlighted={reacting ? !myReactionId : myReactionId} />
          <StyledLabel>
            {entryReactions?.reactionCount?.aggregate?.count?.toString() || '-'}
            {' '}
            {entryReactions?.reactionCount?.aggregate?.count?.toString() === '1' ? 'person' : 'people'}
            {' '}
            clapped
          </StyledLabel>
        </StyledRow>
        <StyledRow>
          <StyledOffsetIcon src={svg.comment} size={20} onClick={showPreview} />
        </StyledRow>
      </StyledButtonsRow>
    </div>
  );
};

export default FamChallengeEntriesGridListItemFooter;
