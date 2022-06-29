import { VFC } from 'react';
import { Divider, List, ListItem, ListItemText } from '@mui/material';
import { UserPoke } from '../../utils/types';
import { appConsts } from '../../utils/consts';

const AbilityAndItemList: VFC<{ userPoke: UserPoke }> = ({ userPoke }) => (
  <List
    sx={{
      width: '100%',
      bgcolor: 'background.paper',
    }}
  >
    <Divider />
    <ListItem>
      {userPoke.ability === appConsts.param.ability[1] && (
        <ListItemText primary={`特性: ${userPoke.pokemon.ability1}`} />
      )}
      {userPoke.ability === appConsts.param.ability[2] && (
        <ListItemText primary={`特性: ${userPoke.pokemon.ability2}`} />
      )}
      {userPoke.ability === appConsts.param.ability.hidden && (
        <ListItemText primary={`特性: ${userPoke.pokemon.hiddenAbility}`} />
      )}
    </ListItem>
    <Divider light />
    <ListItem>
      <ListItemText
        primary={`もちもの: ${
          userPoke.item.id !== appConsts.dropdown.itemNon
            ? userPoke.item.name
            : 'なし'
        }`}
      />
    </ListItem>
    <Divider />
  </List>
);

export default AbilityAndItemList;
