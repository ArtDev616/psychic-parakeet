import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { FamGetChallengeEntryDetailsQuery, FamGetChallengeEntryDetailsQueryVariables, File } from 'generated/graphql';
import styled from 'styled-components';
import ProfileImage from 'components/user/ProfileImage';
import { fontStyles } from 'utils/style';
import ImageOrVideo from 'components/media/ImageOrVideo';
import Footer from './Footer';

export const Fragments = {
  FamChallengeEntryDetails: gql`
    fragment famChallengeEntryDetails on challenge_entry {
      id
      createdAt
      completedAt
      text
      files {
        file {
          id
          path
          mimeType
        }
      }
      user: user_ {
        id
        firstName
        lastName
        photos
      }
    }
  `,
};

export const FamGetChallengeEntryDetails = gql`
  query FamGetChallengeEntryDetails($challengeEntryId: uuid!) {
    challengeEntry: challenge_entry_by_pk(id: $challengeEntryId) {
      ...famChallengeEntryDetails
    }
  }
  ${Fragments.FamChallengeEntryDetails}
`;

// Styled components
const StyledGridContainer = styled.div({
  display: 'inline-block',
  width: '100%',
  cursor: 'pointer',
  backgroundColor: '#FFFFFF',
  textDecoration: 'none',
  borderRadius: 24,
  transition: '0.2s',
  marginBottom: 28,
  ':hover': {
    boxShadow: '4px 4px 24px #0000001F',
    WebkitBoxShadow: '4px 4px 24px #0000001F',
  },
});

const StyledHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 16px 0',
});

const StyledMediaContainer = styled.div({
  marginTop: 12,
  overflow: 'hidden',
});

const StyledMedia = styled(ImageOrVideo)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const StyledProfile = styled(ProfileImage)({
  borderColor: '#1114561F',
});

const StyledNameContainer = styled.div({
  marginLeft: 8,
});

const StyledName = styled.div({
  ...fontStyles.small,
  color: '#000000',
  fontWeight: 800,
});

const StyledCaption = styled.p({
  ...fontStyles.cardsBody,
  padding: '12px 16px 0',
});

type Props = {
  showPreviewModal: (challengeEntryId: string) => void;
  challengeEntryId: string;
};

const FamChallengeEntriesGridListItem: React.FunctionComponent<Props> = ({ challengeEntryId, showPreviewModal }) => {
  const { data } = useQuery<FamGetChallengeEntryDetailsQuery, FamGetChallengeEntryDetailsQueryVariables>(
    FamGetChallengeEntryDetails, {
      variables: {
        challengeEntryId,
      },
    },
  );

  const challengeEntry = data?.challengeEntry;
  const entryUser = challengeEntry?.user;
  const image = challengeEntry?.files?.length ? challengeEntry?.files[0]?.file || null : null;

  const showPreview = () => showPreviewModal(challengeEntryId);

  if (!challengeEntry) {
    return null;
  }

  return (
    <StyledGridContainer>
      <StyledHeader onClick={showPreview}>
        <StyledProfile
          size={24}
          borderSize={2}
          path={entryUser?.photos?.length ? entryUser.photos[0]?.id || null : null}
        />
        <StyledNameContainer>
          <StyledName>{`${entryUser?.firstName} ${entryUser?.lastName}`}</StyledName>
        </StyledNameContainer>
      </StyledHeader>
      {Boolean(image?.path) && (
        <StyledMediaContainer onClick={showPreview}>
          <StyledMedia source={image as File} />
        </StyledMediaContainer>
      )}
      {Boolean(challengeEntry?.text) && <StyledCaption onClick={showPreview}>{challengeEntry?.text}</StyledCaption>}
      <Footer challengeEntryId={challengeEntryId} showPreview={showPreview} />
    </StyledGridContainer>
  );
};

export default FamChallengeEntriesGridListItem;
