/* eslint-disable import/prefer-default-export */
import amplitudeJs, { Callback } from 'amplitude-js';
import { getUserField, USER_HASURA_ID_KEY } from 'contexts/user';

const eventPrefix = '[Vibely Web V2]';
const amplitude = amplitudeJs.getInstance();
amplitude.init(process.env.REACT_APP_AMPLITUDE_KEY || '');

let isUserSet = false;

export const logEvent = (
  namespace: string,
  event: string,
  data?: { [key: string]: string | number | boolean | null | undefined },
  cb?: Callback,
): void => {
  // Don't log stuff during development
  if (process.env.NODE_ENV !== 'production') {
    if (cb) cb(200, '');
    return;
  }

  // Set the user id once
  if (!isUserSet) {
    const hasuraUserId = getUserField(USER_HASURA_ID_KEY);
    if (hasuraUserId) {
      amplitude.setUserId(hasuraUserId);
      isUserSet = true;
    }
  }

  // Log events to amplitude
  amplitude.logEvent(`${eventPrefix} ${namespace} - ${event}`, data);

  // Invoke callback
  if (cb) setTimeout(cb, 50);
};
