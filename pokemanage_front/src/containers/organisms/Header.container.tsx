import { useAuth0 } from '@auth0/auth0-react';
import { useState, VFC } from 'react';
import UserProfileAvatar from '../../components/organisms/Header.component';

const EnhancedUserProfileAvatar: VFC = () => {
  const { user, logout } = useAuth0();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    setAnchorEl(null);
    logout({ returnTo: window.location.origin });
  };

  return (
    <UserProfileAvatar
      user={user}
      anchorEl={anchorEl}
      handleMenu={handleMenu}
      handleClose={handleClose}
      onLogout={onLogout}
    />
  );
};

export default EnhancedUserProfileAvatar;
