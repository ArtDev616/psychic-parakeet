import { gql, useMutation, useQuery } from '@apollo/client';
import { useParams } from 'react-router';
import svg from 'assets/svg';
import { logEvent } from 'clients/amplitude';
import Button from 'components/buttons/Button';
import { UserContext } from 'contexts/user';
import {
  FamAcceptChallengeMutation,
  FamAcceptChallengeMutationVariables,
  FamGetMyChallengeEntryQuery,
  FamGetMyChallengeEntryQueryVariables,
} from 'generated/graphql';
import React from 'react';
import SubmitEntryModal from 'Routes/Fam/ChallengeEntries/SubmitEntryModal';
import styled from 'styled-components';

const FamGetMyChallengeEntry = gql`
  query FamGetMyChallengeEntry($userId: uuid!, $challengeId: uuid!) {
    myEntries: challenge_entry(
      where:{ userId: { _eq: $userId }, challengeId: { _eq: $challengeId }},
      order_by: { createdAt: desc },
      limit: 1
    ) {
      id
      completedAt
    }
  }
`;

const FamAcceptChallenge = gql`
  mutation FamAcceptChallenge($userId: uuid!, $challengeId: uuid!) {
    myEntry: insert_challenge_entry_one(object: { userId: $userId, challengeId: $challengeId, completedAt: null }) {
      id
    }
  }
`;

const StyledIcon = styled.img({
  paddingRight: 8,
});

const StyledAcceptOrSubmitButton = styled(Button)({
  marginTop: 20,
  textAlign: 'center',
  transition: 'transform 0.2s',
  padding: '12px 0',
  '&:hover': {
    transform: 'scale(1.05)',
  },
});

type Props = {
  challengeId: string;
};

type PathParamsType = { famAlphaName: string };

const AcceptCompleteButton: React.FunctionComponent<Props> = ({ challengeId }) => {
  const { famAlphaName } = useParams<PathParamsType>();
  const { user } = React.useContext(UserContext);
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const { data, refetch } = useQuery<
    FamGetMyChallengeEntryQuery,
    FamGetMyChallengeEntryQueryVariables>(FamGetMyChallengeEntry, {
      variables: {
        userId: user?.id || '',
        challengeId,
      },
      skip: !user?.id,
    });

  const [acceptChallenge] = useMutation<
  FamAcceptChallengeMutation,
  FamAcceptChallengeMutationVariables>(FamAcceptChallenge);

  if (!user || !data) {
    return null;
  }

  const accepted = Boolean(data?.myEntries?.length && !data.myEntries[0].completedAt);
  const completed = Boolean(data?.myEntries?.length && data.myEntries[0].completedAt);

  const buttonAction = async () => {
    if (!accepted && !completed) {
      logEvent('Fam Challenge', 'Challenge accepted', { famAlphaName, challengeId });
      await acceptChallenge({
        variables: {
          userId: user.id,
          challengeId,
        },
      });
    }

    setIsModalVisible(true);
    refetch();
  };

  const buttonText = completed ? '✓ Completed Challenge' : accepted ? 'Upload Submission' : 'Accept Challenge';
  const buttonType = completed ? 'tertiary' : accepted ? 'secondary' : 'primary';

  return (
    <>
      <StyledAcceptOrSubmitButton type={buttonType} onClick={buttonAction} disabled={completed}>
        {!completed && <StyledIcon src={svg.checkmarkWhite} alt="checkmark" />}
        {buttonText}
      </StyledAcceptOrSubmitButton>
      <SubmitEntryModal
        challengeId={challengeId}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default AcceptCompleteButton;
