/* eslint-disable no-underscore-dangle */
import { gql, useMutation, useQuery } from '@apollo/client';
import React from 'react';
import {
  SettingsGetChallengeGroupByAlphaNameQuery,
  SettingsGetChallengeGroupByAlphaNameQueryVariables,
  SettingsCreateChallengeSeriesMutation,
  SettingsCreateChallengeSeriesMutationVariables,
  SettingsUpdateChallengeSeriesMutation,
  SettingsUpdateChallengeSeriesMutationVariables,
} from 'generated/graphql';
import styled from 'styled-components';

import Button from 'components/buttons/Button';
import { useParams } from 'react-router';

const StyledButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 0',
});

const GetChallengeGroupByAlphaNameQuery = gql`
  query SettingsGetChallengeGroupByAlphaName($alphaName: String!) {
    group: group_(where: {alphaName: {_eq: $alphaName}}) {
      id
      challengeGroup {
        id
      }
    }
  }
`;

const UpdateChallengeSeriesMutation = gql`
  mutation SettingsUpdateChallengeSeries($id: uuid!, $title: String!, $description: String!) {
    challengeSeries: update_challenge_series_by_pk(
      pk_columns: {id: $id}, 
      _set: {title: $title, description: $description}
    ) {
      id
      description
      title
    }
  }
`;

const CreateChallengeSeriesMutation = gql`
  mutation SettingsCreateChallengeSeries(
    $challengeGroupId: uuid!
    $description: String!
    $title: String!
  ) {
    challengeSeries: insert_challenge_series(
      objects: {
        challengeGroupId: $challengeGroupId
        description: $description
        title: $title
      }
    ) {
      returning {
        id
      }
    }
  }
`;

type Props = {
  challengeSeriesId?: string;
  challengeSeriesTitle: string;
  challengeSeriesDescription: string;
  closeModal: (shouldRefetchList?: boolean) => void
}

const ChallengeSeriesFormButtons: React.FunctionComponent<Props> = ({
  challengeSeriesId,
  challengeSeriesTitle,
  challengeSeriesDescription,
  closeModal,
}) => {
  const { famAlphaName } = useParams<{ famAlphaName: string; }>();
  const { data, loading } = useQuery<
    SettingsGetChallengeGroupByAlphaNameQuery,
    SettingsGetChallengeGroupByAlphaNameQueryVariables
  >(
    GetChallengeGroupByAlphaNameQuery, {
      variables: {
        alphaName: famAlphaName,
      },
    },
  );
  const canSubmit = !loading && Boolean(challengeSeriesTitle && challengeSeriesDescription);
  const [createChallengeSeriesMutation] = useMutation<
    SettingsCreateChallengeSeriesMutation,
    SettingsCreateChallengeSeriesMutationVariables
  >(
    CreateChallengeSeriesMutation,
  );
  const [updateChallengeSeriesMutation] = useMutation<
    SettingsUpdateChallengeSeriesMutation,
    SettingsUpdateChallengeSeriesMutationVariables
  >(
    UpdateChallengeSeriesMutation,
  );
  const onSaveClick = async () => {
    if (challengeSeriesId) {
      await updateChallengeSeriesMutation({
        variables: {
          id: challengeSeriesId,
          title: challengeSeriesTitle,
          description: challengeSeriesDescription,
        },
      });
      closeModal(true);
    } else {
      await createChallengeSeriesMutation({
        variables: {
          challengeGroupId: data?.group[0].challengeGroup?.id,
          title: challengeSeriesTitle,
          description: challengeSeriesDescription,
        },
      });
      window.location.reload();
    }
  };

  return (
    <StyledButtonContainer>
      <Button type="tertiary" onClick={closeModal}>
        Cancel
      </Button>
      <Button disabled={!canSubmit} type="secondary" onClick={onSaveClick}>
        Save
      </Button>
    </StyledButtonContainer>
  );
};

export default ChallengeSeriesFormButtons;
