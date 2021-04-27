import { Video, Image } from 'cloudinary-react';
import { File } from 'generated/graphql';
import React from 'react';

type Props = {
  className?: string;
  source: File | null;
  sourceType?: 'other' | 'cloudinary';
};

const ImageOrVideo: React.FunctionComponent<Props> = ({
  children,
  className,
  source,
  sourceType = 'cloudinary',
}) => {
  // TODO(Howard): add non-cloudinary case
  if (!source || sourceType !== 'cloudinary') {
    return null;
  }

  return source?.mimeType?.toLowerCase().includes('video')
    ? (
      <Video
        className={className}
        publicId={`${source?.path || ''}.jpg`}
        resourceType="video"
        alt="vibely_video"
        fallbackContent="Your browser does not support HTML5 video tags."
      >
        {/* Only show video thumbnail for now. TODO(Howard): build video playback */}
        {children}
      </Video>
    ) : (
      <Image
        className={className}
        publicId={source?.path || ''}
        alt="vibely_image"
      >
        {children}
      </Image>
    );
};

export default ImageOrVideo;
