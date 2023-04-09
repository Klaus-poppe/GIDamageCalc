export type character = {
  level: { label: string; value: number };
  baseAtk: { label: string; value: number };
  baseHp: { label: string; value: number };
  hp: { label: string; value: number };
  atk: { label: string; value: number };
  em: { label: string; value: number };
  baseDef: { label: string; value: number };
  def: { label: string; value: number };
  cRate: { label: string; value: number };
  cDamage: { label: string; value: number };
  dmgBonus: { label: string; value: number };
  skillMultiplier: { label: string; value: number };
  atkPercent: { label: string; value: number };
  defPercent: { label: string; value: number };
  hpPercent: { label: string; value: number };
  flatAtkBonus: { label: string; value: number };
  flatEmBonus: { label: string; value: number };
  aura: { label: string; value: string };
  flatDmgBonus: { label: string; value: number };
  constellation: { label: string; value: constellation };
};

export const defaultCharacterValues: character = {
  level: { label: "Lvl", value: 90 },
  baseAtk: { label: "Base Atk", value: 0 },
  baseHp: { label: "Base Hp", value: 0 },
  hp: { label: "Base Atk", value: 0 },
  atk: { label: "Atk", value: 0 },
  em: { label: "EM", value: 0 },
  baseDef: { label: "Base Def", value: 0 },
  def: { label: "Def", value: 0 },
  cRate: { label: "Crit Rate", value: 0 },
  cDamage: { label: "Crit Damage", value: 0 },
  dmgBonus: { label: "Damage Bonus", value: 0 },
  skillMultiplier: { label: "Skill Multiplier", value: 0 },
  atkPercent: { label: "Atk%", value: 0 },
  defPercent: { label: "Def%", value: 0 },
  hpPercent: { label: "Hp%", value: 0 },
  flatAtkBonus: { label: "Flat Atk Bonus", value: 0 },
  flatEmBonus: { label: "Flat EM Bonus", value: 0 },
  aura: { label: "Aura", value: "none" },
  flatDmgBonus: { label: "Flat Damage Bonus", value: 0 },
  constellation: { label: "Constellation", value: 0 },
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
  label: string;
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
