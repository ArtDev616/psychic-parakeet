import { gql, useMutation } from '@apollo/client';
import { logEvent } from 'clients/amplitude';
import { addWeeks } from 'date-fns';
import React from 'react';
import Controls from '../Controls';
import { Challenge } from './types';

const CreateChallengeGroupMutation = gql`
  mutation CreateChallengeGroupMutation($groupId: uuid!) {
    challengeGroup: insert_challenge_group(
      objects: {
        groupId: $groupId
        challenge_series: { data: { title: "Level 1", description: "Welcome! Use this to track your growth" } }
      }
      on_conflict: { constraint: challenge_group_group_id_key, update_columns: updatedAt }
    ) {
      returning {
        id
        groupId
      }
    }
  }
`;

const CreateChallengeWithoutSeriesMutation = gql`
  mutation CreateChallengeWithoutSeriesMutation(
    $challengeGroupId: uuid!
    $description: String!
    $title: String!
    $endAt: timestamptz!
    $prize: String!
    $createChannel: Boolean = false
    $file: file_insert_input!
  ) {
    createC: insert_challenge(
      objects: {
        challengeGroupId: $challengeGroupId
        endAt: $endAt
        title: $title
        prize: $prize
        createChannel: $createChannel
        description: $description
        files: {
          data: { file: { data: $file } }
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

const InsertGroupMutation = gql`
  mutation InsertGroupMutation(
    $name: String
    $worldChatName: String
    $shortName: String
    $description: String
    $alphaName: String
    $imageUrl: String
    $prismaSecret: String
    $demonym: String
    $leaderUserId: uuid
    $demonymPlural: String
  ) {
    group: insert_group__one(
      object: {
        name: $name
        shortName: $shortName
        description: $description
        alphaName: $alphaName
        imageUrl: $imageUrl
        tilted: true
        tiltThreshold: 1
        prismaSecret: $prismaSecret
        demonym: $demonym
        demonymPlural: $demonymPlural
        leaderUserId: $leaderUserId
        users: { data: { userId: $leaderUserId } }
        channels: {
          data: {
            default: true
            type: world
            totalPosts: 1
            name: $worldChatName
            members: { data: { userId: $leaderUserId, deletedAt: null } }
            ownerId: $leaderUserId
          }
        }
      }
    ) {
      id
      name
    }
  }
`;

type PropsType = {
  famName: string;
  selectedChallenges: Array<Challenge>;
  picture: string;
  userId?: string;
}

const Step3Buttons: React.FunctionComponent<PropsType> = ({
  famName, picture, selectedChallenges, userId,
}) => {
  const [addGroup] = useMutation(InsertGroupMutation);
  const [createChallenge] = useMutation(CreateChallengeWithoutSeriesMutation);
  const [createChallengeGroup] = useMutation(CreateChallengeGroupMutation);
  const onNextClick = async () => {
    const alphaName = famName.replace(/[^0-9a-z]/gi, '').toLowerCase();
    const shortName = famName.indexOf(' ') === -1
      ? `${famName[0]}${famName[1]}`
      : `${famName.split(' ')[0][0]}${famName.split(' ')[1][0]}`;

    try {
      // Create group mutation
      const addGroupResponse = await addGroup({
        variables: {
          name: famName,
          shortName,
          worldChatName: `${famName} - World`,
          description: '',
          imageUrl: picture,
          demonym: 'Member',
          demonymPlural: 'Members',
          prismaSecret: alphaName,
          alphaName,
          leaderUserId: userId,
        },
      });

      const { id, name } = addGroupResponse.data.group;
      const challengeGroupResponse = await createChallengeGroup({
        variables: {
          groupId: id,
        },
      });

      await Promise.all(
        selectedChallenges.map(c => createChallenge({
          variables: {
            challengeGroupId: challengeGroupResponse.data.challengeGroup.returning[0].id,
            title: c.title,
            description: c.description,
            prize: '',
            createChannel: false,
            // TODO(selmank): switch to day js
            endAt: addWeeks(new Date(), 2),
            file: c.file,
          },
        })),
      );

      logEvent('Created Fam', 'successfully created', { groupId: id, groupName: name, alphaName }, () => {
        window.location.href = `https://app.vibely.io/${alphaName}/challenges`;
      });
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('Sorry, error occurred. Please try again later.');
    }
  };
  return (
    <Controls canContinue={selectedChallenges.length > 0} onNextClick={onNextClick} />
  );
};

export default Step3Buttons;
