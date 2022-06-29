import { VFC } from 'react';
import { Button } from '@mui/material';
import { RedirectLoginOptions } from '@auth0/auth0-react';

const LoginButton: VFC<{
  isAuthenticated: boolean;
  loginWithRedirect: (
    options?: RedirectLoginOptions | undefined,
  ) => Promise<void>;
}> = ({ isAuthenticated, loginWithRedirect }) =>
  !isAuthenticated ? (
    <Button variant="contained" color="success" onClick={loginWithRedirect}>
      ログイン
    </Button>
  ) : null;

export default LoginButton;
