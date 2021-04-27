import { FullFileType } from 'clients/cloudinary';
import challenges from './challenges';

export type Challenge = {
  title: string;
  description: string;
  image: string;
  file: FullFileType
}

export type ChallengeCategory = keyof typeof challenges;
