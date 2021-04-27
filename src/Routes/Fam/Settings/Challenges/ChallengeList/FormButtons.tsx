/* eslint-disable no-alert */
/* eslint-disable no-underscore-dangle */
import { gql, useMutation, useQuery } from '@apollo/client';
import React from 'react';
import {
  SettingsChallengesGetChallengeGroupByAlphaNameQuery,
  SettingsChallengesGetChallengeGroupByAlphaNameQueryVariables,
  SettingsDeleteChallengeMutation,
  SettingsDeleteChallengeMutationVariables,
  SettingsUpdateChallengeMutation,
  SettingsUpdateChallengeMutationVariables,
  SettingsCreateChallengeMutation,
  SettingsCreateChallengeMutationVariables,
  SettingsCreateChallengeWithoutSeriesMutation,
  SettingsCreateChallengeWithoutSeriesMutationVariables,
  SettingsCreateChallengeSeriesIdMutation,
  SettingsCreateChallengeSeriesIdMutationVariables,
  SettingsUpdateChallengeSeriesIdMutation,
  SettingsUpdateChallengeSeriesIdMutationVariables,
  SettingsDeleteChallengeSeriesIdMutation,
  SettingsDeleteChallengeSeriesIdMutationVariables,
} from 'generated/graphql';
import styled from 'styled-components';

import Button from 'components/buttons/Button';
import { ReactComponent as TrashIcon } from 'assets/svg/trash.svg';
import { HasuraFile } from 'clients/cloudinary';
import { useParams } from 'react-router';

const StyledButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 0',
});

const StyledButtonGroup = styled.div({
  display: 'flex',
});

const StyledTrashIcon = styled(TrashIcon)({
  marginRight: 8,
});

const GetChallengeGroupByAlphaNameQuery = gql`
  query SettingsChallengesGetChallengeGroupByAlphaName($alphaName: String!) {
    group: group_(where: {alphaName: {_eq: $alphaName}}) {
      id
      challengeGroup {
        id
      }
    }
  }
`;

const DeleteChallengeMutation = gql`
  mutation SettingsDeleteChallenge($challengeId: uuid!) {
    delete_challenge_entry_comment(where: { entry: { challengeId: { _eq: $challengeId } } }) {
      affected_rows
    }
    delete_challenge_entry_reaction(where: { entry: { challengeId: { _eq: $challengeId } } }) {
      affected_rows
    }
    delete_challenge_entry_file(where: { entry: { challengeId: { _eq: $challengeId } } }) {
      affected_rows
    }
    delete_challenge_entry(where: { challengeId: { _eq: $challengeId } }) {
      affected_rows
    }
    delete_challenge_series_challenges(where: { challengeId: { _eq: $challengeId } }) {
      affected_rows
    }
    delete_challenge_file(where: { challengeId: { _eq: $challengeId } }) {
      affected_rows
    }
    delete_challenge_channel(where: { challengeId: { _eq: $challengeId } }) {
      affected_rows
    }
    delete_challenge_points(where: { challenge_id: { _eq: $challengeId } }) {
      affected_rows
    }
    challenge: delete_challenge_by_pk(id: $challengeId) {
      id
    }
  }
`;

const CreateChallengeMutation = gql`
  mutation SettingsCreateChallenge(
    $challengeGroupId: uuid!
    $challengeSeriesId: uuid!
    $description: String!
    $title: String!
    $prize: String!
    $endAt: timestamptz!
    $createChannel: Boolean = false
    $fileData: file_insert_input!
  ) {
    challenge: insert_challenge(
      objects: {
        challengeGroupId: $challengeGroupId
        challenge_series_challenges: { data: { challengeSeriesId: $challengeSeriesId } }
        endAt: $endAt
        title: $title
        prize: $prize
        description: $description
        createChannel: $createChannel
        files: {
          data: { file: { data: $fileData } }
          on_conflict: { constraint: challenge_file_challenge_id_key, update_columns: fileId }
        }
      }
      on_conflict: { constraint: challenge_pkey, update_columns: [description, title, prize, endAt] }
    ) {
      returning {
        id
      }
    }
  }
`;

const CreateChallengeWithoutSeriesMutation = gql`
  mutation SettingsCreateChallengeWithoutSeries(
    $challengeGroupId: uuid!
    $description: String!
    $title: String!
    $prize: String!
    $endAt: timestamptz!
    $createChannel: Boolean = false
    $fileData: file_insert_input!
  ) {
    challenge: insert_challenge(
      objects: {
        challengeGroupId: $challengeGroupId
        endAt: $endAt
        title: $title
        prize: $prize
        description: $description
        createChannel: $createChannel
        files: {
          data: { file: { data: $fileData } }
          on_conflict: { constraint: challenge_file_challenge_id_key, update_columns: fileId }
        }
      }
      on_conflict: { constraint: challenge_pkey, update_columns: [description, title, prize, endAt] }
    ) {
      returning {
        id
      }
    }
  }
`;

const UpdateChallengeMutation = gql`
  mutation SettingsUpdateChallenge(
    $challengeId: uuid!, 
    $title: String!, 
    $description: String!, 
    $prize: String!, 
    $endAt: timestamptz!,
    $fileId: uuid!,
    $fileData: file_set_input!
  ) {
    challengeSeries: update_challenge_by_pk(
      pk_columns: {id: $challengeId}, 
      _set: {
        title: $title, 
        description: $description,
        prize: $prize,
        endAt: $endAt,
      }
    ) {
      id
      description
      title
      prize
      endAt
    }

    file: update_file_by_pk(pk_columns: { id: $fileId }, _set: $fileData) {
      id
    }
  }
`;

const UpdateChallengeSeriesIdMutation = gql`
  mutation SettingsUpdateChallengeSeriesId(
    $challengeId: uuid!, 
    $challengeSeriesId: uuid!, 
    $newChallengeSeriesId: uuid, 
  ) {
    update_challenge_series_challenges(
      where: {challengeId: {_eq: $challengeId}, challengeSeriesId: {_eq: $challengeSeriesId}}, 
      _set: {challengeSeriesId: $newChallengeSeriesId}
    ) {
      returning {
        challenge {
          id
          challenge_series_challenges {
            challengeSeriesId
          }
        }
      }
    }
  }
`;

const CreateChallengeSeriesIdMutation = gql`
  mutation SettingsCreateChallengeSeriesId(
    $challengeId: uuid!, 
    $newChallengeSeriesId: uuid!, 
  ) {
    insert_challenge_series_challenges(
      objects: {
        challengeId: $challengeId
        challengeSeriesId: $newChallengeSeriesId
      }
    ) {
      returning {
        challenge {
          id
          challenge_series_challenges {
            challengeSeriesId
          }
        }
      }
    }
  }
`;

const DeleteChallengeSeriesIdMutation = gql`
  mutation SettingsDeleteChallengeSeriesId(
    $challengeId: uuid!, 
    $challengeSeriesId: uuid!, 
  ) {
    delete_challenge_series_challenges(
      where: { challengeId: { _eq: $challengeId }, challengeSeriesId: { _eq: $challengeSeriesId } }
    ) {
      affected_rows
    }
  }
`;

type Props = {
  challengeSeriesId?: string;
  newChallengeSeriesId?: string;
  challengeId?: string;
  challengeTitle: string;
  challengeDescription: string;
  challengePrize: string;
  challengeEndAt: string;
  challengeFile?: HasuraFile,
  createChannel: boolean;
  closeModal: (shouldRefetchList?: boolean) => void
}

const ChallengeFormButtons: React.FunctionComponent<Props> = ({
  challengeSeriesId,
  newChallengeSeriesId,
  challengeId,
  challengeTitle,
  challengeDescription,
  challengePrize,
  challengeEndAt,
  challengeFile,
  createChannel,
  closeModal,
}) => {
  const { famAlphaName } = useParams<{ famAlphaName: string; }>();
  const canSubmit = Boolean(
    challengeTitle && challengeDescription && challengePrize && challengeEndAt && challengeFile,
  );
  const { data } = useQuery<
    SettingsChallengesGetChallengeGroupByAlphaNameQuery,
    SettingsChallengesGetChallengeGroupByAlphaNameQueryVariables
  >(
    GetChallengeGroupByAlphaNameQuery, {
      variables: {
        alphaName: famAlphaName,
      },
    },
  );
  const [createChallengeMutation] = useMutation<
    SettingsCreateChallengeMutation,
    SettingsCreateChallengeMutationVariables
  >(
    CreateChallengeMutation,
  );
  const [createChallengeWithoutSeriesMutation] = useMutation<
    SettingsCreateChallengeWithoutSeriesMutation,
    SettingsCreateChallengeWithoutSeriesMutationVariables
  >(
    CreateChallengeWithoutSeriesMutation,
  );
  const [updateChallengeMutation] = useMutation<
    SettingsUpdateChallengeMutation,
    SettingsUpdateChallengeMutationVariables
  >(
    UpdateChallengeMutation,
  );
  const [createChallengeSeriesIdMutation] = useMutation<
    SettingsCreateChallengeSeriesIdMutation,
    SettingsCreateChallengeSeriesIdMutationVariables
  >(
    CreateChallengeSeriesIdMutation,
  );
  const [updateChallengeSeriesIdMutation] = useMutation<
    SettingsUpdateChallengeSeriesIdMutation,
    SettingsUpdateChallengeSeriesIdMutationVariables
  >(
    UpdateChallengeSeriesIdMutation,
  );
  const [deleteChallengeSeriesIdMutation] = useMutation<
    SettingsDeleteChallengeSeriesIdMutation,
    SettingsDeleteChallengeSeriesIdMutationVariables
  >(
    DeleteChallengeSeriesIdMutation,
  );
  const [deleteChallengeMutation] = useMutation<
    SettingsDeleteChallengeMutation,
    SettingsDeleteChallengeMutationVariables
  >(
    DeleteChallengeMutation,
  );
  const onSaveClick = async () => {
    if (challengeId) {
      await updateChallengeMutation({
        variables: {
          challengeId,
          title: challengeTitle,
          description: challengeDescription,
          prize: challengePrize,
          endAt: challengeEndAt,
          fileId: challengeFile?.id,
          fileData: { path: challengeFile?.path },
        },
      });

      if (!challengeSeriesId && newChallengeSeriesId) {
        // moving from ungrouped to a new series
        await createChallengeSeriesIdMutation({
          variables: {
            challengeId,
            newChallengeSeriesId,
          },
        });
      } else if (challengeSeriesId && !newChallengeSeriesId) {
        // moving from a series to ungrouped
        await deleteChallengeSeriesIdMutation({
          variables: {
            challengeId,
            challengeSeriesId,
          },
        });
      } else if (challengeSeriesId !== newChallengeSeriesId) {
        // moving from a series to another series
        await updateChallengeSeriesIdMutation({
          variables: {
            challengeId,
            challengeSeriesId,
            newChallengeSeriesId: newChallengeSeriesId || null,
          },
        });
      }

      closeModal(true);
    } else {
      if (!challengeFile) {
        return;
      }
      const params = {
        variables: {
          challengeGroupId: data?.group[0].challengeGroup?.id,
          challengeSeriesId: newChallengeSeriesId,
          title: challengeTitle,
          description: challengeDescription,
          prize: challengePrize,
          endAt: challengeEndAt,
          fileData: challengeFile,
          createChannel,
        },
      };
      if (params.variables.challengeSeriesId) {
        await createChallengeMutation(params);
      } else {
        await createChallengeWithoutSeriesMutation(params);
      }
      window.location.reload();
    }
  };
  const onDeleteClick = async () => {
    const response = window.confirm('Are you sure you want to delete this challenge?');
    if (response === true) {
      await deleteChallengeMutation({
        variables: {
          challengeId,
        },
      });
      closeModal(true);
    }
  };

  return (
    <StyledButtonContainer>
      <StyledButtonGroup>
        <Button type="tertiary" onClick={closeModal}>
          Cancel
        </Button>
        {challengeId && (
          <Button type="danger" onClick={onDeleteClick} style={{ marginLeft: 12 }}>
            <StyledTrashIcon />
            Delete Challenge
          </Button>
        )}
      </StyledButtonGroup>
      <Button disabled={!canSubmit} type="secondary" onClick={onSaveClick}>
        Save
      </Button>
    </StyledButtonContainer>
  );
};

export default ChallengeFormButtons;
