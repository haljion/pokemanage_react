import { VFC } from 'react';
import { useQuery } from 'react-query';

import { useParams } from 'react-router';
import {
  getPersonalitys,
  getWazas,
  getItems,
  getUserPoke,
} from '../../utils/callApiFunctions';

import UserPokeEdit from '../../components/pages/UserPokeEdit.component';
import { SelectOption } from '../../utils/types';
import { getAbilityList } from '../../utils/utilFunctions';
import { appConsts } from '../../utils/consts';

const EnhancedUserPokeEdit: VFC = () => {
  const { userPokeId = '' } = useParams();

  const { data: userPoke } = useQuery('userPoke', () =>
    getUserPoke(userPokeId),
  );

  const { data: personalitys = [] } = useQuery('personalitys', () =>
    getPersonalitys(),
  );
  const { data: wazas = [] } = useQuery('wazas', () => getWazas());
  const { data: items = [] } = useQuery('items', () => getItems());

  if (!userPoke) {
    return <></>;
  }

  const abilitys: SelectOption[] = getAbilityList(userPoke.pokemon);

  return (
    <UserPokeEdit
      userPoke={userPoke}
      personalitys={personalitys}
      wazas={wazas.filter((w) => w.id !== appConsts.dropdown.wazaNon)}
      items={items}
      abilitys={abilitys}
    />
  );
};

export default EnhancedUserPokeEdit;
