import React from 'react';
import styled from 'styled-components';

import { StyledRow } from 'Routes/Fam/Settings/Announcements/Table';
import svg from 'assets/svg';
import { downloadAndZipUrls, File } from 'utils/file';
import {
  gql, useApolloClient,
} from '@apollo/client';
import { SettingsGetChallengeFilesQuery, SettingsGetChallengeFilesQueryVariables } from 'generated/graphql';

const GetChallengeFilesQuery = gql`
  query SettingsGetChallengeFiles($id: uuid!) {
    challenge_by_pk(id: $id) {
      id
      title
      entries(order_by: {createdAt: asc}) {
        id
        text
        files {
          file {
            id
            name
            path
            mimeType
            extension
            height
            createdAt
            previewPath
            prismaId
            size
            thumbnailPath
            updatedAt
            width
          }
        }
        user: user_ {
          id
          firstName
          lastName
        }
      }
    }
  }
`;

const StyledIconControl = styled.img`
  cursor: pointer;
  width: 16px;
  height: 16px;
  opacity: 0;
  padding: 0px 16px;

  ${StyledRow}:hover & {
    opacity: 1;
  }
`;

type Props = {
  challengeId: string;
}

const ChallengesTableDownloadButton: React.FunctionComponent<Props> = ({ challengeId }) => {
  const client = useApolloClient();
  const onClick = async () => {
    const response = await client.query<
      SettingsGetChallengeFilesQuery,
      SettingsGetChallengeFilesQueryVariables
    >(
      {
        query: GetChallengeFilesQuery,
        variables: {
          id: challengeId,
        },
      },
    );
    const challenge = response.data.challenge_by_pk;
    const entries = challenge?.entries || [];
    const fileList: Array<File> = [];
    entries.forEach(e => {
      const urls = e.files.map(f => ({
        url: `https://res.cloudinary.com/vibely2/image/upload/v1/${f.file?.path}`,
        fileName: `${e.user?.firstName || ''}${e.user?.lastName}`,
        fileExtension: f.file?.extension || '',
      }));
      fileList.push(...urls);
    });

    downloadAndZipUrls(
      `VibelyChallenge-${challenge?.title}`,
      fileList,
    );
  };
  return (
    <StyledIconControl onClick={onClick} src={svg.download} />
  );
};

export default ChallengesTableDownloadButton;
