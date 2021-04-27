/* eslint-disable no-underscore-dangle */
import { gql, useQuery } from '@apollo/client';
import React from 'react';
import {
  SettingsGetChannelByIdQuery,
  SettingsGetChannelByIdQueryVariables,
} from 'generated/graphql';
import styled, { CSSObject } from 'styled-components';
import LoadingIndicator from 'components/LoadingIndicator';
import { fontStyles } from 'utils/style';
import { Image, Transformation } from 'cloudinary-react';
import Button from 'components/buttons/Button';
import { ReactComponent as PictureIcon } from 'assets/svg/picture.svg';
import UploadWidgetLoader, { getWidget } from 'components/media/UploadWidgetLoader';
import { convertCloudinaryFileToHasuraFile, HasuraFile, UploadPresets } from 'clients/cloudinary';
import ChannelFormButtons from 'Routes/Fam/Settings/Channels/FormButtons';

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

const StyledCheckbox = styled.input({
  marginRight: 8,
});

const StyledCheckboxContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const GetChannelByIdQuery = gql`
  query SettingsGetChannelById($uuid: uuid!) {
    channel: channel_by_pk(id: $uuid) {
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

type Props = {
  channelId?: string;
  closeModal: (shouldRefetch?: boolean) => void;
}

const ChannelForm: React.FunctionComponent<Props> = ({ channelId, closeModal }) => {
  const [channelName, setChannelName] = React.useState('');
  const [channelDescription, setChannelDescription] = React.useState('');
  const [channelPrivate, setChannelPrivate] = React.useState(false);
  const [channelDefault, setChannelDefault] = React.useState(false);
  const [channelFileData, setChannelFileData] = React.useState<HasuraFile | null>();
  const { loading } = useQuery<SettingsGetChannelByIdQuery, SettingsGetChannelByIdQueryVariables>(
    GetChannelByIdQuery, {
      variables: {
        uuid: channelId,
      },
      skip: !channelId,
      onCompleted: response => {
        const {
          name, description, files, private: privateCircle, default: defaultCircle,
        } = response?.channel || {};
        setChannelName(name || '');
        setChannelPrivate(privateCircle || false);
        setChannelDescription(description || '');
        setChannelDefault(defaultCircle || false);
        setChannelFileData(files?.[0]?.file);
      },
    },
  );

  const onPictureClick = async () => {
    const widget = getWidget((uploadedObject) => {
      if (uploadedObject) {
        setChannelFileData(convertCloudinaryFileToHasuraFile(uploadedObject));
        widget.close();
      }
    }, {
      resourceType: 'image',
      uploadPreset: UploadPresets.Chat,
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
          placeholder="Type circle title"
          onChange={e => setChannelName(e.target.value.slice(0, 100))}
          value={channelName}
        />
        <StyledImageContainer>
          <UploadWidgetLoader />
          {channelFileData?.path && (
            <StyledCloudinaryImage alt="profile_image" publicId={channelFileData?.path}>
              <Transformation quality="auto" />
            </StyledCloudinaryImage>
          )}
          <StyledUploadButton type="tertiary" onClick={onPictureClick}>
            <StyledPictureIcon />
            {channelFileData?.path ? 'Change photo' : 'Upload photo'}
          </StyledUploadButton>
        </StyledImageContainer>
        <StyledLabel>
          <span>
            Description
          </span>
          <StyledTextarea
            rows={10}
            onChange={e => setChannelDescription(e.target.value.slice(0, 300))}
            value={channelDescription}
          />
        </StyledLabel>
        <StyledCheckboxContainer>
          <StyledCheckbox
            id="private-channel"
            type="checkbox"
            checked={channelPrivate}
            onChange={e => setChannelPrivate(e.target.checked)}
          />
          <StyledLabel htmlFor="private-channel">
            Make private
          </StyledLabel>
        </StyledCheckboxContainer>
        <StyledCheckboxContainer>
          <StyledCheckbox
            id="default-channel"
            type="checkbox"
            checked={channelDefault}
            onChange={e => setChannelDefault(e.target.checked)}
          />
          <StyledLabel htmlFor="default-channel">
            Set as default circle
          </StyledLabel>
        </StyledCheckboxContainer>
      </div>
      <ChannelFormButtons
        channelId={channelId}
        channelName={channelName}
        channelDescription={channelDescription}
        channelDefault={channelDefault}
        channelPrivate={channelPrivate}
        channelFileData={channelFileData}
        closeModal={closeModal}
      />
    </StyledContainer>
  );
};

export default ChannelForm;
