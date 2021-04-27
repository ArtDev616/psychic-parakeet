/* eslint-disable no-underscore-dangle */
import { gql, useQuery } from '@apollo/client';
import React from 'react';
import {
  SettingsGetChallengeSeriesByIdQuery,
  SettingsGetChallengeSeriesByIdQueryVariables,
} from 'generated/graphql';
import styled, { CSSObject } from 'styled-components';

import LoadingIndicator from 'components/LoadingIndicator';
import { fontStyles } from 'utils/style';
import ChallengeSeriesFormButtons from 'Routes/Fam/Settings/Challenges/SeriesSection/FormButtons';

const StyledContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '24px 32px',
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
  marginBottom: 18,
});

const StyledTextarea = styled.textarea({
  ...inputStyles,
});

const StyledLabel = styled.label({
  ...fontStyles.small,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const GetChallengeSeriesByIdQuery = gql`
  query SettingsGetChallengeSeriesById($uuid: uuid!) {
    challengeSeries: challenge_series_by_pk(id: $uuid) {
      id
      title
      description
    }
  }
`;

type Props = {
  challengeSeriesId?: string;
  closeModal: (shouldRefetch?: boolean) => void;
}

const ChallengeSeriesForm: React.FunctionComponent<Props> = ({ challengeSeriesId, closeModal }) => {
  const [seriesTitle, setSeriesTitle] = React.useState('');
  const [seriesDescription, setSeriesDescription] = React.useState('');
  const { loading } = useQuery<SettingsGetChallengeSeriesByIdQuery, SettingsGetChallengeSeriesByIdQueryVariables>(
    GetChallengeSeriesByIdQuery, {
      variables: {
        uuid: challengeSeriesId,
      },
      skip: !challengeSeriesId,
      onCompleted: response => {
        const { title, description } = response?.challengeSeries || {};
        setSeriesTitle(title || '');
        setSeriesDescription(description || '');
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
      <div>
        <StyledTitleInput
          placeholder="Type challenge series title"
          onChange={e => setSeriesTitle(e.target.value.slice(0, 100))}
          value={seriesTitle}
        />
        <StyledLabel>
          <span>
            Description
          </span>
          <StyledTextarea
            placeholder="What is this series about?"
            rows={10}
            onChange={e => setSeriesDescription(e.target.value.slice(0, 300))}
            value={seriesDescription}
          />
        </StyledLabel>
      </div>
      <ChallengeSeriesFormButtons
        challengeSeriesId={challengeSeriesId}
        challengeSeriesTitle={seriesTitle}
        challengeSeriesDescription={seriesDescription}
        closeModal={closeModal}
      />
    </StyledContainer>
  );
};

export default ChallengeSeriesForm;
