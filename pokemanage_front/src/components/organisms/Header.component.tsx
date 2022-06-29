import React, { VFC } from 'react';
import { User } from '@auth0/auth0-react';
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import LoginButton from '../../containers/atoms/LoginButton.container';

const Header: VFC<{
  user: User | undefined;
  anchorEl: HTMLElement | null;
  handleMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  onLogout: () => void;
}> = ({ user, anchorEl, handleMenu, handleClose, onLogout }) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }} color="inherit">
          PokeManage
        </Typography>

        {typeof user === 'undefined' ? (
          <LoginButton />
        ) : (
          <>
            <IconButton
              size="large"
              aria-label="account"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <Avatar alt={user.email} src={user.picture} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <EmailIcon />: {user.email}
              </MenuItem>
              <MenuItem onClick={onLogout}>ログアウト</MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  </Box>
);

export default Header;
