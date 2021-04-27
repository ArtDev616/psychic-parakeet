import { gql, useMutation } from '@apollo/client';
import { useParams } from 'react-router';
import React, { useContext } from 'react';
import styled from 'styled-components';
import _unionBy from 'lodash/unionBy';
import {
  // eslint-disable-next-line camelcase
  Channel_Post_Type_Enum,
  MessageFragment,
  ChatInsertChannelPostMutation,
  ChatInsertChannelPostMutationVariables,
} from 'generated/graphql';
import { UserContext } from 'contexts/user';
import { breakpoints, fontStyles } from 'utils/style';
import { logEvent } from 'clients/amplitude';
import { Fragments } from './Bubbles';

const InsertChannelPostMutation = gql`
  mutation ChatInsertChannelPost(
    $message: String = ""
    $memberId: uuid!
    $channelId: uuid!
    $type: channel_post_type_enum = message
  ) {
    post: insert_channel_post_one(
      object: {
        channelId: $channelId
        memberId: $memberId
        message: $message
        type: $type
      }
    ) {
      ...Message
    }
  }
  ${Fragments.message}
`;

type Props = {
  channelId: string;
  memberId: string | undefined;
  messages: Array<MessageFragment>
  setMessages: React.Dispatch<React.SetStateAction<MessageFragment[]>>
};

const StyledInputContainer = styled.div({
  padding: 32,
  paddingTop: 20,
  [breakpoints.md.css]: {
    padding: 24,
    paddingTop: 16,
  },
  [breakpoints.xs.css]: {
    padding: 16,
    paddingTop: 8,
  },
});

const StyledInput = styled.input({
  ...fontStyles.placeholder,
  color: '#000000',
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: '#FFFFFF',
  borderRadius: 32,
  borderWidth: 0,
  padding: '12px 16px',
  boxShadow: '0px 3px 3px #eaeaea',
});

type PathParamsType = { famAlphaName: string };

const FamContentChatInput: React.FunctionComponent<Props> = ({
  channelId, memberId, messages, setMessages,
}: Props) => {
  const { famAlphaName } = useParams<PathParamsType>();
  const [message, setMessage] = React.useState('');
  const { user } = useContext(UserContext);
  const [addPost] = useMutation<ChatInsertChannelPostMutation, ChatInsertChannelPostMutationVariables>(
    InsertChannelPostMutation, {
      update: (_proxy, { data: createdPost }) => {
        const newPost = createdPost?.post;
        if (!newPost?.id) {
          return;
        }

        if (newPost.id < 0) {
        // Immeediately pushing the optimistic response
          const newMessages = _unionBy([newPost], messages, 'id');
          setMessages(newMessages);
        } else {
          setMessages(list => {
            const foundMessage = list.find(m => m.id < 0);
            return list.map(m => (m.id === foundMessage?.id ? newPost : m));
          });
        }
      },
    },
  );

  const sendMessage = async (text: string) => {
    // Optimistic uuids are negative
    const optimisticUUID = Math.round(Math.random() * -1000000).toString();

    // Formulate optimistic response
    const optimisticResponse: ChatInsertChannelPostMutation = {
      __typename: 'mutation_root',
      post: {
        id: optimisticUUID,
        createdAt: '2021-03-17T06:17:07.907415+00:00',
        type: Channel_Post_Type_Enum.Message,
        message: text,
        files: [],
        member: {
          id: memberId,
          user: {
            id: user?.id,
            firstName: user?.firstName,
            lastName: user?.lastName,
            photos: user?.photos,
            __typename: 'user_',
          },
          __typename: 'channel_member',
        },
        __typename: 'channel_post',
      },
    };
    await addPost({
      variables: {
        channelId,
        memberId,
        message: message || '',
        type: Channel_Post_Type_Enum.Message,
      },
      optimisticResponse,
    });
  };

  return (
    <StyledInputContainer>
      <StyledInput
        placeholder={!memberId ? 'Join this fam to start chatting!' : 'Write a message...'}
        disabled={!memberId}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          // @ts-ignore
          if (e.key === 'Enter' && e.target.value.trim().length) {
            // @ts-ignore
            sendMessage(e.target.value);
            setMessage('');
            logEvent('Fam Circle', 'Chat message sent', { famAlphaName, channelId });
          }
        }}
      />
    </StyledInputContainer>
  );
};

export default FamContentChatInput;
