export type AnnouncementHistoryObject = {
  [famAlphaName: string]: string;
};

export const LATEST_FAM_ANNOUNCEMENTS_SEEN_KEY = 'LATEST_FAM_ANNOUNCEMENTS_SEEN';

export const getFamAnnouncementSeenHistory = (): AnnouncementHistoryObject => {
  return JSON.parse(localStorage.getItem(LATEST_FAM_ANNOUNCEMENTS_SEEN_KEY) || '{}');
};

export const setLastAnnouncementSeen = (announcementId: string | undefined, famAlphaName: string | undefined): void => {
  if (!announcementId || !famAlphaName) {
    return;
  }

  const famAnnouncementSeenHistory = getFamAnnouncementSeenHistory();
  const newHistory: AnnouncementHistoryObject = { ...famAnnouncementSeenHistory, [famAlphaName]: announcementId };
  localStorage.setItem(LATEST_FAM_ANNOUNCEMENTS_SEEN_KEY, JSON.stringify(newHistory));
};
