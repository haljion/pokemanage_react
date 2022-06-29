import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Top from '../containers/pages/Top.container';

const PrivateRoute = ({ children }: any) => {
  const { isAuthenticated } = useAuth0();

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return isAuthenticated ? children : <Top />;
};

export default PrivateRoute;
