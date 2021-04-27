/* eslint-disable no-underscore-dangle */
import { gql, useQuery } from '@apollo/client';
import React from 'react';
import {
  SettingsGetChallengeByIdQuery,
  SettingsGetChallengeByIdQueryVariables,
  SettingsGetGroupChallengeSeriesQuery,
  SettingsGetGroupChallengeSeriesQueryVariables,
} from 'generated/graphql';
import styled, { CSSObject } from 'styled-components';
import { Transformation, Image } from 'cloudinary-react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

import LoadingIndicator from 'components/LoadingIndicator';
import { fontStyles } from 'utils/style';
import ChallengeFormButtons from 'Routes/Fam/Settings/Challenges/ChallengeList/FormButtons';
import UploadWidgetLoader, { getWidget } from 'components/media/UploadWidgetLoader';
import { ReactComponent as PictureIcon } from 'assets/svg/picture.svg';
import Button from 'components/buttons/Button';
import { convertCloudinaryFileToHasuraFile, HasuraFile, UploadPresets } from 'clients/cloudinary';
import dayjs from 'dayjs';
import { RouteComponentProps, withRouter } from 'react-router';
import Countdown from 'components/time/Countdown';

const StyledContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '48px 32px 24px',
  flex: 1,
});

const StyledLoadingContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

const inputStyles: CSSObject = {
  ...fontStyles.body,
  background: '#FAFAFA',
  border: '1px solid #F0F0F0',
  boxSizing: 'border-box',
  padding: '8px 12px',
  borderRadius: 6,
  marginTop: 6,
  marginBottom: 18,
};

const StyledTitleInput = styled.input({
  ...inputStyles,
  ...fontStyles.h4,
  padding: 12,
  width: '100%',
  marginBottom: 12,
});

const StyledTextarea = styled.textarea({
  ...inputStyles,
});

const StyledInput = styled.input({
  ...inputStyles,
});

const StyledSelect = styled.select({
  ...inputStyles,
});

const StyledCheckbox = styled.input({
  marginRight: 8,
});

const StyledCheckboxContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const StyledLabel = styled.label({
  ...fontStyles.small,
  color: '#333333',
  fontWeight: 800,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const StyledColumnContainer = styled.div({
  flex: '1',
  display: 'flex',
});

const StyledLeftColumn = styled.div({
  width: '40%',
});

const StyledRightColumn = styled.div({
  flex: 1,
  paddingLeft: 24,
});

const StyledCountdownContainer = styled(Countdown)({
  display: 'flex',
  textAlign: 'center',
  marginBottom: 24,
});

const StyledImageContainer = styled.div({
  backgroundColor: '#FAFAFA',
  width: '100%',
  height: '100%',
  maxHeight: 160,
  marginBottom: 20,
  borderRadius: 4,
  overflow: 'hidden',
  position: 'relative',
});

const StyledUploadButton = styled(Button)({
  position: 'absolute',
  top: '50%',
  left: '15%',
  right: '15%',
  transform: 'translate(0%,-50%)',
  display: 'flex',
  alignItems: 'center',
});

const StyledPictureIcon = styled(PictureIcon)({
  width: 16,
  height: 16,
  marginRight: 8,
  color: '#40D5A0',
});

const StyledCloudinaryImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

const GetGroupChallengeSeriesQuery = gql`
  query SettingsGetGroupChallengeSeries($alphaName: String!) {
    details: group_(where: {alphaName: {_eq: $alphaName}}) {
      challengeGroup {
        challenge_series(order_by: {createdAt: desc}) {
          id
          title
        }
      }
    }
  }
`;

const GetChallengeByIdQuery = gql`
  query SettingsGetChallengeById($uuid: uuid!) {
    challenge: challenge_by_pk(id: $uuid) {
      id
      title
      description
      prize
      createdAt
      endAt
      challenge_series_challenges {
        challengeSeriesId
      }
      files {
        file {
          id
          path
        }
      }
    }
  }
`;

type PathParamsType = {
  famAlphaName: string;
}

type Props = RouteComponentProps<PathParamsType> & {
  challengeId?: string;
  challengeSeriesId?: string;
  challengeSeries?: Array<{id: string, title: string}>;
  closeModal: (shouldRefetch?: boolean) => void;
}

const ChallengeForm: React.FunctionComponent<Props> = ({
  challengeId, challengeSeriesId, closeModal, match,
}) => {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [prize, setPrize] = React.useState('');
  const [startAt, setStartAt] = React.useState((new Date()).toUTCString());
  const [endAt, setEndAt] = React.useState('');
  const [file, setFile] = React.useState<HasuraFile>();
  const [createChannel, setCreateChannel] = React.useState(false);
  const [newChallengeSeriesId, setNewChallengeSeriesId] = React.useState<string>();
  const onPictureClick = async () => {
    const widget = getWidget((uploadedObject) => {
      if (uploadedObject) {
        setFile({ id: file?.id, ...convertCloudinaryFileToHasuraFile(uploadedObject) });
        widget.close();
      }
    }, {
      resourceType: 'image',
      uploadPreset: UploadPresets.Challenge,
    });
    widget.open();
  };
  const { data } = useQuery<SettingsGetGroupChallengeSeriesQuery, SettingsGetGroupChallengeSeriesQueryVariables>(
    GetGroupChallengeSeriesQuery, {
      variables: {
        alphaName: match.params.famAlphaName,
      },
    },
  );
  const { loading } = useQuery<SettingsGetChallengeByIdQuery, SettingsGetChallengeByIdQueryVariables>(
    GetChallengeByIdQuery, {
      variables: {
        uuid: challengeId,
      },
      skip: !challengeId,
      onCompleted: response => {
        const {
          title: challengeTitle,
          description: challengeDescription,
          prize: challengePrize,
          createdAt: challengeStartAt,
          endAt: challengeEndAt,
          files: challengeFiles,
          challenge_series_challenges: challengeSeriesArr,
        } = response?.challenge || {};
        setTitle(challengeTitle || '');
        setDescription(challengeDescription || '');
        setPrize(challengePrize || '');
        setStartAt(challengeStartAt || '');
        setEndAt(challengeEndAt || '');
        setFile(challengeFiles?.[0]?.file);
        setNewChallengeSeriesId(challengeSeriesArr?.[0]?.challengeSeriesId);
      },
    },
  );

  if (loading) {
    return (
      <StyledLoadingContainer>
        <LoadingIndicator />
      </StyledLoadingContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledTitleInput
        placeholder="Type challenge title"
        onChange={e => setTitle(e.target.value.slice(0, 100))}
        value={title}
      />
      <StyledColumnContainer>
        <StyledLeftColumn>
          <StyledImageContainer>
            <UploadWidgetLoader />
            {file?.path && (
              <StyledCloudinaryImage alt="profile_image" publicId={file?.path}>
                <Transformation quality="auto" />
              </StyledCloudinaryImage>
            )}
            <StyledUploadButton type="tertiary" onClick={onPictureClick}>
              <StyledPictureIcon />
              {file?.path ? 'Change photo' : 'Upload photo'}
            </StyledUploadButton>
          </StyledImageContainer>
          <StyledLabel>
            <div>
              Description
            </div>
            <StyledTextarea
              placeholder="What is this challenge about?"
              rows={10}
              onChange={e => setDescription(e.target.value.slice(0, 300))}
              value={description}
            />
          </StyledLabel>
        </StyledLeftColumn>
        <StyledRightColumn>
          <StyledCountdownContainer endDate={endAt} />
          <StyledLabel>
            <div>
              Start date
            </div>
            <Datetime
              value={new Date(startAt)}
              inputProps={{
                disabled: true,
                style: { ...inputStyles, width: '100%' },
                placeholder: 'Select start date',
              }}
              timeConstraints={{ minutes: { min: 0, max: 59, step: 15 } }}
            />
          </StyledLabel>
          <StyledLabel>
            <div>
              End date
            </div>
            <Datetime
              value={new Date(endAt)}
              onChange={m => typeof m !== 'string' && setEndAt(m.format())}
              inputProps={{ style: { ...inputStyles, width: '100%' }, placeholder: 'Select end date' }}
              isValidDate={(currentDate: Date) => dayjs(startAt).isBefore(dayjs(currentDate))}
              timeConstraints={{ minutes: { min: 0, max: 59, step: 15 } }}
            />
          </StyledLabel>
          <StyledLabel>
            <div>
              Prize
            </div>
            <StyledInput
              placeholder="What is the reward?"
              onChange={e => setPrize(e.target.value.slice(0, 100))}
              value={prize}
            />
          </StyledLabel>
          <StyledLabel>
            <div>
              Select series for this challenge
            </div>
            <StyledSelect
              disabled={!data?.details?.[0].challengeGroup?.challenge_series.length}
              value={newChallengeSeriesId}
              onChange={e => setNewChallengeSeriesId(e.target.value)}
            >
              <option value="">-- Select --</option>
              {(data?.details?.[0]?.challengeGroup?.challenge_series || []).map(s => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </StyledSelect>
          </StyledLabel>
          {!challengeId && (
            <StyledCheckboxContainer>
              <StyledCheckbox
                id="create-channel"
                type="checkbox"
                value="true"
                onChange={e => setCreateChannel(e.target.checked)}
              />
              <StyledLabel htmlFor="create-channel">
                Create a circle for this challenge
              </StyledLabel>
            </StyledCheckboxContainer>
          )}
        </StyledRightColumn>
      </StyledColumnContainer>
      <ChallengeFormButtons
        challengeSeriesId={challengeSeriesId}
        newChallengeSeriesId={newChallengeSeriesId}
        challengeId={challengeId}
        challengeTitle={title}
        challengeDescription={description}
        challengePrize={prize}
        challengeEndAt={endAt}
        challengeFile={file}
        createChannel={createChannel}
        closeModal={closeModal}
      />
    </StyledContainer>
  );
};

export default withRouter(ChallengeForm);
