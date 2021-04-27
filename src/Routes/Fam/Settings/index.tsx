import React, { useContext } from 'react';
import { gql, useQuery } from '@apollo/client';
import {
  Route, RouteComponentProps, Switch,
} from 'react-router';
import styled from 'styled-components';

import Nav from 'Routes/Fam/NavBar';
import FamSettingsHeader from 'Routes/Fam/Settings/Header';
import FamChallengeSettings from 'Routes/Fam/Settings/Challenges';
import FamAnnouncementSettings from 'Routes/Fam/Settings/Announcements';
import FamCircleSettings from 'Routes/Fam/Settings/Channels';
import FamMemberSettings from 'Routes/Fam/Settings/Members';
import { UserContext } from 'contexts/user';
import { SettingsGetGroupLeaderQuery, SettingsGetGroupLeaderQueryVariables } from 'generated/graphql';

export const SETTINGS_SCROLLABLE_DIV_ID = 'settings-container';

const GetGroupLeaderQuery = gql`
  query SettingsGetGroupLeader($alphaName: String!) {
    group: group_(where: {alphaName: {_eq: $alphaName}}) {
      id
      leaderUserId
    }
  }
`;

const StyledContainer = styled.div({
  display: 'flex',
  height: '100%',
});

const StyledSettings = styled.div({
  width: '100%',
  overflow: 'auto',
});

const StyledInnerContainer = styled.div({
  flex: 1,
  maxWidth: 960,
  margin: '0 auto',
  padding: '46px 32px',
});

type Props = RouteComponentProps<{
  famAlphaName: string;
}>;

const FamSettings: React.FunctionComponent<Props> = ({ match }) => {
  const { user } = useContext(UserContext);
  const { data } = useQuery<SettingsGetGroupLeaderQuery, SettingsGetGroupLeaderQueryVariables>(
    GetGroupLeaderQuery, {
      variables: {
        alphaName: match.params.famAlphaName,
      },
    },
  );

  if (!user?.employee && (!user || user?.id !== data?.group?.[0].leaderUserId)) {
    return null;
  }

  return (
    <StyledContainer>
      <Nav hideFamBar />
      <StyledSettings id={SETTINGS_SCROLLABLE_DIV_ID}>
        <StyledInnerContainer>
          <FamSettingsHeader />
          <Switch>
            <Route path={`${match.path}/announcements`} component={FamAnnouncementSettings} />
            <Route path={`${match.path}/challenges`} component={FamChallengeSettings} />
            <Route path={`${match.path}/circles`} component={FamCircleSettings} />
            <Route path={`${match.path}/members`} component={FamMemberSettings} />
          </Switch>
        </StyledInnerContainer>
      </StyledSettings>
    </StyledContainer>
  );
};

export default FamSettings;
