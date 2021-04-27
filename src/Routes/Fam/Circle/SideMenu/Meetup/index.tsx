import { gql, useQuery } from '@apollo/client';
import svg from 'assets/svg';
import { CLOUDINARY_RES_URL } from 'clients/cloudinary';
import { Image, Transformation } from 'cloudinary-react';
import { UserContext } from 'contexts/user';
import {
  SideMenuGetMyMeetupRsvpQuery,
  SideMenuGetMyMeetupRsvpQueryVariables,
  SideMenuGetMeetupQuery,
  SideMenuGetMeetupQueryVariables,
} from 'generated/graphql';
import React from 'react';
import RsvpButton from 'Routes/Fam/Circle/SideMenu/Meetup/RsvpButton';
import styled from 'styled-components';
import { isDateInPast } from 'utils/helpers';
import { breakpoints, fontStyles, textOverflowEllipses } from 'utils/style';

const Fragments = {
  channelMeetup: gql`
    fragment channelMeetup on event_ {
      id
      name
      description
      file {
        id
        path
        mimeType
      }
      location
      time
      rsvpCount: rsvps_aggregate {
        aggregate {
          count
        }
      }
    }
  `,
};

const SideMenuGetMeetup = gql`
  query SideMenuGetMeetup($eventId: uuid!) {
    event: event__by_pk(id: $eventId) {
      ...channelMeetup
    }
  }
  ${Fragments.channelMeetup}
`;

const SideMenuGetMyMeetupRsvp = gql`
  query SideMenuGetMyMeetupRsvp($userId: uuid!, $eventId: uuid!) {
    myRsvps: event_rsvp(where: {
      eventId: { _eq: $eventId}, userId: {_eq: $userId}
    }) {
      id
    }
  }
`;

const StyledCardContainer = styled.div({
  display: 'flex',
  borderRadius: 16,
  backgroundColor: '#FFFFFF',
  overflow: 'hidden',
  flexDirection: 'column',
  marginTop: 24,
  width: '100%',
  maxWidth: 300,
  [breakpoints.l.css]: {
    maxWidth: 200,
  },
  [breakpoints.md.css]: {
    maxWidth: 340,
  },
});

const StyledCloudinaryImage = styled(Image)({
  width: '100%',
});

const StyledImage = styled.img({
  width: '100%',
});

const StyledDetails = styled.div({
  padding: 12,
});

const StyledName = styled.h6({
  ...fontStyles.h6,
});

const StyledDescription = styled.p({
  ...fontStyles.cardsBody,
  margin: '12px 0',
  paddingRight: 12,
  wordWrap: 'break-word',
});

const StyledDetail = styled.div({
  display: 'flex',
  alignItems: 'center',
  margin: '4px 0',
});

const StyledDetailIcon = styled.img({
  color: '#8F95B1',
});

const StyledDetailText = styled.p({
  ...fontStyles.cardsBody,
  color: '#535353',
  marginLeft: 8,
  ...textOverflowEllipses,
});

const StyledRsvpText = styled.p({
  ...fontStyles.cardsBody,
  paddingLeft: 4,
  fontWeight: 800,
  color: '#3BB6B5',
  ...textOverflowEllipses,
});

type Props = {
  eventId: string;
}

const ChatSideMenuMeetupCard: React.FunctionComponent<Props> = ({ eventId }) => {
  const { user } = React.useContext(UserContext);
  const { data: eventData, refetch } = useQuery<
    SideMenuGetMeetupQuery,
    SideMenuGetMeetupQueryVariables>(SideMenuGetMeetup, {
      variables: {
        eventId,
      },
    });

  const { data: myRsvpData, refetch: refetchMyRsvps } = useQuery<
    SideMenuGetMyMeetupRsvpQuery,
    SideMenuGetMyMeetupRsvpQueryVariables>(SideMenuGetMyMeetupRsvp, {
      variables: {
        eventId,
        userId: user?.id || '',
      },
      skip: !user?.id,
    });

  const event = eventData?.event;
  const isInPast = !event || isDateInPast(new Date(event.time), new Date());
  const eventImage = event?.file?.path || '';
  const sourceType = eventImage?.includes(CLOUDINARY_RES_URL) ? 'other' : 'cloudinary_id';
  const myRsvpId = myRsvpData?.myRsvps?.length ? myRsvpData.myRsvps[0]?.id || null : null;
  const eventTime = event ? new Date(event.time).toLocaleString() : '-';

  const refetchAll = async () => {
    await refetchMyRsvps();
    refetch();
  };

  if (!event) {
    return null;
  }

  return (
    <StyledCardContainer>
      {sourceType === 'other'
        ? <StyledImage alt="event_image" src={eventImage} /> : (
          <StyledCloudinaryImage alt="event_image" publicId={eventImage}>
            <Transformation rawTranformation="c_thumb,f_auto,h_100,q_60,w_100" />
          </StyledCloudinaryImage>
        )}
      <StyledDetails>
        <StyledName>{event.name}</StyledName>
        <StyledDescription>{event.description}</StyledDescription>
        <StyledDetail>
          <StyledDetailIcon src={svg.clock} />
          <StyledDetailText>{eventTime}</StyledDetailText>
        </StyledDetail>
        <StyledDetail>
          <StyledDetailIcon src={svg.location} />
          <StyledDetailText>{event.location === 'none' ? 'Online' : event.location}</StyledDetailText>
        </StyledDetail>
        <StyledDetail>
          <StyledDetailIcon src={svg.countMeIn} />
          <StyledDetailText>
            {event.rsvpCount?.aggregate?.count?.toString() || '-'}
            {' going '}
            {myRsvpId && '·'}
          </StyledDetailText>
          {myRsvpId && <StyledRsvpText>Going</StyledRsvpText>}
        </StyledDetail>
        {!isInPast && <RsvpButton eventId={eventId} myRsvpId={myRsvpId} refetchMeetup={refetchAll} user={user} />}
      </StyledDetails>
    </StyledCardContainer>
  );
};

export default ChatSideMenuMeetupCard;
