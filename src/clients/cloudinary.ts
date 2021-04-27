/* eslint-disable camelcase, no-shadow */
export const CLOUD_NAME = 'vibely2';
export const CLOUDINARY_API_KEY = process.env.REACT_APP_CLOUDINARY_API_KEY;
export const CLOUDINARY_RES_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;
export const CLOUDINARY_FETCH_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

// Default photos
export const DefaultPhotos = {
  genericFam: 'v1615320991/defaults/generic-group',
  defaultProfile: 'v1615321108/defaults/default-profile-white_h02l9d',
};

// Upload presets
export enum UploadPresets {
  Announcement = 'announcement-uploads',
  Challenge = 'challenge-uploads',
  ChallengeEntry = 'challenge-entry-uploads',
  Chat = 'chat-uploads',
  Event = 'event-uploads',
  Group = 'group-uploads',
  UserProfile = 'user-profile-uploads',
  Vibely = 'vibely-photos',
  ShareCards = 'share-cards',
}

// Hasura file type
export interface FullFileType {
  id?: string;
  extension?: string | null;
  height?: number | null;
  width?: number | null;
  name?: string | null;
  path?: string | null;
  size?: number | null;
  mimeType?: string | null;
}

// Get file response type
export interface FileResponse {
  bytes: number;
  format: string;
  height: number;
  width: number;
  original_filename: string;
  public_id: string;
  resource_type: string;
  secure_url: string;
  thumbnail_url: string;
  url: string;
}

export type HasuraFile = {
  id?: string;
  extension?: string | null;
  height?: number | null;
  width?: number | null;
  name?: string | null;
  path?: string | null;
  size?: number | null;
  mimeType?: string | null;
};

export const uploadImage = async (
  imageUrl: string,
  uploadPreset: UploadPresets = UploadPresets.Vibely,
): Promise<FileResponse> => {
  const formData = new FormData();
  formData.append('file', imageUrl);
  formData.append('upload_preset', uploadPreset);
  const response = await fetch(CLOUDINARY_FETCH_URL, {
    method: 'POST',
    body: formData,
  });
  const data = await response.json();
  return data as FileResponse;
};

export const convertCloudinaryFileToHasuraFile = (fileData: FileResponse): HasuraFile => ({
  extension: fileData.format,
  height: fileData.height,
  mimeType: `${fileData.resource_type}/${fileData.format}`,
  name: fileData.original_filename,
  path: fileData.public_id,
  size: fileData.bytes,
  width: fileData.width,
});
