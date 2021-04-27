import { gql, useMutation, useQuery } from '@apollo/client';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import {
  SettingsGetGroupChannelsQuery,
  SettingsGetGroupChannelsQueryVariables,
  SettingsDeleteGroupChannelMutation,
  SettingsDeleteGroupChannelMutationVariables,
} from 'generated/graphql';
import CirclesTable from 'Routes/Fam/Settings/Channels/Table';
import Button from 'components/buttons/Button';
import Modal from 'components/modals/Modal';
import styled from 'styled-components';
import { ReactComponent as MembersIcon } from 'assets/svg/members.svg';
import ChannelForm from 'Routes/Fam/Settings/Channels/Form';

const DeleteGroupChannelMutation = gql`
  mutation SettingsDeleteGroupChannel($uuids: [uuid!]!) {
    updateReplies: update_channel_post(where: {channelId: {_in: $uuids}}, _set: {parentPostId: null}) {
      returning {
        id
      }
    }

    deleteReactions: delete_channel_post_reaction(where: {post: {channelId: {_in: $uuids}}}) {
      returning {
        channelPostId
        reactionId
      }
    }

    deleteAllPosts: delete_channel_post(where: {channelId: {_in: $uuids}}) {
      returning {
        id
      }
    }

    deleteMembers: delete_channel_member(where: {channelId: {_in: $uuids}}) {
      returning {
        id
      }
    }

    deleteChannels: delete_channel(where: {id: {_in: $uuids}}) {
      returning {
        id
        name
      }
    }
  }
`;

const GetGroupChannelsQuery = gql`
  query SettingsGetGroupChannels($alphaName: String!) {
    channels: channel(
      where: {group_: {alphaName: {_eq: $alphaName}}}, 
      order_by: {members_aggregate: {count: desc}, createdAt: desc},
      limit: 1000
    ) {
      id
      name
      memberCount
      default
      private
      posts_aggregate {
        aggregate {
          count
        }
      }
      owner {
        firstName
        lastName
      }
    }
  }
`;

const StyledButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: 18,
});

const StyledChannelIcon = styled(MembersIcon)({
  marginRight: 8,
});

type PathParamsType = {
  famAlphaName: string;
}

type Props = RouteComponentProps<PathParamsType>

const FamCircleSettings: React.FunctionComponent<Props> = ({ match }) => {
  const [selectedChannelId, setSelectedChannelId] = React.useState<string>();
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [deleteChannelMutation] = useMutation<
    SettingsDeleteGroupChannelMutation,
    SettingsDeleteGroupChannelMutationVariables
  >(
    DeleteGroupChannelMutation,
  );
  const { data, refetch } = useQuery<
    SettingsGetGroupChannelsQuery,
    SettingsGetGroupChannelsQueryVariables
  >(
    GetGroupChannelsQuery, {
      fetchPolicy: 'cache-and-network',
      variables: {
        alphaName: match.params.famAlphaName,
      },
    },
  );
  const deleteChannels = async (channelIds: Array<string>) => {
    await deleteChannelMutation({
      variables: {
        uuids: channelIds,
      },
    });
    await refetch();
  };
  const onCreateClick = () => {
    setShowEditModal(true);
    setSelectedChannelId('');
  };
  const onEditClick = (channelId?: string) => {
    setShowEditModal(true);
    setSelectedChannelId(channelId || '');
  };
  const hide = async (shouldRefetch?: boolean) => {
    setShowEditModal(false);
    if (shouldRefetch) {
      await refetch();
    }
  };

  const transformedCircles = (data?.channels || []).map(d => ({
    id: d.id,
    name: d.name || '',
    memberCount: d.memberCount || 0,
    default: d.default ? 'Yes' : ' ',
    private: d.private ? 'Yes' : ' ',
    postCount: d.posts_aggregate.aggregate?.count || 0,
    ownerName: `${d.owner?.firstName || ''} ${d.owner?.lastName || ''}`,
  }));

  return (
    <>
      <Modal
        isModalVisible={showEditModal}
        hide={hide}
        styleOverrides={{ body: { minHeight: '650px' } }}
      >
        <ChannelForm
          channelId={selectedChannelId}
          closeModal={hide}
        />
      </Modal>
      <StyledButtonContainer>
        <Button type="primary" onClick={onCreateClick}>
          <StyledChannelIcon />
          New circle
        </Button>
      </StyledButtonContainer>
      <CirclesTable
        data={transformedCircles}
        deleteChannels={deleteChannels}
        onEditClick={onEditClick}
      />
    </>
  );
};

export default FamCircleSettings;
