import { gql, useMutation } from '@apollo/client';
import { logEvent } from 'clients/amplitude';
import { uploadImage, UploadPresets } from 'clients/cloudinary';
import React from 'react';
import { useHistory } from 'react-router';
import Controls from '../Controls';

const UpsertUserMutation = gql`
  mutation UpsertUserMutation($lastName: String!, $firstName: String!, $photos: jsonb!, $userId: uuid!) {
    update_user__by_pk(
      pk_columns: {id: $userId}, _set: {firstName: $firstName, lastName: $lastName, photos: $photos}
    ) {
      id
    }
  }
`;

type PropsType = {
  firstName: string;
  lastName: string;
  email: string;
  cloudinaryPublicId?: string;
  picture: string;
  userId: string;
}

const Step1Buttons: React.FunctionComponent<PropsType> = ({
  userId, firstName, lastName, email, cloudinaryPublicId, picture,
}) => {
  const history = useHistory();
  const [upsertUser] = useMutation(UpsertUserMutation);
  const onNextClick = async () => {
    try {
      let pictureUrl = picture;
      const upsertUserVariables = {
        userId,
        firstName,
        lastName,
      };

      // Upload profile picture if it is from google etc
      if (cloudinaryPublicId) {
        // @ts-ignore
        upsertUserVariables.photos = [{ id: cloudinaryPublicId, type: 'cloudinary' }];
      } else {
        const cloudinaryImage = await uploadImage(picture, UploadPresets.UserProfile);
        pictureUrl = cloudinaryImage.url;
        // @ts-ignore
        upsertUserVariables.photos = [{ id: cloudinaryImage.public_id, type: 'cloudinary' }];
      }

      // Update user details
      await upsertUser({
        variables: upsertUserVariables,
      });

      // Redirect to the next step
      logEvent('Create Fam', 'navigated to step 2');
      const newState = {
        firstName, lastName, picture: pictureUrl, email,
      };
      history.replace('/create-fam/step-1', newState);
      history.push('/create-fam/step-2', newState);
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Sorry, error occurred. Please try again later.');
    }
  };
  const onBackClick = () => {
    window.location.href = 'https://vibely.io';
  };

  return (
    <Controls
      canContinue={Boolean(firstName?.length > 2 && lastName?.length > 2 && email && picture)}
      onBackClick={onBackClick}
      onNextClick={onNextClick}
    />
  );
};

export default Step1Buttons;
