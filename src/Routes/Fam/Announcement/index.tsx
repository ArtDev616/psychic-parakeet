import { gql, useQuery } from '@apollo/client';
import svg from 'assets/svg';
import {
  PinnedAnnouncementFragment,
  PinnedAnnouncementQueryQuery,
  PinnedAnnouncementQueryQueryVariables,
} from 'generated/graphql';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import {
  getFamAnnouncementSeenHistory,
  setLastAnnouncementSeen,
} from 'Routes/Fam/Announcement/helpers';
import styled from 'styled-components';
import { breakpoints, fontStyles } from 'utils/style';

const Fragments = {
  announcement: gql`
    fragment PinnedAnnouncement on announcement_ {
      id
      name
      text
      subtitle
    }
  `,
};

const PinnedAnnouncementQuery = gql`
  query PinnedAnnouncementQuery($alphaName: String!) {
    groups: group_(where: { alphaName: { _eq: $alphaName } }) {
      id
      pinnedAnnouncement {
        ...PinnedAnnouncement
      }
    }
  }
  ${Fragments.announcement}
`;

// Styled components
const StyledBubbleContainer = styled.div({
  display: 'flex',
  flexShrink: 0,
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',
  borderRadius: 8,
  marginTop: 28,
  marginBottom: 0,
  overflow: 'hidden',
  [breakpoints.md.css]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 0,
    marginBottom: 28,
  },
});

const StyledTextContainer = styled.div({
  display: 'flex',
  flex: 8,
  flexDirection: 'column',
  padding: '16px 20px',
  overflow: 'auto',
});

const StyledTitleContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const StyledSubtitle = styled.p({
  ...fontStyles.body,
  fontWeight: 900,
  color: '#A5A5A5',
  margin: '8px 0',
});

const StyledIcon = styled.img({
  height: 16,
  width: 16,
});

const StyledTitle = styled.h6({
  ...fontStyles.h6,
  marginLeft: 8,
});

const StyledDescription = styled.p({
  ...fontStyles.body,
});

const StyledButton = styled.button({
  ...fontStyles.button,
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  color: '#000000',
  padding: 16,
  backgroundColor: '#FFFFFF',
  borderLeft: '1px solid #0000000A',
  '&:hover': {
    backgroundColor: '#EAEAEA',
  },
  [breakpoints.md.css]: {
    width: '100%',
    borderLeft: 'none',
    borderTop: '1px solid #0000000A',
  },
});

type PathParamsType = { famAlphaName: string };

const FamAnnouncementBubble: React.FunctionComponent<Record<string, never>> = () => {
  const { famAlphaName } = useParams<PathParamsType>();
  const [announcement, setAnnouncement] = useState<PinnedAnnouncementFragment | null>(null);
  const [announcementHidden, setAnnouncementHidden] = useState(true);

  const announcementSeenHistory = getFamAnnouncementSeenHistory();

  useQuery<PinnedAnnouncementQueryQuery, PinnedAnnouncementQueryQueryVariables>(
    PinnedAnnouncementQuery, {
      variables: {
        alphaName: famAlphaName,
      },
      onCompleted: (onCompleteData) => {
        const announcementData = onCompleteData?.groups?.length ? onCompleteData?.groups[0]?.pinnedAnnouncement : null;
        const sameAnnouncement = announcementData && announcementSeenHistory[famAlphaName] === announcementData.id;
        if (Boolean(announcementData?.id) && !sameAnnouncement) {
          setAnnouncement(announcementData || null);
          setAnnouncementHidden(false);
        }
      },
    },
  );

  const setAnnouncementSeen = () => {
    setLastAnnouncementSeen(announcement?.id, famAlphaName);
    setAnnouncementHidden(true);
  };

  if (announcementHidden) {
    return null;
  }

  return (
    <StyledBubbleContainer>
      <StyledTextContainer>
        <StyledTitleContainer>
          <StyledIcon src={svg.announcement} />
          <StyledTitle>
            {announcement?.name}
          </StyledTitle>
        </StyledTitleContainer>
        <StyledSubtitle>
          {announcement?.subtitle}
        </StyledSubtitle>
        <StyledDescription>
          {announcement?.text}
        </StyledDescription>
      </StyledTextContainer>
      <StyledButton onClick={setAnnouncementSeen}>Got it</StyledButton>
    </StyledBubbleContainer>
  );
};

export default FamAnnouncementBubble;
