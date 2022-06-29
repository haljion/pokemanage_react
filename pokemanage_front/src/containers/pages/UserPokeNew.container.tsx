import { VFC } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';
import {
  getPersonalitys,
  getWazas,
  getItems,
  getPokemons,
  getBalls,
  postUserPoke,
} from '../../utils/callApiFunctions';

import UserPokeNew from '../../components/pages/UserPokeNew.component';
import { getUserId } from '../../utils/utilFunctions';
import { appConsts } from '../../utils/consts';
import { UserPokeForm } from '../../utils/types';

const EnhancedUserPokeNew: VFC = () => {
  const userId = getUserId();

  const { data: pokemons = [] } = useQuery('pokemons', () => getPokemons());
  const { data: balls = [] } = useQuery('balls', () => getBalls());
  const { data: personalitys = [] } = useQuery('personalitys', () =>
    getPersonalitys(),
  );
  const { data: wazas = [] } = useQuery('wazas', () => getWazas());
  const { data: items = [] } = useQuery('items', () => getItems());

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const onClickRoot = () => {
    navigate(appConsts.url.root);
  };

  const { mutate } = useMutation((f: UserPokeForm) => postUserPoke(f), {
    onSuccess: () => {
      void queryClient.resetQueries('userPokes');
    },
  });

  const onSubmit: SubmitHandler<UserPokeForm> = (formData) => {
    mutate(formData);
    navigate(appConsts.url.root, { replace: true });
  };

  const {
    control,
    watch,
    handleSubmit,
    resetField,
    getValues,
    formState: { errors },
  } = useForm<UserPokeForm>({
    defaultValues: {
      pokemon: pokemons[0],
      nickname: '',
      gender: '1',
      ball: balls[appConsts.dropdown.ballMonster],
      color: '0',
      personality: personalitys[0],
      individualValueH: 31,
      individualValueA: 31,
      individualValueB: 31,
      individualValueC: 31,
      individualValueD: 31,
      individualValueS: 31,
      effortValueH: 0,
      effortValueA: 0,
      effortValueB: 0,
      effortValueC: 0,
      effortValueD: 0,
      effortValueS: 0,
      waza1: wazas[0],
      remarks: '',
    },
  });

  return (
    <UserPokeNew
      userId={userId}
      pokemons={pokemons}
      balls={balls}
      personalitys={personalitys}
      wazas={wazas.filter((w) => w.id !== appConsts.dropdown.wazaNon)}
      items={items}
      onClickRoot={onClickRoot}
      onSubmit={onSubmit}
      control={control}
      watch={watch}
      handleSubmit={handleSubmit}
      resetField={resetField}
      getValues={getValues}
      errors={errors}
    />
  );
};

export default EnhancedUserPokeNew;
