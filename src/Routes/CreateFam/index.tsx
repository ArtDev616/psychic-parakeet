import { UserContext } from 'contexts/user';
import React, { useContext } from 'react';
import { Route, RouteComponentProps } from 'react-router';
import CreateFamUser from 'Routes/CreateFam/Step1User';
import CreateFamDetails from 'Routes/CreateFam/Step2FamDetails';
import CreateFamChallenge from 'Routes/CreateFam/Step3Challenge';
import styled from 'styled-components';
import bgBottomRight from './assets/bgBottomRight.svg';
import bgTopLeft from './assets/bgTopLeft.svg';
import ProgressBar from './ProgressBar';

type CustomRouteParams = Record<string, never>

type Props = RouteComponentProps<CustomRouteParams>

const StyledContainer = styled.div({
  backgroundColor: '#E4FCFC',
  minHeight: '100vh',
  height: '100%',
  padding: '0 32px',
  backgroundImage: `url(${bgBottomRight}), url(${bgTopLeft})`,
  backgroundPosition: 'right bottom, left top',
  backgroundRepeat: 'no-repeat, no-repeat',
});

const StyledInnerContainer = styled.div({
  maxWidth: 1200,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
});

const CreateFam: React.FunctionComponent<Props> = ({ match: { path } }: Props) => {
  const { auth0User } = useContext(UserContext);
  return (
    <StyledContainer>
      <StyledInnerContainer>
        {auth0User && (
          <ProgressBar />
        )}
        <Route path={`${path}/step-1`} component={CreateFamUser} />
        <Route path={`${path}/step-2`} component={CreateFamDetails} />
        <Route path={`${path}/step-3`} component={CreateFamChallenge} />
      </StyledInnerContainer>
    </StyledContainer>
  );
};

export default CreateFam;
