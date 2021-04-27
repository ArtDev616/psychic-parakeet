/* eslint-disable import/prefer-default-export */
import { RETURN_TO_KEY } from 'components/hoc/withAuth';
import dayjs from 'dayjs';

export const copyToClipboard = (text: string): boolean => {
  if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
    const textarea = document.createElement('textarea');
    textarea.textContent = text;
    textarea.style.position = 'fixed';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      return document.execCommand('copy');
    } catch (ex) {
      return false;
    } finally {
      document.body.removeChild(textarea);
    }
    return true;
  }
  return false;
};

export const getMagicLinkForFam = (alphaName: string): string => `https://join.vibely.io/${alphaName}`;

export const openMagicLink = (alphaName: string | undefined): void => {
  if (alphaName) {
    window.location.href = getMagicLinkForFam(alphaName);
  }
};

export const isMobileDevice = (): boolean => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export const onAuthRedirect = (): void => {
  const returnTo = localStorage.getItem(RETURN_TO_KEY);
  if (isMobileDevice()) {
    const famAlphaName = (returnTo || '').split('/')[3];
    window.location.href = getMagicLinkForFam(famAlphaName);
  } else if (returnTo) {
    window.location.href = returnTo;
  } else {
    window.location.href = 'https://vibely.io';
  }
};

export const getCountdownTimeDifference = (endDate: string): { [interval: string]: number } => {
  const end = (new Date(endDate)).getTime();
  const start = (new Date()).getTime();
  const difference = end - start;

  const timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
  };

  if (difference > 0) {
    timeLeft.days = Math.floor(difference / 86400000);
    timeLeft.hours = Math.floor((difference / 3600000) % 24);
    timeLeft.minutes = Math.floor((difference / 60000) % 60);
  }

  return timeLeft;
};

export const isDateInPast = (start: Date, end: Date): boolean => start.setHours(0, 0, 0, 0) <= end.setHours(0, 0, 0, 0);

export const isUserOnline = (activeAt?: string): boolean => Boolean(
  activeAt && dayjs(dayjs()).diff(activeAt, 'hours') < 8,
);
