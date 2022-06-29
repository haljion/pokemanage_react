import { VFC } from 'react';
import { Divider, List, ListItem, ListItemText } from '@mui/material';
import { UserPoke } from '../../utils/types';

const WazaList: VFC<{ userPoke: UserPoke }> = ({ userPoke }) => (
  <List
    sx={{
      width: '100%',
      bgcolor: 'background.paper',
    }}
  >
    <Divider />
    <ListItem>
      <ListItemText primary={userPoke.waza1.name} />
    </ListItem>
    <Divider light />
    <ListItem>
      <ListItemText primary={userPoke.waza2.name} />
    </ListItem>
    <Divider light />
    <ListItem>
      <ListItemText primary={userPoke.waza3.name} />
    </ListItem>
    <Divider light />
    <ListItem>
      <ListItemText primary={userPoke.waza4.name} />
    </ListItem>
    <Divider />
  </List>
);

export default WazaList;
