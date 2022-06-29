import { FieldError } from 'react-hook-form';

export type LoginUser = {
  id: number;
  username: string;
  password: string;
};

export type LoginInfo = {
  username: string;
  password: string;
};

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  type1: string;
  type2: string;
  ability1: string;
  ability2: string;
  hiddenAbility: string;
  genderFlag: number;
  varioustaH: number;
  varioustaA: number;
  varioustaB: number;
  varioustaC: number;
  varioustaD: number;
  varioustaS: number;
};

export type Ball = {
  id: number;
  name: string;
  image: string;
};

export type Item = {
  id: number;
  name: string;
  image: string;
};

export type Personality = {
  id: number;
  name: string;
  up: number;
  down: number;
};

export type Waza = {
  id: number;
  name: string;
  wazaType: string;
  various: string;
};

export type SelectOption = { label: string; value: string };

export type UserPoke = {
  id: number;
  userId: string;
  pokemon: Pokemon;
  nickname: string;
  gender: number;
  ball: Ball;
  color: number;
  ability: string;
  personality: Personality;
  individualValueH: number;
  individualValueA: number;
  individualValueB: number;
  individualValueC: number;
  individualValueD: number;
  individualValueS: number;
  effortValueH: number;
  effortValueA: number;
  effortValueB: number;
  effortValueC: number;
  effortValueD: number;
  effortValueS: number;
  waza1: Waza;
  waza2: Waza;
  waza3: Waza;
  waza4: Waza;
  item: Item;
  remarks: string;
};

export type UserPokeForm = {
  id: number;
  userId: string;
  pokemon: Pokemon;
  nickname: string;
  gender: string;
  ball: Ball;
  color: string;
  ability: SelectOption;
  personality: Personality;
  individualValueH: number;
  individualValueA: number;
  individualValueB: number;
  individualValueC: number;
  individualValueD: number;
  individualValueS: number;
  effortValueH: number;
  effortValueA: number;
  effortValueB: number;
  effortValueC: number;
  effortValueD: number;
  effortValueS: number;
  waza1: Waza;
  waza2: Waza;
  waza3: Waza;
  waza4: Waza;
  item: Item;
  remarks: string;
};

export type FormError = {
  id?: FieldError | undefined;
  userId?: FieldError | undefined;
  pokemon?: {
    id?: FieldError | undefined;
    name?: FieldError | undefined;
    image?: FieldError | undefined;
    type1?: FieldError | undefined;
    type2?: FieldError | undefined;
    ability1?: FieldError | undefined;
    ability2?: FieldError | undefined;
    hiddenAbility?: FieldError | undefined;
    genderFlag?: FieldError | undefined;
    varioustaH?: FieldError | undefined;
    varioustaA?: FieldError | undefined;
    varioustaB?: FieldError | undefined;
    varioustaC?: FieldError | undefined;
    varioustaD?: FieldError | undefined;
    varioustaS?: FieldError | undefined;
  };
  nickname?: FieldError | undefined;
  gender?: FieldError | undefined;
  ball?: {
    id?: FieldError | undefined;
    name?: FieldError | undefined;
    image?: FieldError | undefined;
  };
  color?: FieldError | undefined;
  ability?: { label?: FieldError | undefined; value?: FieldError | undefined };
  personality?: {
    id?: FieldError | undefined;
    name?: FieldError | undefined;
    up?: FieldError | undefined;
    down?: FieldError | undefined;
  };
  individualValueH?: FieldError | undefined;
  individualValueA?: FieldError | undefined;
  individualValueB?: FieldError | undefined;
  individualValueC?: FieldError | undefined;
  individualValueD?: FieldError | undefined;
  individualValueS?: FieldError | undefined;
  effortValueH?: FieldError | undefined;
  effortValueA?: FieldError | undefined;
  effortValueB?: FieldError | undefined;
  effortValueC?: FieldError | undefined;
  effortValueD?: FieldError | undefined;
  effortValueS?: FieldError | undefined;
  waza1?: {
    id?: FieldError | undefined;
    name?: FieldError | undefined;
    wazaType?: FieldError | undefined;
    various?: FieldError | undefined;
  };
  waza2?: {
    id?: FieldError | undefined;
    name?: FieldError | undefined;
    wazaType?: FieldError | undefined;
    various?: FieldError | undefined;
  };
  waza3?: {
    id?: FieldError | undefined;
    name?: FieldError | undefined;
    wazaType?: FieldError | undefined;
    various?: FieldError | undefined;
  };
  waza4?: {
    id?: FieldError | undefined;
    name?: FieldError | undefined;
    wazaType?: FieldError | undefined;
    various?: FieldError | undefined;
  };
  item?: {
    id?: FieldError | undefined;
    name?: FieldError | undefined;
    image?: FieldError | undefined;
  };
  remarks?: FieldError | undefined;
};
