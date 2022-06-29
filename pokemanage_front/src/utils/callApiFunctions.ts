import ky, { Options } from 'ky';
import { DEFAULT_API_OPTIONS, NO_RESPONSE_API_OPTIONS } from './config';
import { appConsts } from './consts';
import {
  isBalls,
  isItems,
  isPersonalities,
  isPokemon,
  isPokemons,
  isWazas,
} from './typeCheckFunctions';
import {
  Ball,
  Item,
  Personality,
  Pokemon,
  UserPoke,
  UserPokeForm,
  Waza,
} from './types';

export const getPokemon = async (
  pokemonId: string,
  options?: Options,
): Promise<Pokemon> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(`pokemon/${pokemonId}/`, mergedOptions);
  const pokemon = (await response.json()) as unknown;

  if (!isPokemon(pokemon)) {
    throw Error('API type error');
  }

  return pokemon;
};

export const getPokemons = async (options?: Options): Promise<Pokemon[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get('pokemons/', mergedOptions);
  const pokemons = (await response.json()) as unknown[];

  if (!isPokemons(pokemons)) {
    throw Error('API type error');
  }

  return pokemons;
};

export const getBalls = async (options?: Options): Promise<Ball[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get('balls/', mergedOptions);
  const balls = (await response.json()) as unknown[];

  if (!isBalls(balls)) {
    throw Error('API type error');
  }

  return balls;
};

export const getPersonalitys = async (
  options?: Options,
): Promise<Personality[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get('personalities/', mergedOptions);
  const personalities = (await response.json()) as unknown[];

  if (!isPersonalities(personalities)) {
    throw Error('API type error');
  }

  return personalities;
};

export const getItems = async (options?: Options): Promise<Item[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get('items/', mergedOptions);
  const items = (await response.json()) as unknown[];

  if (!isItems(items)) {
    throw Error('API type error');
  }

  return items;
};

export const getWazas = async (options?: Options): Promise<Waza[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get('wazas/', mergedOptions);
  const wazas = (await response.json()) as unknown[];

  if (!isWazas(wazas)) {
    throw Error('API type error');
  }

  return wazas;
};

export const getUserPoke = async (
  userPokeId: string,
  options?: Options,
): Promise<UserPoke> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  const response = await ky.get(`userpoke/${userPokeId}/`, mergedOptions);
  const userPoke = (await response.json()) as UserPoke;

  // if (!isUserPoke(userPoke)) {
  //   throw Error('API type error');
  // }

  return userPoke;
};

export const getUserPokes = async (
  userId: string,
  options?: Options,
): Promise<UserPoke[]> => {
  const mergedOptions = {
    ...DEFAULT_API_OPTIONS,
    ...options,
  };
  // sessionからid取る
  const response = await ky.get(`userpoke/?user_id=${userId}`, mergedOptions);
  const userPokes = (await response.json()) as UserPoke[];

  // if (!isUserPokes(userPoke)) {
  //   throw Error('API type error');
  // }

  return userPokes;
};

export const postUserPoke = async (formData: UserPokeForm): Promise<void> => {
  const mergedOptions = {
    ...NO_RESPONSE_API_OPTIONS,
    json: {
      user_id: formData.userId,
      pokemon_id: formData.pokemon.id,
      nickname: formData.nickname,
      gender:
        formData.pokemon.genderFlag === appConsts.param.gender.flag.true
          ? Number(formData.gender)
          : Number(appConsts.param.gender.none),
      ball_id: formData.ball.id,
      color: Number(formData.color),
      ability: formData.ability.value,
      personality_id: formData.personality.id,
      individual_value_h: formData.individualValueH,
      individual_value_a: formData.individualValueA,
      individual_value_b: formData.individualValueB,
      individual_value_c: formData.individualValueC,
      individual_value_d: formData.individualValueD,
      individual_value_s: formData.individualValueS,
      effort_value_h: formData.effortValueH,
      effort_value_a: formData.effortValueA,
      effort_value_b: formData.effortValueB,
      effort_value_c: formData.effortValueC,
      effort_value_d: formData.effortValueD,
      effort_value_s: formData.effortValueS,
      waza1_id: formData.waza1.id,
      waza2_id: formData.waza2?.id || appConsts.dropdown.wazaNon,
      waza3_id: formData.waza3?.id || appConsts.dropdown.wazaNon,
      waza4_id: formData.waza4?.id || appConsts.dropdown.wazaNon,
      item_id: formData.item?.id || appConsts.dropdown.itemNon,
      remarks: formData.remarks,
    },
  };
  const _ = await ky.post('userpoke/', mergedOptions).json();
};

export const patchUserPoke = async (formData: UserPokeForm): Promise<void> => {
  const mergedOptions = {
    ...NO_RESPONSE_API_OPTIONS,
    json: {
      nickname: formData.nickname,
      ability: formData.ability.value,
      personality_id: formData.personality.id,
      individual_value_h: formData.individualValueH,
      individual_value_a: formData.individualValueA,
      individual_value_b: formData.individualValueB,
      individual_value_c: formData.individualValueC,
      individual_value_d: formData.individualValueD,
      individual_value_s: formData.individualValueS,
      effort_value_h: formData.effortValueH,
      effort_value_a: formData.effortValueA,
      effort_value_b: formData.effortValueB,
      effort_value_c: formData.effortValueC,
      effort_value_d: formData.effortValueD,
      effort_value_s: formData.effortValueS,
      waza1_id: formData.waza1.id,
      waza2_id: formData.waza2?.id || appConsts.dropdown.wazaNon,
      waza3_id: formData.waza3?.id || appConsts.dropdown.wazaNon,
      waza4_id: formData.waza4?.id || appConsts.dropdown.wazaNon,
      item_id: formData.item?.id || appConsts.dropdown.itemNon,
      remarks: formData.remarks,
    },
  };

  const _ = await ky.patch(`userpoke/${formData.id}/`, mergedOptions).json();
};

export const deleteUserPoke = async (
  userPokeId: string,
  options?: Options,
): Promise<void> => {
  const mergedOptions = {
    ...NO_RESPONSE_API_OPTIONS,
    ...options,
  };

  const _ = await ky.delete(`userpoke/${userPokeId}/`, mergedOptions);
};
