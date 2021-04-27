import { gql, useMutation } from '@apollo/client';
import { useParams } from 'react-router';
import svg from 'assets/svg';
import { logEvent } from 'clients/amplitude';
import { convertCloudinaryFileToHasuraFile, HasuraFile, UploadPresets } from 'clients/cloudinary';
import Button from 'components/buttons/Button';
import ImageOrVideo from 'components/media/ImageOrVideo';
import UploadWidgetLoader, { getWidget } from 'components/media/UploadWidgetLoader';
import Modal from 'components/modals/Modal';
import { UserContext } from 'contexts/user';
import {
  CompleteChallengeEntryMutation,
  CompleteChallengeEntryMutationVariables,
  CreateChallengeEntryFilesMutation,
  CreateChallengeEntryFilesMutationVariables,
  File,
} from 'generated/graphql';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { breakpoints, fontStyles } from 'utils/style';

const CompleteChallengeEntry = gql`
  mutation CompleteChallengeEntry($challengeId: uuid!, $userId: uuid!, $text: String) {
    challengeEntry: update_challenge_entry(
      where: { _and: [{ challengeId: { _eq: $challengeId } }, { userId: { _eq: $userId } }] }
      _set: { text: $text, completedAt: "now()" }
    ) {
      returning {
        id
      }
    }
  }
`;

// Create entry file
const CreateChallengeEntryFiles = gql`
  mutation CreateChallengeEntryFiles($challengeEntryFiles: [challenge_entry_file_insert_input!]!) {
    files: insert_challenge_entry_file(
      objects: $challengeEntryFiles
      on_conflict: { constraint: challenge_entry_file_pkey, update_columns: [fileId] }
    ) {
      returning {
        challengeEntryId
      }
    }
  }
`;

const StyledBackgroundImage = styled.img({
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
});

const StyledCameraImage = styled.img({
  paddingBottom: 8,
});

const StyledContentContainer = styled.div({
  position: 'absolute',
  right: 0,
  left: 0,
  top: 0,
  height: '100%',
  padding: '84px 24px 28px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledTitle = styled.h1({
  ...fontStyles.h1,
  textAlign: 'center',
  [breakpoints.xs.css]: {
    ...fontStyles.h3,
    fontWeight: 800,
  },
});

const StyledSubtitle = styled.h5({
  ...fontStyles.h5,
  marginTop: 12,
  textAlign: 'center',
  [breakpoints.xs.css]: {
    fontSize: 12,
    marginTop: 8,
  },
});

const StyledUploadContainer = styled.div({
  cursor: 'pointer',
  backgroundColor: '#EEF6F6',
  margin: '28px 0 16px',
  borderRadius: 8,
  width: '48%',
  padding: '56px 12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
  [breakpoints.md.css]: {
    width: '56%',
  },
  [breakpoints.xs.css]: {
    width: '80%',
  },
});

const StyledMediaContainer = styled(StyledUploadContainer)({
  padding: 0,
});

const StyledMedia = styled(ImageOrVideo)({
  borderRadius: 12,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const StyledUploadText = styled.h6({
  ...fontStyles.h6,
  textAlign: 'center',
});

const StyledInputContainer = styled.textarea({
  ...fontStyles.body,
  boxSizing: 'border-box',
  backgroundColor: '#FCFCFC',
  borderRadius: 8,
  width: '52%',
  padding: '12px',
  border: '1px solid #1114561F',
  [breakpoints.md.css]: {
    width: '60%',
  },
  [breakpoints.xs.css]: {
    width: '88%',
  },
});

const StyledButtonsRow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 28,
  [breakpoints.xs.css]: {
    flexDirection: 'column',
  },
});

const StyledButton = styled(Button)({
  padding: '8px 28px',
  margin: '0px 8px',
  textAlign: 'center',
  [breakpoints.xs.css]: {
    margin: '8px 0',
  },
});

const StyledIcon = styled.img({
  paddingRight: 8,
});

type Props = {
  challengeId: string;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

type PathParamsType = { famAlphaName: string };

const FamSubmitEntryModal: React.FunctionComponent<Props> = ({ challengeId, isModalVisible, setIsModalVisible }) => {
  const { famAlphaName } = useParams<PathParamsType>();
  const [caption, setCaption] = useState<string>('');
  const [file, setFile] = useState<HasuraFile | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const { user } = useContext(UserContext);
  const [completeChallenge] = useMutation<CompleteChallengeEntryMutation,
    CompleteChallengeEntryMutationVariables>(CompleteChallengeEntry);
  const [createEntryFiles] = useMutation<CreateChallengeEntryFilesMutation,
    CreateChallengeEntryFilesMutationVariables>(CreateChallengeEntryFiles);

  const hideModal = () => setIsModalVisible(false);

  const uploadFile = () => {
    const widget = getWidget((uploadedFile) => setFile(uploadedFile
      ? convertCloudinaryFileToHasuraFile(uploadedFile) : null), {
      resourceType: 'auto',
      uploadPreset: UploadPresets.ChallengeEntry,
    });
    widget.open();
  };

  const submitEntry = async () => {
    if (!user) return;
    // Prevent double click
    if (submitting) return;
    if (!caption && !file?.path) {
      // eslint-disable-next-line no-alert
      alert('Please provide at least a caption!');
      return;
    }
    if (file && !file.path) {
      // eslint-disable-next-line no-alert
      alert('Something went wrong, try another image or video!');
      return;
    }
    setSubmitting(true);
    try {
      logEvent('Fam Challenge', 'Challenge completed', { famAlphaName, challengeId });
      const res = await completeChallenge({
        variables: {
          userId: user.id,
          challengeId,
          text: caption,
        },
      });
      if (Boolean(file?.path) && res?.data?.challengeEntry?.returning?.length) {
        await createEntryFiles({
          variables: {
            challengeEntryFiles: res.data.challengeEntry.returning.map(r => ({
              challengeEntryId: r.id,
              file: {
                // eslint-disable-next-line camelcase
                data: { ...file, name: file?.name || 'entry_file' },
              },
            })),
          },
        });
      }
      hideModal();
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Oops! Something went wrong, try another image or video!');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal
      isModalVisible={isModalVisible}
      hide={hideModal}
      hideCloseButton
      styleOverrides={{
        body: {
          maxHeight: 670, height: '90%',
        },
      }}
    >
      <StyledBackgroundImage src={svg.confettiBackground} />
      <UploadWidgetLoader />
      <StyledContentContainer>
        <StyledTitle>
          Challenge Accepted
        </StyledTitle>
        <StyledSubtitle>
          Upload your submission now!
        </StyledSubtitle>
        {file?.path
          ? (
            <StyledMediaContainer onClick={uploadFile}>
              <StyledMedia source={file as File} />
            </StyledMediaContainer>
          )
          : (
            <StyledUploadContainer onClick={uploadFile}>
              <StyledCameraImage src={svg.uploadCamera} />
              <StyledUploadText>Upload a Photo or Video</StyledUploadText>
            </StyledUploadContainer>
          )}
        <StyledInputContainer
          rows={8}
          placeholder="Are you feeling inspired? Start typing..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <StyledButtonsRow>
          <StyledButton type="tertiary" onClick={hideModal}>Do this later</StyledButton>
          <StyledButton type={!user ? 'tertiary' : 'secondary'} onClick={submitEntry} disabled={!user}>
            <StyledIcon src={svg.checkmarkWhite} alt="checkmark" />
            Upload now
          </StyledButton>
        </StyledButtonsRow>
      </StyledContentContainer>
    </Modal>
  );
};

export default FamSubmitEntryModal;
