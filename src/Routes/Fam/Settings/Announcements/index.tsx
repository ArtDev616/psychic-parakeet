import { gql, useMutation, useQuery } from '@apollo/client';
import styled from 'styled-components';
import dayjs from 'dayjs';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import {
  SettingsGetGroupAnnouncementsQuery,
  SettingsGetGroupAnnouncementsQueryVariables,
  SettingsDeleteGroupAnnouncementsMutation,
  SettingsDeleteGroupAnnouncementsMutationVariables,
  SettingsUnpinGroupAnnouncementMutation,
  SettingsUnpinGroupAnnouncementMutationVariables,
} from 'generated/graphql';

import AnnouncementsTable from 'Routes/Fam/Settings/Announcements/Table';
import AnnouncementsForm from 'Routes/Fam/Settings/Announcements/Form';
import Modal from 'components/modals/Modal';
import Button from 'components/buttons/Button';
import { ReactComponent as AnnouncementIcon } from 'assets/svg/announcement.svg';

const StyledButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: 18,
});

const StyledAnnouncementIcon = styled(AnnouncementIcon)({
  marginRight: 8,
});

const Fragments = {
  announcement: gql`
    fragment SettingsAnnouncement on announcement_ {
      id
      groupId
      name
      subtitle
      createdAt
    }
  `,
};

const UnpinGroupAnnouncementMutation = gql`
  mutation SettingsUnpinGroupAnnouncement($groupId: uuid!) {
    group: update_group__by_pk(pk_columns: { id: $groupId }, _set: { pinnedAnnouncementId: null }) {
      id
    }
  }
`;

const GetGroupAnnouncementsQuery = gql`
  query SettingsGetGroupAnnouncements($alphaName: String!) {
    announcements: announcement_(
      where: {group: {alphaName: {_eq: $alphaName}}}, 
      order_by: {createdAt: desc}, 
      limit: 1000
    ) {
      ...SettingsAnnouncement
    }
  }
  ${Fragments.announcement}
`;

const DeleteGroupAnnouncementsMutation = gql`
  mutation SettingsDeleteGroupAnnouncements($uuids: [uuid!]!) {
    delete_announcement_(where: {id: {_in: $uuids}}) {
      returning {
        id
      }
    }
  }
`;

type PathParamsType = {
  famAlphaName: string;
}

type Props = RouteComponentProps<PathParamsType>

const FamAnnouncementSettings: React.FunctionComponent<Props> = ({ match }) => {
  const [selectedAnnouncementId, setSelectedAnnouncementId] = React.useState<string>();
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [deleteAnnouncementsMutation] = useMutation<
    SettingsDeleteGroupAnnouncementsMutation,
    SettingsDeleteGroupAnnouncementsMutationVariables
  >(
    DeleteGroupAnnouncementsMutation,
  );
  const [unpinAnnouncementMutation] = useMutation<
    SettingsUnpinGroupAnnouncementMutation,
    SettingsUnpinGroupAnnouncementMutationVariables
  >(
    UnpinGroupAnnouncementMutation,
  );
  const { data, refetch } = useQuery<
    SettingsGetGroupAnnouncementsQuery,
    SettingsGetGroupAnnouncementsQueryVariables
  >(
    GetGroupAnnouncementsQuery, {
      fetchPolicy: 'cache-and-network',
      variables: {
        alphaName: match.params.famAlphaName,
      },
    },
  );
  const deleteAnnouncements = async (announcementIds: Array<string>, groupId: string) => {
    await unpinAnnouncementMutation({
      variables: {
        groupId,
      },
    });
    await deleteAnnouncementsMutation({
      variables: {
        uuids: announcementIds,
      },
    });
    await refetch();
  };
  const onCreateClick = () => {
    setShowEditModal(true);
    setSelectedAnnouncementId('');
  };
  const onEditClick = (announcementId?: string) => {
    setShowEditModal(true);
    setSelectedAnnouncementId(announcementId || '');
  };
  const hide = async (shouldRefetch?: boolean) => {
    setShowEditModal(false);
    if (shouldRefetch) {
      await refetch();
    }
  };
  const announcements = (data?.announcements || []).map(d => ({
    ...d,
    createdAt: dayjs(d.createdAt).format('YYYY-MM-DD'),
  }));

  return (
    <>
      <Modal
        isModalVisible={showEditModal}
        hide={hide}
        styleOverrides={{ body: { minHeight: '700px' } }}
      >
        <AnnouncementsForm
          announcementId={selectedAnnouncementId}
          closeModal={hide}
        />
      </Modal>
      <StyledButtonContainer>
        <Button type="primary" onClick={onCreateClick}>
          <StyledAnnouncementIcon />
          New announcement
        </Button>
      </StyledButtonContainer>
      <AnnouncementsTable
        data={announcements}
        onEditClick={onEditClick}
        deleteAnnouncements={deleteAnnouncements}
      />
    </>
  );
};

export default FamAnnouncementSettings;
