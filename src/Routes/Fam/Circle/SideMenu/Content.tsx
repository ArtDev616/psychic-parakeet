import { gql, useQuery } from '@apollo/client';
import svg from 'assets/svg';
import { CLOUDINARY_RES_URL } from 'clients/cloudinary';
import { Image, Transformation } from 'cloudinary-react';
import { FamGetChatInfoQuery, FamGetChatInfoQueryVariables } from 'generated/graphql';
import React from 'react';
import MeetupItem from 'Routes/Fam/Circle/SideMenu/Meetup';
import { STICKY_NAV_HEADER_HEIGHT } from 'Routes/Fam/constants';
import styled from 'styled-components';
import {
  breakpoints, fontStyles, hideScrollBar, textOverflowEllipses,
} from 'utils/style';

const FamGetChatInfo = gql`
  query FamGetChatInfo($channelId: uuid!) {
    channel: channel_by_pk(id: $channelId) {
      id
      name
      description
      memberCount
      channelGroup: group_ {
        id
        imageUrl
        demonymPlural
      }
      channelFile {
        file {
          id
          path
          mimeType
        }
      }
      events(limit: 2, order_by: {createdAt: desc}) {
        id
      }
    }
  }
`;

const StyledSideMenu = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '36px 32px 36px 36px',
  overflow: 'auto',
  alignItems: 'center',
  [breakpoints.md.css]: {
    padding: `0 24px ${STICKY_NAV_HEADER_HEIGHT + 36}px`,
  },
});

const StyledChatTitle = styled.h1({
  ...fontStyles.h1,
  display: 'flex',
  flexShrink: 0,
  textAlign: 'center',
  [breakpoints.md.css]: {
    display: 'none',
  },
});

const StyledSubHeader = styled.h4({
  ...fontStyles.h4,
  ...textOverflowEllipses,
  textAlign: 'center',
  marginTop: 20,
});

const StyledChatIntro = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 24,
});

const StyledChatCloudinaryImage = styled(Image)({
  height: 200,
  width: 200,
  borderRadius: 16,
});

const StyledChatImage = styled.img({
  height: 200,
  width: 200,
  borderRadius: 16,
});

const StyledMemberBubble = styled.button({
  ...fontStyles.button,
  textAlign: 'center',
  padding: '8px 16px',
  color: '#000000',
  display: 'flex',
  alignItems: 'center',
  borderRadius: 44,
  marginTop: 20,
});

const StyledMemberIcon = styled.img({
  height: 16,
  width: 16,
});

const StyledMemberText = styled.span({
  padding: '0 4px',
});

const StyledChannelDescription = styled.p({
  ...fontStyles.body,
  textAlign: 'center',
  paddingLeft: 0,
  paddingTop: 20,
  width: '100%',
  [breakpoints.md.css]: {
    width: '50%',
  },
});

const StyledMeetupList = styled.ul({
  ...hideScrollBar,
  padding: 0,
  margin: 0,
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledText = styled.div({
  padding: 0,
  margin: 0,
  textAlign: 'center',
  marginTop: 16,
});

type Props = {
  channelId: string;
}

const ChatSideMenuContent: React.FunctionComponent<Props> = ({ channelId }: Props) => {
  const { data } = useQuery<FamGetChatInfoQuery, FamGetChatInfoQueryVariables>(FamGetChatInfo, {
    variables: {
      channelId,
    },
  });

  const channel = data?.channel;
  const channelGroup = channel?.channelGroup;
  const circleImageSource = channel?.channelFile?.file?.path || channelGroup?.imageUrl || '';
  const sourceType = circleImageSource?.includes(CLOUDINARY_RES_URL) ? 'other' : 'cloudinary_id';
  const meetups = channel?.events || [];

  if (!channel) {
    return null;
  }

  return (
    <StyledSideMenu>
      <StyledChatTitle>{channel.name}</StyledChatTitle>
      <StyledChatIntro>
        {sourceType === 'other'
          ? <StyledChatImage alt="circle_image" src={circleImageSource} /> : (
            <StyledChatCloudinaryImage alt="circle_image" publicId={circleImageSource}>
              <Transformation rawTranformation="c_thumb,f_auto,h_400,q_60,w_400" />
            </StyledChatCloudinaryImage>
          )}
        {Boolean(channel.description) && <StyledChannelDescription>{channel.description}</StyledChannelDescription>}
      </StyledChatIntro>
      <StyledMemberBubble>
        <StyledMemberIcon src={svg.membersIcon} alt="member_icon" />
        <StyledMemberText>{channelGroup?.demonymPlural || 'Members'}</StyledMemberText>
        {channel?.memberCount && channel.memberCount > 10
              && <span>{`(${channel?.memberCount?.toString() || '-'})`}</span>}
      </StyledMemberBubble>
      <StyledMeetupList>
        <StyledSubHeader>Meetups</StyledSubHeader>
        {meetups.map(meetup => (<MeetupItem key={meetup.id} eventId={meetup.id} />))}
        {meetups.length === 0 && <StyledText>No Meetups Yet!</StyledText>}
      </StyledMeetupList>
    </StyledSideMenu>
  );
};

export default ChatSideMenuContent;
