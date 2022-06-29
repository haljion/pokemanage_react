import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from 'react-query';
import { getPokemon } from './callApiFunctions';
import { appConsts } from './consts';
import { Personality, Pokemon, SelectOption, UserPoke } from './types';

// 文字列中のカタカナをひらがなに変換
export const kataToHira = (str: string): string =>
  str.replace(/[\u30A1-\u30FA]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) - 0x60),
  );

// ステータスの性格補正の有無を返す
export const getPersonalityFlag = (
  personality: Personality,
  statusVal: number,
): number => {
  let personalityFlag = appConsts.param.personality.status.default;

  if (personality.up === statusVal) {
    personalityFlag = appConsts.param.personality.status.up;
  }
  if (personality.down === statusVal) {
    personalityFlag = appConsts.param.personality.status.down;
  }

  return personalityFlag;
};

// 性格補正によるステータスの倍率を返す
export const getRate = (
  personality: Personality,
  statusVal: number,
): number => {
  let rate: number = appConsts.param.personality.rate.default;

  if (personality.up === statusVal) {
    rate = appConsts.param.personality.rate.up;
  }
  if (personality.down === statusVal) {
    rate = appConsts.param.personality.rate.down;
  }

  return rate;
};

// Hの実数値計算
export const getStatusH = (
  variousta: number,
  individualValue: number,
  effortValue: number,
): number =>
  Math.floor(
    (variousta * 2 + Number(individualValue) + Math.floor(effortValue / 4)) / 2,
  ) + 60;

// A, B, C, D, Sの実数値計算
export const getStatusAS = (
  variousta: number,
  individualValue: number,
  effortValue: number,
  rate: number,
): number =>
  Math.floor(
    (Math.floor(
      (variousta * 2 + Number(individualValue) + Math.floor(effortValue / 4)) /
        2,
    ) +
      5) *
      rate,
  );

// 実数値を取得する
export const getStatus = (userPoke: UserPoke, statusVal: number): number => {
  // case H
  if (statusVal === appConsts.param.status.H) {
    return getStatusH(
      userPoke.pokemon.varioustaH,
      userPoke.individualValueH,
      userPoke.effortValueH,
    );
  }

  // case ABCDS
  const rate = getRate(userPoke.personality, statusVal);
  let variousta = 0;
  let individualValue = 0;
  let effortValue = 0;

  if (statusVal === appConsts.param.status.A) {
    variousta = userPoke.pokemon.varioustaA;
    individualValue = userPoke.individualValueA;
    effortValue = userPoke.effortValueA;
  } else if (statusVal === appConsts.param.status.B) {
    variousta = userPoke.pokemon.varioustaB;
    individualValue = userPoke.individualValueB;
    effortValue = userPoke.effortValueB;
  } else if (statusVal === appConsts.param.status.C) {
    variousta = userPoke.pokemon.varioustaC;
    individualValue = userPoke.individualValueC;
    effortValue = userPoke.effortValueC;
  } else if (statusVal === appConsts.param.status.D) {
    variousta = userPoke.pokemon.varioustaD;
    individualValue = userPoke.individualValueD;
    effortValue = userPoke.effortValueD;
  } else if (statusVal === appConsts.param.status.S) {
    variousta = userPoke.pokemon.varioustaS;
    individualValue = userPoke.individualValueS;
    effortValue = userPoke.effortValueS;
  }

  return getStatusAS(variousta, individualValue, effortValue, rate);
};

export const getUserId = (): string => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useAuth0();
  if (!user || !user.sub) {
    return '';
  }

  return user.sub;
};

export const getAbilityList = (pokemon: Pokemon): SelectOption[] => {
  const abilitys: SelectOption[] = [
    { label: pokemon.ability1, value: appConsts.param.ability[1] },
  ];

  if (pokemon.ability2) {
    abilitys.push({
      label: pokemon.ability2,
      value: appConsts.param.ability[2],
    });
  }
  if (pokemon.hiddenAbility) {
    abilitys.push({
      label: pokemon.hiddenAbility,
      value: appConsts.param.ability.hidden,
    });
  }

  return abilitys;
};

export const getAbilitys = (pokemonId: number): SelectOption[] => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: pokemon } = useQuery(
    [pokemonId, 'pokemon'],
    () => getPokemon(String(pokemonId)),
    {
      enabled: !!pokemonId,
    },
  );

  if (!pokemon) {
    return [];
  }

  const selectAbilitys: SelectOption[] = getAbilityList(pokemon);

  return selectAbilitys;
};

// リスト内に重複する項目がなければ True, あれば False を返す
export const checkDuplicate = (list: number[]): boolean =>
  new Set(list).size === list.length;

// UserPokeのリストをidでsortする
export const sortUserPokesById = (userPokes: UserPoke[]): UserPoke[] =>
  userPokes.sort((u1, u2) => {
    if (u1.id > u2.id) {
      return 1;
    }

    if (u1.id < u2.id) {
      return -1;
    }

    return 0;
  });
