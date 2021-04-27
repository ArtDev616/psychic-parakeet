import { gql, useMutation } from '@apollo/client';
import { ReactComponent as StyledCountMeInIcon } from 'assets/svg/hand.svg';
import { ReactComponent as StyledXIcon } from 'assets/svg/x.svg';
import Button from 'components/buttons/Button';
import {
  SideMenuDeleteRsvpMutation,
  SideMenuDeleteRsvpMutationVariables,
  SideMenuRsvpForMeetupMutation,
  SideMenuRsvpForMeetupMutationVariables,
  UserFragment,
} from 'generated/graphql';
import React from 'react';
import styled from 'styled-components';

const SideMenuCreateRsvp = gql`
  mutation SideMenuRsvpForMeetup($userId: uuid!, $eventId: uuid!) {
    myRsvp: insert_event_rsvp_one(object: { eventId: $eventId, userId: $userId }) {
      id
    } 
  }
`;

const SideMenuDeleteRsvp = gql`
  mutation SideMenuDeleteRsvp($rsvpId: uuid!) {
    myRsvp: delete_event_rsvp_by_pk(id: $rsvpId) {
      id
    } 
  }
`;

const StyledContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '16px 0 4px',
});

const StyledRsvpButton = styled(Button)({
  padding: '8px 16px',
});

const StyledCountMeIn = styled(StyledCountMeInIcon)({
  color: '#FFFFFF',
});

const StyledX = styled(StyledXIcon)({
  height: 12,
  width: 12,
});

const StyledRsvpText = styled.span({
  marginLeft: 8,
  textAlign: 'center',
});

type Props = {
  user: UserFragment | null;
  eventId: string;
  myRsvpId: string | null;
  refetchMeetup: () => Promise<void>;
}

const ChatSideMenuRsvpButton: React.FunctionComponent<Props> = ({
  eventId, refetchMeetup, user, myRsvpId,
}) => {
  const [rsvping, setRsvping] = React.useState(false);
  const [rsvpForEvent] = useMutation<
    SideMenuRsvpForMeetupMutation,
    SideMenuRsvpForMeetupMutationVariables>(SideMenuCreateRsvp);
  const [deleteRsvp] = useMutation<
    SideMenuDeleteRsvpMutation,
    SideMenuDeleteRsvpMutationVariables>(SideMenuDeleteRsvp);
  const rsvpExists = ((rsvping && !myRsvpId) || (!rsvping && myRsvpId));
  const createOrCancelRsvp = async () => {
    if (!user?.id) return;
    if (rsvping) return;
    setRsvping(true);
    if (myRsvpId) {
      await deleteRsvp({ variables: { rsvpId: myRsvpId } });
    } else {
      await rsvpForEvent({ variables: { userId: user?.id, eventId } });
    }
    await refetchMeetup();
    setRsvping(false);
  };

  if (!user?.id) {
    return null;
  }

  return (
    <StyledContainer>
      <StyledRsvpButton
        type={rsvpExists ? 'tertiary' : 'primary'}
        onClick={createOrCancelRsvp}
      >
        {rsvpExists ? <StyledX /> : <StyledCountMeIn />}
        <StyledRsvpText>{rsvpExists ? 'Cancel rsvp' : 'Count me in!'}</StyledRsvpText>
      </StyledRsvpButton>
    </StyledContainer>
  );
};

export default ChatSideMenuRsvpButton;
