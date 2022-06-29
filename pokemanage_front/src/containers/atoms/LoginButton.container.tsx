import { useAuth0 } from '@auth0/auth0-react';
import { VFC } from 'react';
import LoginButton from '../../components/atoms/LoginButton.component';

const EnhancedLoginButton: VFC = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <LoginButton
      isAuthenticated={isAuthenticated}
      loginWithRedirect={loginWithRedirect}
    />
  );
};

export default EnhancedLoginButton;
