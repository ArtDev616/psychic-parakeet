/* eslint-disable no-underscore-dangle */
import { gql, useMutation, useQuery } from '@apollo/client';
import React from 'react';
import {
  SettingsCreateAnnouncementMutation,
  SettingsCreateAnnouncementMutationVariables,
  SettingsUpdateAnnouncementMutation,
  SettingsUpdateAnnouncementMutationVariables,
  SettingsGetGroupByAlphaNameQuery,
  SettingsGetGroupByAlphaNameQueryVariables,
  SettingsPinAnnouncementMutation,
  SettingsPinAnnouncementMutationVariables,
} from 'generated/graphql';
import styled from 'styled-components';

import Button from 'components/buttons/Button';
import { HasuraFile } from 'clients/cloudinary';
import { useParams } from 'react-router';

const StyledButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 0',
});

const GetGroupByAlphaNameQuery = gql`
  query SettingsGetGroupByAlphaName($alphaName: String!) {
    group: group_(where: {alphaName: {_eq: $alphaName}}) {
      id
    }
  }
`;

const PinAnnouncementMutation = gql`
  mutation SettingsPinAnnouncement($groupId: uuid!, $announcementId: uuid!) {
    group: update_group__by_pk(pk_columns: { id: $groupId }, _set: { pinnedAnnouncementId: $announcementId }) {
      id
      pinnedAnnouncementId
    }
  }
`;

const UpdateAnnouncementMutation = gql`
  mutation SettingsUpdateAnnouncement(
    $announcementId: uuid!
    $data: announcement__set_input!
    $fileId: uuid!
    $fileData: file_set_input!
  ) {
    file: update_file_by_pk(pk_columns: { id: $fileId }, _set: $fileData) {
      id
    }
    announcement: update_announcement__by_pk(pk_columns: { id: $announcementId }, _set: $data) {
      id
      name 
      subtitle 
      text
      files {
        file {
          id
          path
        }
      }
    }
  }
`;

const CreateAnnouncementMutation = gql`
  mutation SettingsCreateAnnouncement($data: announcement__insert_input!) {
    announcement: insert_announcement__one(object: $data) {
      id
    }
  }
`;

type Props = {
  announcementId?: string;
  announcementFileId: string;
  announcementName: string;
  announcementSubtitle: string;
  announcementText: string;
  announcementFileData?: HasuraFile;
  closeModal: (shouldRefetchList?: boolean) => void
}

const AnnouncementsFormButtons: React.FunctionComponent<Props> = ({
  announcementId,
  announcementFileId,
  announcementName,
  announcementSubtitle,
  announcementText,
  announcementFileData,
  closeModal,
}) => {
  const { famAlphaName } = useParams<{ famAlphaName: string; }>();
  const { data, loading } = useQuery<SettingsGetGroupByAlphaNameQuery, SettingsGetGroupByAlphaNameQueryVariables>(
    GetGroupByAlphaNameQuery, {
      variables: {
        alphaName: famAlphaName,
      },
    },
  );
  const groupId = data?.group?.[0]?.id;
  const canSubmit = !loading && Boolean(
    announcementName && announcementSubtitle && announcementText && announcementFileData?.path,
  );
  const [pinAnnouncementMutation] = useMutation<
    SettingsPinAnnouncementMutation,
    SettingsPinAnnouncementMutationVariables
  >(
    PinAnnouncementMutation,
  );
  const [updateAnnouncementMutation] = useMutation<
    SettingsUpdateAnnouncementMutation,
    SettingsUpdateAnnouncementMutationVariables
  >(
    UpdateAnnouncementMutation,
  );
  const [createAnnouncementMutation] = useMutation<
    SettingsCreateAnnouncementMutation,
    SettingsCreateAnnouncementMutationVariables
  >(
    CreateAnnouncementMutation,
  );

  const onSaveClick = async () => {
    if (!announcementFileData) {
      return;
    }

    if (announcementId) {
      await updateAnnouncementMutation({
        variables: {
          announcementId,
          fileData: { path: announcementFileData?.path },
          fileId: announcementFileId,
          data: {
            name: announcementName,
            text: announcementText,
            subtitle: announcementSubtitle,
          },
        },
      });
      closeModal();
    } else {
      const announcement = await createAnnouncementMutation({
        variables: {
          data: {
            groupId,
            name: announcementName,
            subtitle: announcementSubtitle,
            text: announcementText,
            files: {
              data: [
                {
                  file: {
                    data: announcementFileData,
                  },
                },
              ],
            },
          },
        },
      });
      await pinAnnouncementMutation({
        variables: {
          groupId,
          announcementId: announcement.data?.announcement?.id,
        },
      });
      closeModal(true);
    }
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

export default AnnouncementsFormButtons;
