import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  ChatGetChannelMemberQuery,
  ChatGetChannelMemberQueryVariables,
  ChatUpdateLastViewedAtMutation,
  ChatUpdateLastViewedAtMutationVariables,
  MessageFragment,
} from 'generated/graphql';
import { breakpoints } from 'utils/style';
import { useQuery, gql, useMutation } from '@apollo/client';
import Header from 'Routes/Fam/Circle/Header';
import { UserContext } from 'contexts/user';
import SideMenu from 'Routes/Fam/Circle/SideMenu';
import useWindow, { SizeTypes } from 'hooks/useWindow';
import Bubbles from './Bubbles';
import Input from './Input';

const UpdateLastViewedAtMutation = gql`
  mutation ChatUpdateLastViewedAt($memberId: uuid!) {
    member: update_channel_member_by_pk(pk_columns: { id: $memberId }, _set: { lastViewedAt: "now()" }) {
      id
      lastViewedAt
    }
  }
`;

const GetChannelMemberQuery = gql`
  query ChatGetChannelMember($userId: uuid!, $channelId: uuid!) {
    channel_member(
      where: {
        channelId: {_eq: $channelId}, 
        userId: {_eq: $userId},
        deletedAt: {_is_null: true}
      }
    ) {
      id
    }
  }
`;

// Styled components
const StyledContainer = styled.div({
  display: 'flex',
  flex: 1,
});

const StyledContent = styled.div({
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-end',
  flexDirection: 'column',
  backgroundColor: '#f2f6f6',
  position: 'relative',
  '::before': {
    content: "''",
    position: 'absolute',
    zIndex: 1,
    // TODO(selmank): get the height of the input bar instead of hardcoding
    bottom: 92,
    left: 0,
    pointerEvents: 'none',
    backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255, 0), rgb(242, 246, 246, 1) 90%)',
    width: '100%',
    height: 16,
    [breakpoints.md.css]: {
      bottom: 80,
    },
    [breakpoints.xs.css]: {
      bottom: 65,
    },
  },
});

type Props = {
  channelId: string;
}

const FamContentChat: React.FunctionComponent<Props> = ({ channelId }: Props) => {
  const { user } = useContext(UserContext);
  const [messages, setMessages] = React.useState<Array<MessageFragment>>([]);
  const { size } = useWindow();
  const [sideMenuOpen, setSideMenuOpen] = React.useState(size === SizeTypes.XLARGE);

  const [updateLastViewedAtMutation] = useMutation<
    ChatUpdateLastViewedAtMutation,
    ChatUpdateLastViewedAtMutationVariables
  >(UpdateLastViewedAtMutation);
  const { data: channelMemberData } = useQuery<ChatGetChannelMemberQuery, ChatGetChannelMemberQueryVariables>(
    GetChannelMemberQuery, {
      variables: {
        userId: user?.id || '',
        channelId,
      },
      skip: !channelId || !user?.id,
      onCompleted: (data) => {
        if (data.channel_member?.[0]?.id) {
          updateLastViewedAtMutation({
            variables: {
              memberId: data.channel_member[0].id,
            },
          });
        }
      },
    },
  );

  const memberId = channelMemberData?.channel_member?.[0]?.id;

  React.useEffect(() => {
    setMessages([]);
  }, [channelId]);

  return (
    <StyledContainer>
      <StyledContent>
        <Header
          channelId={channelId}
          sideMenuOpen={sideMenuOpen}
          setSideMenuOpen={setSideMenuOpen}
        />
        <Bubbles
          channelId={channelId}
          memberId={memberId}
          messages={messages}
          setMessages={setMessages}
        />
        <Input
          channelId={channelId}
          memberId={memberId}
          messages={messages}
          setMessages={setMessages}
        />
      </StyledContent>
      <SideMenu
        channelId={channelId}
        sideMenuOpen={sideMenuOpen}
        setSideMenuOpen={setSideMenuOpen}
      />
    </StyledContainer>
  );
};

export default FamContentChat;
