/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_HOST_OVERRIDE: string;
    REACT_APP_AMPLITUDE_KEY: string;
    REACT_APP_AUTH0_CLIENT_ID: string;
    REACT_APP_AUTH0_DOMAIN: string;
    REACT_APP_AUTH0_AUDIENCE: string;
    REACT_APP_HASURA_PROD_ENDPOINT: string;
    REACT_APP_HASURA_LOCAL_ENDPOINT: string;
    REACT_APP_CLOUDINARY_API_KEY: string;
    PORT: number;
  }
}

declare module 'cloudinary-react' {
  export const Image: any;
  export const Video: any;
  export const Transformation: any;
  export const CloudinaryContext: any;
}
