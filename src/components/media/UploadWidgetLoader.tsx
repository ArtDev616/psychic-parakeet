import { CLOUD_NAME, FileResponse, UploadPresets } from 'clients/cloudinary';
import useScript from 'hooks/useScript';
import React from 'react';

type Widget = { open: () => void; close: () => void };

type SourceType = 'local' | 'camera' | 'url' | 'facebook' | 'instagram' | 'google_drive' | 'image_search' | 'dropbox';

type WidgetInput = {
  uploadPreset?: UploadPresets;
  resourceType?: 'image' | 'video' | 'auto' | 'raw';
  cropping?: boolean;
  sources?: SourceType[];
};

export const getWidget = (onSuccess: (response?: FileResponse) => void, options?: WidgetInput): Widget => {
  // @ts-ignore
  return window.cloudinary.createUploadWidget(
    {
      cloudName: CLOUD_NAME,
      uploadPreset: UploadPresets.Vibely,
      sources: ['local', 'camera', 'url', 'facebook', 'instagram'],
      multiple: false,
      maxFiles: 1,
      resourceType: 'image',
      cropping: false,
      eager: 'q_auto,f_auto',
      apiKey: process.env.REACT_APP_CLOUDINARY_API_KEY,
      ...options,
    },
    (error: Error, result: { event: string; info: FileResponse }) => {
      if (error) {
        onSuccess();
      } else if (result && result.event === 'success') {
        onSuccess(result.info);
      }
    },
  );
};

const UploadWidgetLoader: React.FunctionComponent<Record<string, never>> = () => (
  <>{useScript('https://widget.cloudinary.com/v2.0/global/all.js')}</>
);

export default UploadWidgetLoader;
