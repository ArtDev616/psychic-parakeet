/* eslint-disable no-underscore-dangle */
import { gql, useQuery } from '@apollo/client';
import React from 'react';
import {
  SettingsGetAnnouncementByIdQuery,
  SettingsGetAnnouncementByIdQueryVariables,
} from 'generated/graphql';
import styled, { CSSObject } from 'styled-components';
import LoadingIndicator from 'components/LoadingIndicator';
import { fontStyles } from 'utils/style';
import { Image, Transformation } from 'cloudinary-react';
import Button from 'components/buttons/Button';
import { ReactComponent as PictureIcon } from 'assets/svg/picture.svg';
import UploadWidgetLoader, { getWidget } from 'components/media/UploadWidgetLoader';
import { convertCloudinaryFileToHasuraFile, HasuraFile, UploadPresets } from 'clients/cloudinary';
import AnnouncementsFormButtons from 'Routes/Fam/Settings/Announcements/FormButtons';

const StyledContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '24px 32px',
  flex: 1,
});

const StyledImageContainer = styled.div({
  backgroundColor: '#FAFAFA',
  width: '100%',
  height: '100%',
  maxHeight: 200,
  marginBottom: 20,
  borderRadius: 4,
  overflow: 'hidden',
  position: 'relative',
});

const StyledUploadButton = styled(Button)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  display: 'flex',
  alignItems: 'center',
});

const StyledPictureIcon = styled(PictureIcon)({
  width: 16,
  height: 16,
  marginRight: 8,
  color: '#40D5A0',
});

const StyledLoadingContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

const StyledNameInput = styled.input({
  ...fontStyles.h4,
  width: '100%',
  border: 0,
  marginBottom: 18,
});

const inputStyles: CSSObject = {
  ...fontStyles.body,
  background: '#FAFAFA',
  border: '1px solid #F0F0F0',
  boxSizing: 'border-box',
  padding: '8px 12px',
  borderRadius: 6,
  marginTop: 6,
  marginBottom: 18,
};

const StyledSubtitleInput = styled.input({
  ...inputStyles,
});

const StyledTextarea = styled.textarea({
  ...inputStyles,
});

const StyledLabel = styled.label({
  ...fontStyles.small,
  fontWeight: 800,
  color: '#333333',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const StyledCloudinaryImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const GetAnnouncementByIdQuery = gql`
  query SettingsGetAnnouncementById($uuid: uuid!) {
    announcement: announcement__by_pk(id: $uuid) {
      id
      name
      subtitle
      text
      channelId
      updatedAt
      createdAt
      files {
        file {
          id
          path
        }
      }
    }
  }
`;

type Props = {
  announcementId?: string;
  closeModal: (shouldRefetch?: boolean) => void;
}

const AnnouncementsForm: React.FunctionComponent<Props> = ({ announcementId, closeModal }) => {
  const [announcementName, setAnnouncementName] = React.useState('');
  const [announcementSubtitle, setAnnouncementSubtitle] = React.useState('');
  const [announcementText, setAnnouncementText] = React.useState('');
  const [announcementFileData, setAnnouncementFileData] = React.useState<HasuraFile>();
  const [announcementFileId, setAnnouncementFileId] = React.useState('');
  const { loading } = useQuery<SettingsGetAnnouncementByIdQuery, SettingsGetAnnouncementByIdQueryVariables>(
    GetAnnouncementByIdQuery, {
      variables: {
        uuid: announcementId,
      },
      skip: !announcementId,
      onCompleted: response => {
        const {
          name, subtitle, text, files,
        } = response?.announcement || {};
        setAnnouncementName(name || '');
        setAnnouncementSubtitle(subtitle || '');
        setAnnouncementText(text || '');
        setAnnouncementFileData(files?.[0]?.file);
        setAnnouncementFileId(files?.[0]?.file.id);
      },
    },
  );

  const onPictureClick = async () => {
    const widget = getWidget((uploadedObject) => {
      if (uploadedObject) {
        setAnnouncementFileData(convertCloudinaryFileToHasuraFile(uploadedObject));
        widget.close();
      }
    }, {
      resourceType: 'image',
      uploadPreset: UploadPresets.Announcement,
    });
    widget.open();
  };

  if (loading) {
    return (
      <StyledLoadingContainer>
        <LoadingIndicator />
      </StyledLoadingContainer>
    );
  }

  return (
    <StyledContainer>
      <div>
        <StyledNameInput
          placeholder="Type announcement title"
          onChange={e => setAnnouncementName(e.target.value.slice(0, 100))}
          value={announcementName}
        />
        <StyledImageContainer>
          <UploadWidgetLoader />
          {announcementFileData?.path && (
            <StyledCloudinaryImage alt="profile_image" publicId={announcementFileData?.path}>
              <Transformation quality="auto" />
            </StyledCloudinaryImage>
          )}
          <StyledUploadButton type="tertiary" onClick={onPictureClick}>
            <StyledPictureIcon />
            {announcementFileData?.path ? 'Change photo' : 'Upload photo'}
          </StyledUploadButton>
        </StyledImageContainer>
        <StyledLabel>
          <span>
            Subtitle
          </span>
          <StyledSubtitleInput
            onChange={e => setAnnouncementSubtitle(e.target.value.slice(0, 100))}
            value={announcementSubtitle}
          />
        </StyledLabel>
        <StyledLabel>
          <span>
            Description
          </span>
          <StyledTextarea
            rows={10}
            onChange={e => setAnnouncementText(e.target.value.slice(0, 300))}
            value={announcementText}
          />
        </StyledLabel>
      </div>
      <AnnouncementsFormButtons
        announcementId={announcementId}
        announcementFileId={announcementFileId}
        announcementName={announcementName}
        announcementFileData={announcementFileData}
        announcementSubtitle={announcementSubtitle}
        announcementText={announcementText}
        closeModal={closeModal}
      />
    </StyledContainer>
  );
};

export default AnnouncementsForm;
