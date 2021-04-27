/* eslint-disable no-underscore-dangle */
import React, { useContext } from 'react';
import styled from 'styled-components';
import ListItem from 'Routes/Fam/NavBar/FamBar/Circles/ListItem';
import {
  FamBarGetChannelMembershipsQuery,
  FamBarGetChannelMembershipsQueryVariables,
  FamBarGetCircleListQuery,
  FamBarGetCircleListQueryVariables,
} from 'generated/graphql';
import { breakpoints } from 'utils/style';
import { gql, useQuery } from '@apollo/client';
import { UserContext } from 'contexts/user';
import { useParams } from 'react-router';
import dayjs from 'dayjs';

const Fragments = {
  circleListItem: gql`
    fragment NavCircleListItem on channel {
      id
      createdAt
      name
      members(where: {userId: {_eq: $userId}}) {
        id
        lastViewedAt
      }
      posts(
        limit: 1, 
        order_by: {createdAt: desc},
        where: { deletedAt: { _is_null: true }, type: { _neq: poll } }
      ) {
        id
        createdAt
        message
      }
      files {
        file {
          id
          path
        }
      }
    }
  `,
};

const GetCircleListQuery = gql`
  query FamBarGetCircleList($alphaName: String!, $userId: uuid, $limit: Int!, $offset: Int!) {
    group: group_(where: {alphaName: {_eq: $alphaName}}) {
      id
      imageUrl
      channels(
        where: {private: {_eq: false}}, 
        order_by: {default: desc, members_aggregate: {count: desc}},
        limit: $limit
        offset: $offset
      ) {
        ...NavCircleListItem
      }
    }
  }
  ${Fragments.circleListItem}
`;

const GetChannelMembershipsQuery = gql`
  query FamBarGetChannelMemberships($userId: uuid!, $alphaName: String!) {
    memberships: channel_member(
      where: {
        userId: {_eq: $userId}, 
        deletedAt: {_is_null: true}, 
        channel: { group_: { alphaName: { _eq: $alphaName } } }
      }
    ) {
      id
      channelId
    }
  }
`;

const StyledCirclesList = styled.ul({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  marginBottom: 24,
  [breakpoints.xs.css]: {
    marginBottom: 20,
  },
});

const CIRCLES_PER_PAGE = 100;

type Props = Record<string, never>;

const CircleList: React.FunctionComponent<Props> = () => {
  const { user } = useContext(UserContext);
  const params = useParams<{ famAlphaName: string }>();

  // TODO(Howard): Add Pagination
  const { data: groupData } = useQuery<FamBarGetCircleListQuery, FamBarGetCircleListQueryVariables>(
    GetCircleListQuery, {
      fetchPolicy: 'cache-and-network',
      variables: {
        alphaName: params.famAlphaName,
        userId: user?.id || '00000000-0000-0000-0000-000000000000',
        limit: CIRCLES_PER_PAGE,
        offset: 0,
      },
    },
  );

  const { data } = useQuery<FamBarGetChannelMembershipsQuery, FamBarGetChannelMembershipsQueryVariables>(
    GetChannelMembershipsQuery, {
      variables: {
        userId: user?.id || '',
        alphaName: params.famAlphaName,
      },
      skip: !user?.id,
    },
  );

  const group = groupData?.group?.length ? groupData.group[0] : null;
  const circles = group?.channels || [];
  const joinedChannelIds = data?.memberships.map(m => m.channelId);

  if (!group) {
    return null;
  }

  return (
    <StyledCirclesList>
      {circles.map(c => (
        <ListItem
          key={c.id}
          circle={c}
          isChannelMember={joinedChannelIds?.indexOf(c.id) !== -1}
          hasUnreadMessage={
            dayjs(c.members?.[0]?.lastViewedAt || new Date(0)).isBefore(c.posts?.[0]?.createdAt || new Date(0))
          }
          groupImage={group?.imageUrl || ''}
        />
      ))}
    </StyledCirclesList>
  );
};

export default CircleList;
