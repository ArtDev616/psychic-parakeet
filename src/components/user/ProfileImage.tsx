import { DefaultPhotos } from 'clients/cloudinary';
import { Transformation, Image } from 'cloudinary-react';
import React from 'react';
import styled from 'styled-components';

type Props = {
  className?: string;
  size?: number;
  path?: string;
  gravity?: string | null;
  borderSize?: number;
  sourceType?: 'other' | 'cloudinary';
  onClick?: () => void;
};

const StyledContainer = styled.div<{ size: number; borderSize: number }>(props => ({
  display: 'block',
  cursor: 'pointer',
  width: props.size,
  height: props.size,
  borderRadius: '100%',
  flexShrink: 0,
  flexGrow: 0,
  borderWidth: props.borderSize,
  borderStyle: 'solid',
  borderColor: '#FFFFFF',
  backgroundColor: '#FFFFFF',
  overflow: 'hidden',
}));

const StyledCloudinaryImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const StyledImage = styled.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const ProfileImage: React.FunctionComponent<Props> = ({
  className,
  size = 30,
  gravity = 'face',
  borderSize = 0,
  path: propsPath,
  sourceType = 'cloudinary',
  onClick = () => {},
}) => {
  // TODO(Howard): Add later
  // useQuery(getUserProfilePhoto, variables: { userId }, skip: !userId)

  const path = !propsPath ? DefaultPhotos.defaultProfile : propsPath;

  return (
    <StyledContainer onClick={onClick} borderSize={borderSize} size={size} className={className}>
      {sourceType === 'cloudinary' ? (
        <StyledCloudinaryImage alt="profile_image" publicId={path}>
          <Transformation
            quality="80"
            fetchFormat="auto"
            gravity={gravity}
            crop="thumb"
            width={size * 2}
            height={size * 2}
          />
        </StyledCloudinaryImage>
      ) : (
        <StyledImage alt="profile_image" src={path} />
      )}
    </StyledContainer>
  );
};

export default ProfileImage;
