export type character = {
  level: number;
  baseAtk: number;
  baseHp: number;
  hp: number;
  atk: number;
  em: number;
  baseDef: number;
  def: number;
  cRate: number;
  cDamage: number;
  dmgBonus: number;
  skillMultiplier: number;
  atkPercent: number;
  defPercent: number;
  hpPercent: number;
  flatAtkBonus: number;
  flatEmBonus: number;
  aura: string;
  flatDmgBonus: number;
  constellation: constellation;
};

export const defaultCharacterValues: character = {
  level: 90,
  baseAtk: 0,
  baseHp: 0,
  hp: 0,
  atk: 0,
  em: 0,
  baseDef: 0,
  def: 0,
  cRate: 0,
  cDamage: 0,
  dmgBonus: 0,
  skillMultiplier: 0,
  atkPercent: 0,
  defPercent: 0,
  hpPercent: 0,
  flatAtkBonus: 0,
  flatEmBonus: 0,
  aura: "none",
  flatDmgBonus: 0,
  constellation: 0,
};

export type stat =
  | "flatAtkBonus"
  | "em"
  | "flatEmBonus"
  | "flatDmgBonus"
  | "cRate"
  | "cDamage"
  | "dmgBonus"
  | "atkPercent"
  | "defPercent"
  | "hpPercent";

export type buff = {
  status: boolean;
  stat: stat;
  value: number;
};

export type constellation = 0 | 1 | 2 | 3 | 4 | 5 | 6;

// type character = {
//   bHp: number;
//   lvl: number;
//   bAtk: number;
//   bDef: number;
//   em: number;
//   er: number;
//   cRate: number;
//   cDamge: number;
//   atkPercent: number;
//   dmgBonus: number;
//   atk: Function;
// };

// type characters = {
//   [charName: string]: character;
// };

// const characters: characters = {
//   yae: {
//     lvl: 90,
//     bHp: 10372,
//     bAtk: 339,
//     bDef: 568,
//     em: 0,
//     er: 100,
//     cRate: 24.2,
//     cDamge: 50,
//     dmgBonus: 0,
//     atkPercent: 50,
//     atk: function () {
//       return this.bAtk * (1 + this.atkPercent / 100);
//     },
//   },
