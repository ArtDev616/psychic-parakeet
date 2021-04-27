import { gql, useQuery } from '@apollo/client';
import {
  FamChallengeFragment, FamGetChallengesQuery, FamGetChallengesQueryVariables,
} from 'generated/graphql';
import unionBy from 'lodash/unionBy';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router';
import ChallengesGridListItem from 'Routes/Fam/Challenges/GridListItem';
import styled from 'styled-components';
import { breakpoints, hideScrollBar } from 'utils/style';

const Fragments = {
  FamChallenge: gql`
    fragment famChallenge on challenge {
      id
      createdAt
    }
  `,
};

const FamGetChallenges = gql`
  query FamGetChallenges($alphaName: String!, $before: timestamptz, $limit: Int!) {
    challenges: challenge(
      where: { 
        challengeGroup: { group_: { alphaName: { _eq: $alphaName } } },
        createdAt: { _lt: $before }
      },
      order_by: { createdAt: desc }
      limit: $limit
    ) {
      ...famChallenge
    }
  }
  ${Fragments.FamChallenge}
`;

const ChallengeGridListMinColumnWidth = {
  xl: 300,
  md: 260,
  xs: 220,
};

const StyledGridList = styled(InfiniteScroll)({
  display: 'grid',
  padding: '28px 0',
  gridTemplateColumns: `repeat(auto-fill, minmax(${ChallengeGridListMinColumnWidth.xl}px, 1fr))`,
  gridGap: 28,
  ...hideScrollBar,
  [breakpoints.md.css]: {
    paddingTop: 0,
    gridTemplateColumns: `repeat(auto-fill, minmax(${ChallengeGridListMinColumnWidth.md}px, 1fr))`,
  },
  [breakpoints.xs.css]: {
    gridTemplateColumns: `repeat(auto-fill, minmax(${ChallengeGridListMinColumnWidth.xs}px, 1fr))`,
  },
});

const CHALLENGES_PER_PAGE = 18;
export const SCROLLABLE_DIV_ID = 'challenge-list-container';

type PathParamsType = { famAlphaName: string };

const FamChallengesGridList: React.FunctionComponent<Record<string, never>> = () => {
  const { famAlphaName } = useParams<PathParamsType>();
  const [challenges, setChallenges] = React.useState<FamChallengeFragment[]>([]);
  const [hasMore, setHasMore] = React.useState(false);
  const { fetchMore } = useQuery<
    FamGetChallengesQuery,
    FamGetChallengesQueryVariables>(FamGetChallenges, {
      variables: {
        alphaName: famAlphaName,
        limit: CHALLENGES_PER_PAGE,
      },
      onCompleted: (fetchedData) => {
        const fetchedChallenges = fetchedData?.challenges || [];
        setChallenges(fetchedChallenges);
        setHasMore(fetchedChallenges.length === CHALLENGES_PER_PAGE);
      },
    });

  const onScroll = React.useCallback(async () => {
    if (!challenges?.length) return;
    const lastCursor = challenges[challenges.length - 1].createdAt;
    const res = await fetchMore({ variables: { before: lastCursor } });
    const moreChallenges = res?.data?.challenges || [];
    const newChallenges = unionBy(challenges, moreChallenges, 'id');
    setChallenges(newChallenges);
    setHasMore(moreChallenges.length === CHALLENGES_PER_PAGE);
  }, [challenges, fetchMore]);

  return (
    <StyledGridList
      dataLength={challenges.length}
      next={onScroll}
      loader={null}
      scrollableTarget={SCROLLABLE_DIV_ID}
      hasMore={hasMore}
      scrollThreshold="250px"
    >
      {challenges.map(challenge => (
        <ChallengesGridListItem key={challenge.id} challengeId={challenge.id} />
      ))}
    </StyledGridList>
  );
};

export default FamChallengesGridList;
