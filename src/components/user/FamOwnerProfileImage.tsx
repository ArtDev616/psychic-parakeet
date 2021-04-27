/* eslint-disable no-underscore-dangle */
import { gql, useQuery } from '@apollo/client';
import React from 'react';

import {
  NonMemberGetGroupLeaderQuery,
  NonMemberGetGroupLeaderQueryVariables,
} from 'generated/graphql';
import ProfileImage from 'components/user/ProfileImage';

const GetGroupLeaderQuery = gql`
  query NonMemberGetGroupLeader($alphaName: String!) {
    group: group_(where: {alphaName: {_eq: $alphaName}}) {
      id
      leader_ {
        id
        photos
      }
    }
  }
`;

type Props = {
  famAlphaName: string;
  className?: string;
  size: number;
}

const FamOwnerProfilePicture: React.FunctionComponent<Props> = ({ className, famAlphaName, size }) => {
  const { data } = useQuery<NonMemberGetGroupLeaderQuery, NonMemberGetGroupLeaderQueryVariables>(GetGroupLeaderQuery, {
    variables: {
      alphaName: famAlphaName,
    },
  });
  const leaderImage = data?.group?.[0]?.leader_?.photos[0].id;
  return (
    <ProfileImage
      className={className}
      path={leaderImage}
      size={size}
    />
  );
};

export default FamOwnerProfilePicture;
