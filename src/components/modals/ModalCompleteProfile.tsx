import React, { useContext } from 'react';
import styled from 'styled-components';
import { Image, Transformation } from 'cloudinary-react';
import { gql, useMutation } from '@apollo/client';

import UploadWidgetLoader, { getWidget } from 'components/media/UploadWidgetLoader';
import Input from 'components/Input';
import Button from 'components/buttons/Button';
import { convertCloudinaryFileToHasuraFile, HasuraFile } from 'clients/cloudinary';
import { ModalUpdateUserDetailsMutation, ModalUpdateUserDetailsMutationVariables } from 'generated/graphql';
import { UserContext } from 'contexts/user';
import { logEvent } from 'clients/amplitude';

export const UpdateUserDetailsMutation = gql`
  mutation ModalUpdateUserDetails($userId: uuid!, $data: user__set_input!) {
    updatedUser: update_user__by_pk(pk_columns: { id: $userId }, _set: $data) {
      id
      firstName
      lastName
      photos
    }
  }
`;

const StyledContainer = styled.div({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  alignItems: 'center',
  padding: 32,
});

const StyledButtonContainer = styled.div({
  width: '100%',
});

const StyledButton = styled(Button)({
  flex: 1,
  padding: 12,
  marginTop: 24,
});

const StyledImageContainer = styled.div({
  backgroundColor: '#FAFAFA',
  width: 200,
  height: 200,
  marginBottom: 20,
  borderRadius: '100%',
  overflow: 'hidden',
  position: 'relative',
  border: '3px dashed #DBEAEA',
});

const StyledUploadButton = styled(Button)({
  position: 'absolute',
  top: '50%',
  left: '10%',
  right: '10%',
  transform: 'translate(0%,-50%)',
  display: 'flex',
  alignItems: 'center',
  padding: '6px 0',
});

const StyledCloudinaryImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ModalCompleteProfile: React.FunctionComponent<Record<string, never>> = () => {
  const { user } = useContext(UserContext);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [fileData, setFileData] = React.useState<HasuraFile>();
  const [photos, setPhotos] = React.useState<Array<{id: string, type: string}>>();
  const [updateUserDetails] = useMutation<ModalUpdateUserDetailsMutation, ModalUpdateUserDetailsMutationVariables>(
    UpdateUserDetailsMutation, {
      variables: {
        userId: user?.id,
        data: {
          firstName,
          lastName,
          photos,
        },
      },
    },
  );
  const canSubmit = firstName.length > 1 && lastName.length > 1 && fileData;
  const onPictureClick = async () => {
    const widget = getWidget((uploadedObject) => {
      if (uploadedObject) {
        setFileData(convertCloudinaryFileToHasuraFile(uploadedObject));
        setPhotos([{ id: uploadedObject.public_id, type: 'cloudinary' }]);
        widget.close();
      }
    });
    widget.open();
  };
  const onSaveClick = async () => {
    await updateUserDetails();
    // TODO(selmank): dont reload, make sure gql cache is updated with the latest values and modal disappears
    logEvent('Fam Modal', 'Complete profile - fields updated', undefined, () => {
      window.location.reload();
    });
  };

  return (
    <StyledContainer>
      <StyledImageContainer>
        <UploadWidgetLoader />
        {fileData?.path && (
          <StyledCloudinaryImage alt="profile_image" publicId={fileData?.path}>
            <Transformation quality="auto" />
          </StyledCloudinaryImage>
        )}
        <StyledUploadButton type="tertiary" onClick={onPictureClick}>
          {fileData?.path ? 'Change photo' : 'Upload profile photo'}
        </StyledUploadButton>
      </StyledImageContainer>
      <Input label="First name" placeholder="Type your first name" onChange={v => setFirstName(v)} />
      <Input label="Last name" placeholder="Type your last name" onChange={v => setLastName(v)} />
      <StyledButtonContainer>
        <StyledButton
          className="ga-complete-profile"
          type="secondary"
          disabled={!canSubmit}
          onClick={onSaveClick}
        >
          Save

        </StyledButton>
      </StyledButtonContainer>
    </StyledContainer>
  );
};

export default ModalCompleteProfile;
