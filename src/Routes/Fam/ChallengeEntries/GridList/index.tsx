/* eslint-disable camelcase */
import { gql, useQuery, useSubscription } from '@apollo/client';
import {
  FamChallengeEntryFragment, FamGetChallengeEntriesQuery, FamGetChallengeEntriesQueryVariables,
} from 'generated/graphql';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GridListItem from 'Routes/Fam/ChallengeEntries/GridListItem';
import styled from 'styled-components';
import { breakpoints, hideScrollBar } from 'utils/style';
import unionBy from 'lodash/unionBy';
import EntryPreviewModal from 'Routes/Fam/ChallengeEntries/EntryPreviewModal';

const Fragments = {
  FamChallengeEntry: gql`
    fragment famChallengeEntry on challenge_entry {
      id
      createdAt
    }
  `,
};

const FamGetChallengeEntries = gql`
  query FamGetChallengeEntries($challengeId: uuid!, $before: timestamptz, $limit: Int!) {
    challengeEntries: challenge_entry(
      where: { 
        challengeId: { _eq: $challengeId }, completedAt: { _is_null: false },
        createdAt: { _lt: $before }
      },
      order_by: { createdAt: desc }
      limit: $limit
    ) {
      ...famChallengeEntry
    }
  }
  ${Fragments.FamChallengeEntry}
`;

const FamGetChallengeEntriesSubscription = gql`
  subscription FamGetChallengeEntriesSubscription($challengeId: uuid!) {
    challengeEntries: challenge_entry(
      where: { challengeId: { _eq: $challengeId }, completedAt: { _is_null: false }},
      order_by: { createdAt: desc }
      limit: 1
    ) {
      ...famChallengeEntry
    }
  }
  ${Fragments.FamChallengeEntry}
`;

const StyledGridList = styled(InfiniteScroll)({
  columnCount: 3,
  columnGap: 28,
  paddingBottom: 28,
  ...hideScrollBar,
  [breakpoints.xl.css]: {
    columnCount: 2,
  },
  [breakpoints.l.css]: {
    columnCount: 1,
  },
  [breakpoints.md.css]: {
    columnCount: 2,
  },
  [breakpoints.xs.css]: {
    columnCount: 1,
  },
});

const ENTRIES_PER_PAGE = 18;
export const SCROLLABLE_DIV_ID = 'challenge-entries-list-container';

type Props = {
  challengeId: string
}

const FamChallengeEntriesGridList: React.FunctionComponent<Props> = ({ challengeId }) => {
  const [previewEntryId, setPreviewEntryId] = React.useState<string | null>(null);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [entries, setEntries] = React.useState<FamChallengeEntryFragment[]>([]);
  const [initialFetchCompleted, setInitialFetchCompleted] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(false);

  const showPreviewModal = (challengeEntryId: string) => {
    setPreviewEntryId(challengeEntryId);
    setIsModalVisible(true);
  };

  const { refetch, fetchMore } = useQuery<FamGetChallengeEntriesQuery, FamGetChallengeEntriesQueryVariables>(
    FamGetChallengeEntries, {
      variables: {
        challengeId,
        limit: ENTRIES_PER_PAGE,
      },
      onCompleted: (fetchedData) => {
        setInitialFetchCompleted(true);
        const fetchedEntries = fetchedData?.challengeEntries || [];
        setEntries(fetchedEntries);
        setHasMore(fetchedEntries.length === ENTRIES_PER_PAGE);
      },
    },
  );

  useSubscription(FamGetChallengeEntriesSubscription, {
    variables: {
      challengeId,
    },
    skip: !initialFetchCompleted,
    onSubscriptionData: async () => {
      const res = await refetch({
        limit: ENTRIES_PER_PAGE,
        before: null,
      });

      if (res?.data?.challengeEntries?.length) {
        setEntries(res.data.challengeEntries);
      }
    },
  });

  const onScroll = React.useCallback(async () => {
    if (!entries?.length) return;
    const lastCursor = entries[entries.length - 1].createdAt;
    const res = await fetchMore({ variables: { before: lastCursor } });
    const moreEntries = res?.data?.challengeEntries || [];
    const newEntries = unionBy(entries, moreEntries, 'id');
    setEntries(newEntries);
    setHasMore(moreEntries.length === ENTRIES_PER_PAGE);
  }, [entries, fetchMore]);

  return (
    <StyledGridList
      dataLength={entries.length}
      next={onScroll}
      loader={null}
      scrollableTarget={SCROLLABLE_DIV_ID}
      hasMore={hasMore}
      scrollThreshold="250px"
    >
      {entries.map(entry => (
        <GridListItem key={entry.id} challengeEntryId={entry.id} showPreviewModal={showPreviewModal} />
      ))}
      {previewEntryId && (
        <EntryPreviewModal
          challengeEntryId={previewEntryId}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      )}
    </StyledGridList>
  );
};

export default FamChallengeEntriesGridList;
