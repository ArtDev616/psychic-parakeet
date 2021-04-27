import { UserContext } from 'contexts/user';
import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';

type CustomRouteParams = Record<string, never>

type Props = RouteComponentProps<CustomRouteParams>

const Logout: React.FunctionComponent<Props> = () => {
  const { logout } = useContext(UserContext);

  React.useEffect(() => {
    logout({ returnTo: 'https://vibely.io' });
  }, [logout]);

  return null;
};

export default Logout;
