import { useQuery, gql, useSubscription } from '@apollo/client';
import React, { useContext } from 'react';
import styled from 'styled-components';
import _unionBy from 'lodash/unionBy';
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  MessageFragment,
  ChatGetChannelPostsQuery,
  ChatGetChannelPostsQueryVariables,
  ChatReceiveChannelPostsSubscription,
  ChatReceiveChannelPostsSubscriptionVariables,
} from 'generated/graphql';
import { UserContext } from 'contexts/user';
import { breakpoints, hideScrollBar } from 'utils/style';
import { STICKY_NAV_HEADER_HEIGHT } from 'Routes/Fam/constants';
import FamContentChatBubble from './Bubble';

const SCROLLABLE_DIV_ID = 'chat-container';
const MESSAGES_PER_PAGE = 50;

export const Fragments = {
  message: gql`
    fragment Message on channel_post {
      id
      createdAt
      type
      message
      files {
        file {
          id
          mimeType
          path
          width
          height
        }
      }
      member {
        id
        user: user_ {
          id
          firstName
          lastName
          photos
          activeAt
        }
      }
    }
  `,
};

const GetChannelPostsQuery = gql`
  query ChatGetChannelPosts($channelId: uuid!, $limit: Int!, $before: timestamptz, $after: timestamptz) {
    channelPosts: channel_by_pk(id: $channelId) {
      id
      posts(
        where: { 
          createdAt: { _lt: $before, _gt: $after}, 
          deletedAt: { _is_null: true } 
          member: { user_: { deleted_at: { _is_null: true } } } 
        }
        order_by: { createdAt: desc }
        limit: $limit
      ) {
        ...Message
      }
    }
  }
  ${Fragments.message}
`;

const ReceiveChannelPostsSubscription = gql`
  subscription ChatReceiveChannelPosts($channelId: uuid!, $limit: Int!) {
    channelPosts: channel_by_pk(id: $channelId) {
      id
      posts(
        where: { member: { user_: { deleted_at: { _is_null: true } } } }
        order_by: { updatedAt: desc }
        limit: $limit
      ) {
        ...Message 
      }
    }
  }
  ${Fragments.message}
`;

// Styled components
const StyledContent = styled.div({
  height: '100vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  backgroundColor: '#f2f6f6',
});

const StyledMessageContainer = styled.div({
  ...hideScrollBar,
  display: 'flex',
  flexDirection: 'column-reverse',
  padding: '24px 28px 12px',
  overflow: 'auto',
  [breakpoints.md.css]: {
    paddingTop: STICKY_NAV_HEADER_HEIGHT,
  },
});

const StyledLoading = styled.div({
  textAlign: 'center',
  padding: 32,
});

type Props = {
  channelId: string;
  memberId: string | undefined;
  messages: Array<MessageFragment>
  setMessages: React.Dispatch<React.SetStateAction<MessageFragment[]>>
};

const FamContentChatBubbles: React.FunctionComponent<Props> = ({
  channelId, memberId, messages, setMessages,
}: Props) => {
  const { loading: userLoading } = useContext(UserContext);
  const [hasMore, setHasMore] = React.useState(false);
  const [initialFetchCompleted, setInitialFetchCompleted] = React.useState(false);
  const { refetch, fetchMore, loading } = useQuery<ChatGetChannelPostsQuery, ChatGetChannelPostsQueryVariables>(
    GetChannelPostsQuery, {
      variables: {
        channelId,
        limit: MESSAGES_PER_PAGE,
      },
      skip: !memberId,
      onCompleted: data => {
        setInitialFetchCompleted(true);
        const fetchedMessages = data?.channelPosts?.posts || [];
        setHasMore(fetchedMessages.length === MESSAGES_PER_PAGE);
        setMessages(fetchedMessages);
      },
    },
  );
  useSubscription<ChatReceiveChannelPostsSubscription, ChatReceiveChannelPostsSubscriptionVariables>(
    ReceiveChannelPostsSubscription, {
      variables: {
        channelId,
        limit: 1,
      },
      skip: !initialFetchCompleted,
      onSubscriptionData: async ({ subscriptionData }) => {
        const newPosts = subscriptionData?.data?.channelPosts?.posts || [];
        if (!newPosts.length) {
          return;
        }

        // Subscription notifies us when there is at least one new message.
        // We then fetch the messages that are created after the last fetch.
        const posts = await refetch({
          before: null,
          after: messages.length ? messages[0].createdAt : null,
        });
        setMessages(prevMessages => {
          return _unionBy(posts?.data?.channelPosts?.posts || [], prevMessages, 'id');
        });
      },
    },
  );

  const onScroll = React.useCallback(async () => {
    const res = await fetchMore({
      variables: {
        before: messages.length ? messages[messages.length - 1].createdAt : null,
        after: null,
      },
    });
    const moreMessages = res?.data?.channelPosts?.posts || [];
    const newMessages = _unionBy(messages, moreMessages, 'id');
    setHasMore(moreMessages.length === MESSAGES_PER_PAGE);
    setMessages(newMessages);
  }, [fetchMore, messages, setMessages]);

  if (loading || userLoading || !memberId) {
    return <StyledContent />;
  }

  return (
    <StyledMessageContainer id={SCROLLABLE_DIV_ID}>
      <InfiniteScroll
        dataLength={messages.length}
        next={onScroll}
        loader={<StyledLoading>Loading...</StyledLoading>}
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
        scrollableTarget={SCROLLABLE_DIV_ID}
        hasMore={hasMore}
        scrollThreshold="250px"
        inverse
      >
        {messages.map(m => (
          <FamContentChatBubble
            key={m.id}
            message={m}
            photoId={m.member?.user?.photos?.[0]?.id}
            isMe={m.member?.id === memberId}
          />
        ))}
      </InfiniteScroll>
    </StyledMessageContainer>
  );
};

export default FamContentChatBubbles;
