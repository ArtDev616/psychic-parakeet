import React, { useContext } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { UserContext } from 'contexts/user';

export const RETURN_TO_KEY = 'returnTo';

export const LOGIN_OPTIONS = {
  responseType: 'token id_token',
};

export default (
  Component: React.FunctionComponent<any>, defaultToSignup: boolean,
): React.FunctionComponent<any> => withAuthenticationRequired(
  props => {
    const { user } = useContext(UserContext);

    // Wait until the user is set in the context
    if (!user) {
      return null;
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  },
  {
    loginOptions: {
      ...LOGIN_OPTIONS,
      screen_hint: defaultToSignup ? 'signup' : undefined,
    },
    onRedirecting: function Loading() {
      localStorage.setItem(RETURN_TO_KEY, window.location.href);
      return <div />;
    },
  },
);
