import React, { useContext } from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router';
import { UserContext } from 'contexts/user';
import { ModalContext, CustomModalTypes } from 'contexts/modal';
import { openMagicLink } from 'utils/helpers';
import FamSettings from 'Routes/Fam/Settings';
import FamCircle from 'Routes/Fam/Circle';
import FamChallenges from 'Routes/Fam/Challenges';
import FamChallengeEntries from 'Routes/Fam/ChallengeEntries';
import FamRedirect from 'Routes/Fam/Redirect';
import styled from 'styled-components';

type Props = RouteComponentProps<{ famAlphaName: string }>;

// Styled components
const StyledHome = styled.div({
  height: '100vh',
  width: '100vw',
  overflow: 'hidden',
});

const Fam: React.FunctionComponent<Props> = ({ match: { path, params } }) => {
  const { user } = useContext(UserContext);
  const { showModal, isModalVisible } = useContext(ModalContext);

  // Block user if logged in successfully but no profile information
  const noProfileInfo = Boolean(user?.id) && (!user?.firstName || !user?.lastName || !user?.photos);
  React.useEffect(() => {
    if (noProfileInfo && !isModalVisible) {
      showModal({
        type: CustomModalTypes.COMPLETE_PROFILE,
        buttonAction: () => {
          openMagicLink(params?.famAlphaName);
        },
      });
    }
  }, [noProfileInfo, isModalVisible, showModal, params.famAlphaName]);

  return (
    <StyledHome>
      <Switch>
        <Route path={`${path}/circle/:channelId`} component={FamCircle} />
        <Route path={`${path}/challenge/:challengeId`} component={FamChallengeEntries} />
        <Route path={`${path}/challenges`} component={FamChallenges} />
        <Route path={`${path}/settings`} component={FamSettings} />
        <Route exact path={path} component={FamRedirect} />
      </Switch>
    </StyledHome>
  );
};

export default Fam;
