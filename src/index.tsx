import { ApolloProvider } from '@apollo/client';
import { Auth0Provider } from '@auth0/auth0-react';
import { CLOUD_NAME } from 'clients/cloudinary';
import { client } from 'clients/hasura';
import { CloudinaryContext } from 'cloudinary-react';
import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from 'reportWebVitals';

import 'index.css';
import App from 'Routes/App';
import UserProvider from 'contexts/user';
import ModalProvider from 'contexts/modal';
import { onAuthRedirect } from 'utils/helpers';
import NavBarProvider from 'contexts/navbar';
import { logEvent } from 'clients/amplitude';

const main = (
  <React.StrictMode>
    <ApolloProvider client={client}>
      <CloudinaryContext cloudName={CLOUD_NAME}>
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH0_DOMAIN}
          clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
          redirectUri={window.location.origin}
          onRedirectCallback={onAuthRedirect}
        >
          <UserProvider>
            <ModalProvider>
              <NavBarProvider>
                <App />
              </NavBarProvider>
            </ModalProvider>
          </UserProvider>
        </Auth0Provider>
      </CloudinaryContext>
    </ApolloProvider>
  </React.StrictMode>
);

// Render root
ReactDOM.render(main, document.getElementById('root'));

logEvent('App', 'Loaded');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
