import svg from 'assets/svg';
import { logEvent } from 'clients/amplitude';
import UploadWidgetLoader, { getWidget } from 'components/media/UploadWidgetLoader';
import { UserContext } from 'contexts/user';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import withAuth from 'components/hoc/withAuth';
import ProfileImage from 'components/user/ProfileImage';
import { breakpoints } from 'utils/style';
import Step1Buttons from 'Routes/CreateFam/Step1User/buttons';
import { UploadPresets } from 'clients/cloudinary';

const PICTURE_SIZE = 140;

const StyledLoading = styled.div({
  height: 300,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const StyledContainer = styled.div({
  width: '100%',
  minHeight: 460,
  padding: '48px 0',
  maxWidth: 1080,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  [breakpoints.md.css]: {
    minHeight: 'initial',
  },
});

const StyledProfilePicture = styled.div({
  width: PICTURE_SIZE,
  height: PICTURE_SIZE,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '8px solid #FFFFFF',
  borderRadius: '100%',
  overflow: 'hidden',
  marginTop: 20,
  marginBottom: 32,
  background: 'linear-gradient(90deg, #40D5A0 0%, #3BB6B5 102.2%), #C4C4C4',
  cursor: 'pointer',
  [breakpoints.md.css]: {
    marginTop: 0,
  },
});

const StyledProfilePictureUpload = styled.span({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'stolzl-book',
  fontSize: 14,
  color: '#FFFFFF',
});

const StyledPhotoIcon = styled.img({
  width: 24,
  height: 24,
  marginBottom: 8,
});

const StyledInputs = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

// @ts-ignore
const StyledInput = styled.input<{marginBottom?: boolean}>((props) => ({
  width: '100%',
  borderRadius: 40,
  padding: '12px 24px',
  marginBottom: props.marginBottom ? 40 : 0,
  marginTop: 20,
  fontSize: 16,
  fontFamily: 'stolzl-book',
  border: '1px solid #E5E5E5',
  boxSizing: 'border-box',
  textAlign: 'center',
  ':focus': {
    borderColor: '#03004E',
  },
}));

const StyledLabel = styled.label({
  fontFamily: 'stolzl-bold',
  fontWeight: 'bold',
  fontSize: 24,
  color: '#03004E',
  textAlign: 'center',
});

const StyledImage = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const CreateFamUser: React.FunctionComponent<Record<string, never>> = () => {
  const { auth0User } = useContext(UserContext);
  const history = useHistory();
  const {
    firstName: initialFirstName, lastName: initialLastName, email: initialEmail, picture: initialPicture,
  } = history.location.state as any || {};
  const [firstName, setFirstName] = React.useState(initialFirstName || auth0User?.given_name || '');
  const [lastName, setLastName] = React.useState(initialLastName || auth0User?.family_name || '');
  const [picture, setPicture] = React.useState(initialPicture || auth0User?.picture || '');
  const [cloudinaryPublicId, setCloudinaryPublicId] = React.useState<string | undefined>();
  const email = initialEmail || auth0User?.email;
  const onPictureClick = async () => {
    const widget = getWidget((uploadedObject) => {
      if (uploadedObject) {
        logEvent('Create Fam', 'uploaded profile picture');
        setPicture(uploadedObject?.url);
        setCloudinaryPublicId(uploadedObject?.public_id);
        widget.close();
      }
    }, {
      resourceType: 'image',
      uploadPreset: UploadPresets.UserProfile,
    });
    widget.open();
  };

  React.useEffect(() => {
    logEvent('Create Fam', 'started');
  }, []);

  if (!auth0User) {
    return <StyledLoading />;
  }

  return (
    <>
      <StyledContainer>
        <UploadWidgetLoader />
        <StyledProfilePicture onClick={onPictureClick}>
          {!picture ? (
            <StyledProfilePictureUpload>
              <StyledPhotoIcon src={svg.photo} />
              <span>Upload a photo</span>
            </StyledProfilePictureUpload>
          ) : typeof picture === 'string' ? (
            <StyledImage src={picture} alt="profile" />
          ) : (
            <ProfileImage size={PICTURE_SIZE} path={picture.public_id} />
          )}
        </StyledProfilePicture>
        <StyledInputs>
          <StyledLabel>
            <span>
              First Name
            </span>
            <StyledInput
              marginBottom
              onChange={(e) => setFirstName(e.target.value)}
              defaultValue={firstName}
              placeholder="Your first name"
            />
          </StyledLabel>
          <StyledLabel>
            <span>
              Last Name
            </span>
            <StyledInput
              onChange={(e) => setLastName(e.target.value)}
              defaultValue={lastName}
              placeholder="Your last name"
            />
          </StyledLabel>
        </StyledInputs>
      </StyledContainer>
      <Step1Buttons
        userId={auth0User.hasuraUserId}
        firstName={firstName}
        lastName={lastName}
        email={email}
        cloudinaryPublicId={cloudinaryPublicId}
        picture={picture}
      />
    </>
  );
};

export default withAuth(CreateFamUser, true);
