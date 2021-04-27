/* eslint-disable camelcase */
import React, { useCallback } from 'react';
import { useAuth0, IdToken, LogoutOptions } from '@auth0/auth0-react';
import { gql, useMutation, useQuery } from '@apollo/client';
import {
  UserFragment,
  ContextGetUserQuery,
  ContextGetUserQueryVariables,
  ContextUpdateUserActiveMutation,
  ContextUpdateUserActiveMutationVariables,
} from 'generated/graphql';
import { LOGIN_OPTIONS, RETURN_TO_KEY } from 'components/hoc/withAuth';

export const USER_HASURA_ID_KEY = 'USER_HASURA_ID';
export const USER_ID_TOKEN_KEY = 'USER_ID_TOKEN';

const storeUserField = (key: typeof USER_HASURA_ID_KEY | typeof USER_ID_TOKEN_KEY, value?: string) => {
  localStorage.setItem(key, value || '');
};

export const getUserField = (key: typeof USER_HASURA_ID_KEY | typeof USER_ID_TOKEN_KEY): string => {
  return localStorage.getItem(key) || '';
};

const GetUserQuery = gql`
  query ContextGetUser($id: uuid!) {
    user__by_pk(id: $id) {
      ...User
    }
  }

  fragment User on user_ {
    id
    email
    firstName
    lastName
    photos
    employee
  }
`;

const UpdateUserActiveMutation = gql`
  mutation ContextUpdateUserActive($userId: uuid!) {
    user: update_user__by_pk(pk_columns: { id: $userId }, _set: { activeAt: "now()" }) {
      id
      activeAt
    }
  }
`;

type Auth0UserProfile = {
  name: string;
  nickname: string;
  picture: string;
  user_id: string;
  username?: string;
  given_name?: string;
  family_name?: string;
  email?: string;
  email_verified?: boolean;
  clientID: string;
  gender?: string;
  locale?: string;
  created_at: string;
  updated_at: string;
  sub: string;
  user_metadata?: any;
  app_metadata?: any;
};

export type Auth0CustomParams = {
  idToken?: string;
  accessToken?: string;
  hasuraDefaultRole: string;
  hasuraAllowedRoles: Array<string>;
  hasuraUserId: string;
  hasuraAuth0UserId: string;
};

type Auth0User = Auth0UserProfile & Auth0CustomParams

export const UserContext = React.createContext<{
  user: UserFragment | null;
  auth0User: Auth0User | null;
  loading: boolean;
  login:() => void;
  signup: () => void;
  logout: (opts?: LogoutOptions) => void;
  onLogin: (user: Auth0UserProfile, customParams: Auth0CustomParams) => void;
    }>({
      user: null,
      auth0User: null,
      loading: true,
      login: () => {},
      signup: () => {},
      logout: () => {},
      onLogin: () => {},
    });

const getUserObject = (
  loggedInUser: Auth0UserProfile, claims: any, idTokenClaims: IdToken, accessToken: string,
): Auth0User => ({
  ...loggedInUser,
  // eslint-disable-next-line no-underscore-dangle
  idToken: idTokenClaims.__raw,
  hasuraUserId: claims?.['x-hasura-user-id'],
  // The following are not currently used in the app, may be needed in the future.
  accessToken,
  hasuraDefaultRole: claims?.['x-hasura-default-role'],
  hasuraAllowedRoles: claims?.['x-hasura-allowed-roles'],
  hasuraAuth0UserId: claims?.['x-auth0-user-id'],
});

const UserProvider: React.FunctionComponent = ({ children }) => {
  const [auth0User, setAuth0User] = React.useState<Auth0User | null>(null);
  const [user, setUser] = React.useState<UserFragment | null>(null);
  const [loading, setLoading] = React.useState(true);

  const [updateUserActiveMutation] = useMutation<
    ContextUpdateUserActiveMutation,
    ContextUpdateUserActiveMutationVariables
  >(
    UpdateUserActiveMutation, {
      variables: {
        userId: user?.id,
      },
    },
  );

  const {
    user: authUser, isLoading, isAuthenticated, getIdTokenClaims, getAccessTokenSilently, loginWithRedirect, logout,
  } = useAuth0();

  const { loading: userLoading } = useQuery<ContextGetUserQuery, ContextGetUserQueryVariables>(GetUserQuery, {
    variables: {
      id: auth0User?.hasuraUserId,
    },
    skip: !auth0User?.hasuraUserId,
    onCompleted: (data) => {
      setUser(data?.user__by_pk || null);
    },
  });

  // This function is called after user successfully logs in
  const onLogin = useCallback(async (loggedInUser) => {
    const idTokenClaims = await getIdTokenClaims();
    const accessToken = await getAccessTokenSilently();
    const claims = loggedInUser['https://hasura.io/jwt/claims'] as any || {};
    const userObject = getUserObject(loggedInUser, claims, idTokenClaims, accessToken);
    storeUserField(USER_HASURA_ID_KEY, userObject.hasuraUserId);
    storeUserField(USER_ID_TOKEN_KEY, userObject.idToken);
    setAuth0User(userObject);
  }, [getAccessTokenSilently, getIdTokenClaims]);

  // Both login and signup redirect user to the auth0 page,
  // and user is redirected back where they were on successful login/signup.
  const login = () => {
    localStorage.setItem(RETURN_TO_KEY, window.location.href);
    loginWithRedirect(LOGIN_OPTIONS);
  };
  const signup = () => {
    localStorage.setItem(RETURN_TO_KEY, window.location.href);
    loginWithRedirect({ ...LOGIN_OPTIONS, screen_hint: 'signup' });
  };

  React.useEffect(() => {
    if (!auth0User && isAuthenticated && authUser) {
      onLogin(authUser);
      return;
    }

    if (isLoading !== loading) {
      setLoading(isLoading);
    }
  }, [auth0User, authUser, isAuthenticated, isLoading, loading, onLogin, user, userLoading]);

  React.useEffect(() => {
    if (user) {
      updateUserActiveMutation();
    }
  }, [updateUserActiveMutation, user]);

  return (
    <UserContext.Provider value={{
      auth0User, user, loading, onLogin, login, logout, signup,
    }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
