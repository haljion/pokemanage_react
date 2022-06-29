import { Ball, Item, Personality, Pokemon, UserPoke, Waza } from './types';

export const isPokemon = (arg: unknown): arg is Pokemon => {
  const p = arg as Pokemon;

  return (
    typeof p?.id === 'number' &&
    typeof p?.name === 'string' &&
    typeof p?.image === 'string' &&
    typeof p?.type1 === 'string' &&
    typeof p?.type2 === 'string' &&
    typeof p?.ability1 === 'string' &&
    typeof p?.ability2 === 'string' &&
    typeof p?.hiddenAbility === 'string' &&
    typeof p?.genderFlag === 'number' &&
    typeof p?.varioustaH === 'number' &&
    typeof p?.varioustaA === 'number' &&
    typeof p?.varioustaB === 'number' &&
    typeof p?.varioustaC === 'number' &&
    typeof p?.varioustaD === 'number' &&
    typeof p?.varioustaS === 'number'
  );
};

export const isPokemons = (args: unknown[]): args is Pokemon[] =>
  !args.some((arg) => !isPokemon(arg));

export const isBall = (arg: unknown): arg is Ball => {
  const b = arg as Ball;

  return (
    typeof b?.id === 'number' &&
    typeof b?.name === 'string' &&
    typeof b?.image === 'string'
  );
};

export const isBalls = (args: unknown[]): args is Ball[] =>
  !args.some((arg) => !isBall(arg));

export const isItem = (arg: unknown): arg is Item => {
  const b = arg as Item;

  return (
    typeof b?.id === 'number' &&
    typeof b?.name === 'string' &&
    typeof b?.image === 'string'
  );
};

export const isItems = (args: unknown[]): args is Item[] =>
  !args.some((arg) => !isItem(arg));

export const isPersonality = (arg: unknown): arg is Personality => {
  const b = arg as Personality;

  return (
    typeof b?.id === 'number' &&
    typeof b?.name === 'string' &&
    typeof b?.up === 'number' &&
    typeof b?.down === 'number'
  );
};

export const isPersonalities = (args: unknown[]): args is Personality[] =>
  !args.some((arg) => !isPersonality(arg));

export const isWaza = (arg: unknown): arg is Waza => {
  const b = arg as Waza;

  return (
    typeof b?.id === 'number' &&
    typeof b?.name === 'string' &&
    typeof b?.wazaType === 'string' &&
    typeof b?.various === 'number'
  );
};

export const isWazas = (args: unknown[]): args is Waza[] =>
  !args.some((arg) => !isWaza(arg));

export const isUserPoke = (arg: unknown): arg is UserPoke => {
  const p = arg as UserPoke;

  return (
    typeof p?.id === 'number' &&
    typeof p?.userId === 'string' &&
    isPokemon(p?.pokemon) &&
    typeof p?.nickname === 'string' &&
    typeof p?.gender === 'string' &&
    isBall(p?.ball) &&
    typeof p?.color === 'string' &&
    typeof p?.ability === 'string' &&
    isPersonality(p?.personality) &&
    typeof p?.individualValueH === 'number' &&
    typeof p?.individualValueA === 'number' &&
    typeof p?.individualValueB === 'number' &&
    typeof p?.individualValueC === 'number' &&
    typeof p?.individualValueD === 'number' &&
    typeof p?.individualValueS === 'number' &&
    typeof p?.effortValueH === 'number' &&
    typeof p?.effortValueA === 'number' &&
    typeof p?.effortValueB === 'number' &&
    typeof p?.effortValueC === 'number' &&
    typeof p?.effortValueD === 'number' &&
    typeof p?.effortValueS === 'number' &&
    isWaza(p?.waza1) &&
    isWaza(p?.waza2) &&
    isWaza(p?.waza3) &&
    isWaza(p?.waza4) &&
    isItem(p?.item)
  );
};

export const isUserPokes = (args: unknown[]): args is UserPoke[] =>
  !args.some((arg) => !isUserPoke(arg));
