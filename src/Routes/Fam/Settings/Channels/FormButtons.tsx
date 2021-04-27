/* eslint-disable no-underscore-dangle */
import { gql, useMutation, useQuery } from '@apollo/client';
import React, { useContext } from 'react';
import {
  SettingsChannelGetGroupByAlphaNameQuery,
  SettingsChannelGetGroupByAlphaNameQueryVariables,
  SettingsChannelUpdateChannelMutation,
  SettingsChannelUpdateChannelMutationVariables,
  SettingsChannelCreateChannelMutation,
  SettingsChannelCreateChannelMutationVariables,
  SettingsChannelUpdateChannelFileMutation,
  SettingsChannelUpdateChannelFileMutationVariables,
  SettingsChannelCreateChannelFileMutation,
  SettingsChannelCreateChannelFileMutationVariables,
} from 'generated/graphql';
import styled from 'styled-components';

import Button from 'components/buttons/Button';
import { HasuraFile } from 'clients/cloudinary';
import { useParams } from 'react-router';
import { UserContext } from 'contexts/user';

const StyledButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 0',
});

const GetGroupByAlphaNameQuery = gql`
  query SettingsChannelGetGroupByAlphaName($alphaName: String!) {
    group: group_(where: {alphaName: {_eq: $alphaName}}) {
      id
    }
  }
`;

const CreateChannelMutation = gql`
  mutation SettingsChannelCreateChannel($data: channel_insert_input!) {
    channel: insert_channel_one(object: $data) {
      id
    }
  }
`;

const UpdateChannelMutation = gql`
  mutation SettingsChannelUpdateChannel(
    $channelId: uuid!
    $data: channel_set_input!
  ) {
    channel: update_channel_by_pk(pk_columns: { id: $channelId}, _set: $data) {
      id
      name 
      description 
      private
      default
      files {
        file {
          id
          path
        }
      }
    }
  }
`;

const CreateChannelFileMutation = gql`
  mutation SettingsChannelCreateChannelFile(
    $file: file_insert_input!
  ) {
    file: insert_file_one(
      object: $file
    ) {
      id
      path
    }
  }
`;

const UpdateChannelFileMutation = gql`
  mutation SettingsChannelUpdateChannelFile($fileId: uuid!, $channelId: uuid!) {
    insert_channel_file_one(
      object: {fileId: $fileId, channelId: $channelId}
      on_conflict: {constraint: channel_file_channel_id_key, update_columns: fileId},
    ) {
      fileId
      channelId
    }
  }
`;

type Props = {
  channelId?: string;
  channelName: string;
  channelDescription: string;
  channelDefault: boolean;
  channelPrivate: boolean;
  channelFileData?: HasuraFile | null;
  closeModal: (shouldRefetchList?: boolean) => void
}

const ChannelFormButtons: React.FunctionComponent<Props> = ({
  channelId,
  channelName,
  channelDescription,
  channelDefault,
  channelPrivate,
  channelFileData,
  closeModal,
}) => {
  const { user } = useContext(UserContext);
  const { famAlphaName } = useParams<{ famAlphaName: string; }>();
  const { data, loading } = useQuery<
    SettingsChannelGetGroupByAlphaNameQuery,
    SettingsChannelGetGroupByAlphaNameQueryVariables
  >(
    GetGroupByAlphaNameQuery, {
      variables: {
        alphaName: famAlphaName,
      },
    },
  );
  const groupId = data?.group?.[0]?.id;
  const canSubmit = !loading && Boolean(
    channelName,
  );
  const [updateChannelMutation] = useMutation<
    SettingsChannelUpdateChannelMutation,
    SettingsChannelUpdateChannelMutationVariables
  >(
    UpdateChannelMutation,
  );
  const [createChannelFileMutation] = useMutation<
    SettingsChannelCreateChannelFileMutation,
    SettingsChannelCreateChannelFileMutationVariables
  >(
    CreateChannelFileMutation,
  );
  const [updateChannelFileMutation] = useMutation<
    SettingsChannelUpdateChannelFileMutation,
    SettingsChannelUpdateChannelFileMutationVariables
  >(
    UpdateChannelFileMutation,
  );
  const [createChannelMutation] = useMutation<
    SettingsChannelCreateChannelMutation,
    SettingsChannelCreateChannelMutationVariables
  >(
    CreateChannelMutation,
  );

  const onSaveClick = async () => {
    if (channelId) {
      // First, update the file data then update name and description fields
      if (channelFileData && !channelFileData.id) {
        const file = await createChannelFileMutation({
          variables: {
            file: channelFileData,
          },
        });

        await updateChannelFileMutation({
          variables: {
            channelId,
            fileId: file.data?.file?.id,
          },
        });
      }

      await updateChannelMutation({
        variables: {
          channelId,
          data: {
            ownerId: user?.id,
            name: channelName,
            description: channelDescription,
            private: channelPrivate,
            default: channelDefault,
          },
        },
      });
    } else {
      await createChannelMutation({
        variables: {
          data: {
            groupId,
            name: channelName,
            description: channelDescription,
            private: channelPrivate,
            default: channelDefault,
            ownerId: user?.id,
            files: channelFileData ? {
              data: [
                {
                  file: {
                    data: channelFileData,
                  },
                },
              ],
            } : undefined,
          },
        },
      });
    }
    closeModal(true);
  };

  return (
    <StyledButtonContainer>
      <Button type="tertiary" onClick={closeModal}>
        Cancel
      </Button>
      <Button disabled={!canSubmit} type="secondary" onClick={onSaveClick}>
        Save
      </Button>
    </StyledButtonContainer>
  );
};

export default ChannelFormButtons;
