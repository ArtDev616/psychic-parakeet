import React from 'react';
import Modal from 'components/modals/Modal';
import ImageOrVideo from 'components/media/ImageOrVideo';
import ProfileImage from 'components/user/ProfileImage';
import styled from 'styled-components';
import { fontStyles } from 'utils/style';
import EntryFooter from 'Routes/Fam/ChallengeEntries/GridListItem/Footer';
import { FamGetChallengeEntryDetails } from 'Routes/Fam/ChallengeEntries/GridListItem';
import { useQuery } from '@apollo/client';
import { FamGetChallengeEntryDetailsQuery, FamGetChallengeEntryDetailsQueryVariables, File } from 'generated/graphql';
import { CLOUDINARY_RES_URL } from 'clients/cloudinary';

const StyledHeader = styled.div({
  display: 'flex',
  alignItems: 'center',
  padding: '12px 16px 0',
});

const StyledMediaContainer = styled.a({
  display: 'flex',
  justifyContent: 'center',
  height: '50vh',
  marginTop: 12,
  overflow: 'hidden',
  cursor: 'pointer',
});

const StyledMedia = styled(ImageOrVideo)({
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
  challengeEntryId: string;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const FamEntryPreviewModal: React.FunctionComponent<Props> = ({
  challengeEntryId,
  isModalVisible,
  setIsModalVisible,
}) => {
  const hideModal = () => setIsModalVisible(false);
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

  return (
    <Modal
      isModalVisible={isModalVisible}
      hide={hideModal}
      styleOverrides={{
        body: {
          minHeight: 'auto',
          maxHeight: '90%',
          overflow: 'auto',
        },
        center: {
          flexDirection: 'column',
          position: 'relative',
        },
      }}
    >
      <StyledHeader>
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
        <StyledMediaContainer href={`${CLOUDINARY_RES_URL}/${image?.path || ''}.jpg`}>
          <StyledMedia source={image as File} />
        </StyledMediaContainer>
      )}
      {Boolean(challengeEntry?.text) && <StyledCaption>{challengeEntry?.text}</StyledCaption>}
      <EntryFooter challengeEntryId={challengeEntryId} />
    </Modal>
  );
};

export default FamEntryPreviewModal;
