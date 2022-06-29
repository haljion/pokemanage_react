import { VFC } from 'react';
import { Divider, List, ListItem, ListItemText } from '@mui/material';
import { UserPoke } from '../../utils/types';
import { appConsts } from '../../utils/consts';
import UserPokeStatus from '../../containers/atoms/UserPokeStatus.container';

const StatusList: VFC<{ userPoke: UserPoke }> = ({ userPoke }) => (
  <List
    sx={{
      width: '100%',
      bgcolor: 'background.paper',
    }}
  >
    <Divider />
    <ListItem>
      <ListItemText primary={`性格: ${userPoke.personality.name}`} />
    </ListItem>
    <Divider />
    <ListItem>
      <ListItemText
        primary={`個体値: ${userPoke.individualValueH}-${userPoke.individualValueA}-${userPoke.individualValueB}-${userPoke.individualValueC}-${userPoke.individualValueD}-${userPoke.individualValueS}`}
      />
    </ListItem>
    <Divider />
    <ListItem>
      <ListItemText
        primary={`努力値: ${userPoke.effortValueH}-${userPoke.effortValueA}-${userPoke.effortValueB}-${userPoke.effortValueC}-${userPoke.effortValueD}-${userPoke.effortValueS}`}
      />
    </ListItem>
    <Divider />
    <ListItem>
      実数値:
      <UserPokeStatus
        userPoke={userPoke}
        statusVal={appConsts.param.status.H}
      />
      -
      <UserPokeStatus
        userPoke={userPoke}
        statusVal={appConsts.param.status.A}
      />
      -
      <UserPokeStatus
        userPoke={userPoke}
        statusVal={appConsts.param.status.B}
      />
      -
      <UserPokeStatus
        userPoke={userPoke}
        statusVal={appConsts.param.status.C}
      />
      -
      <UserPokeStatus
        userPoke={userPoke}
        statusVal={appConsts.param.status.D}
      />
      -
      <UserPokeStatus
        userPoke={userPoke}
        statusVal={appConsts.param.status.S}
      />
    </ListItem>
    <Divider />
  </List>
);

export default StatusList;
