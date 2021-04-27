import React, { useContext } from 'react';
import styled from 'styled-components';
import { fontStyles, textOverflowEllipses } from 'utils/style';
import {
  NavCircleListItemFragment,
} from 'generated/graphql';
import { RouteComponentProps, withRouter } from 'react-router';
import ProfileImage from 'components/user/ProfileImage';
import { gql, useMutation } from '@apollo/client';
import { UserContext } from 'contexts/user';
import { NavBarContext } from 'contexts/navbar';
import useIsFamMember from 'hooks/useIsFamMember';
import { logEvent } from 'clients/amplitude';

const JoinChannelMutation = gql`
  mutation FamBarJoinChannel($channelId: uuid!, $userId: uuid! ) {
    channelMember: insert_channel_member_one(
      object: { channelId: $channelId, userId: $userId, deletedAt: null }
      on_conflict: { constraint: channel_member_channel_id_user_id_key, update_columns: [deletedAt] }
    ) {
      id
    }
  }
`;

const StyledCircleDetails = styled.div({
  flex: 1,
  borderRadius: 20,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  overflow: 'hidden',
});

const StyledCircleListItem = styled.li<{ isSelected: boolean }>(props => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  overflow: 'hidden',
  cursor: 'pointer',
  padding: '12px 24px',
  backgroundColor: props.isSelected ? '#EEF6F6' : '#FFFFFF',
  ':hover': {
    backgroundColor: '#EEF6F6',
  },
}));

const StyledUnreadIndicator = styled.span<{ isUnread: boolean }>(props => ({
  height: 10,
  width: 10,
  flexShrink: 0,
  marginLeft: 8,
  borderRadius: '100%',
  backgroundColor: props.isUnread ? '#FF505A' : 'transparent',
}));

const StyledCircleImage = styled(ProfileImage)({
  width: 40,
  height: 40,
});

const StyledCircleText = styled.div({
  display: 'flex',
  paddingLeft: 12,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  ...textOverflowEllipses,
});

const StyledCircleTitle = styled.label({
  ...fontStyles.h6,
  ...textOverflowEllipses,
  width: '100%',
  textAlign: 'left',
  cursor: 'pointer',
});

const StyledCircleLastMessage = styled.p({
  ...fontStyles.chatsBody,
  ...textOverflowEllipses,
  color: '#A5A5A5',
  width: '100%',
  fontStyle: 'bold',
  fontWeight: 700,
});

type PathParamsType = {
  channelId: string;
  famAlphaName: string;
}

type Props = RouteComponentProps<PathParamsType> & {
  circle: NavCircleListItemFragment;
  groupImage: string;
  isChannelMember: boolean;
  hasUnreadMessage: boolean;
}

const CircleListItem: React.FunctionComponent<Props> = ({
  match,
  history,
  circle,
  groupImage,
  isChannelMember,
  hasUnreadMessage,
}: Props) => {
  const [isUnread, setIsUnread] = React.useState(hasUnreadMessage);
  const { famAlphaName, channelId } = match.params;
  const { user } = useContext(UserContext);
  const { isFamMember } = useIsFamMember();
  const { closeNav } = useContext(NavBarContext);
  const circleImage = circle.files?.[0]?.file?.path;
  const isSelected = channelId === circle.id;

  const [joinChannel] = useMutation(JoinChannelMutation, {
    variables: {
      userId: user?.id,
      channelId: circle.id,
    },
  });

  const navigate = async () => {
    if (!isChannelMember && isFamMember) {
      try {
        await joinChannel();
      } catch (err) {
        // eslint-disable-next-line no-alert
        alert('Sorry, error occurred. Please try again.');
        return;
      }
    }
    if (isUnread) {
      setIsUnread(false);
    }

    closeNav();
    logEvent('Fam Bar', 'Circle clicked', { famAlphaName, circleId: circle.id });
    history.replace(`/${famAlphaName}/circle/${circle.id}`);
  };

  return (
    <StyledCircleListItem onClick={navigate} isSelected={isSelected}>
      <StyledCircleDetails>
        <StyledCircleImage
          path={circleImage || groupImage}
          sourceType={circleImage ? 'cloudinary' : 'other'}
          gravity={null}
        />
        <StyledCircleText>
          <StyledCircleTitle>{circle.name}</StyledCircleTitle>
          <StyledCircleLastMessage>
            {circle.posts[0]?.message}
          </StyledCircleLastMessage>
        </StyledCircleText>
      </StyledCircleDetails>
      {user && isChannelMember && (
        <StyledUnreadIndicator isUnread={isUnread} />
      )}
    </StyledCircleListItem>
  );
};

export default withRouter(CircleListItem);
