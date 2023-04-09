import { buff, stat } from "./character";

export type weapon = {
  level: { label: string; value: number };
  refinement: { label: string; value: refinement };
  mainStat: { label: string; value: number };
  substat: {
    stat: stat;
    label: string;
    value: number;
  };
  passive: buff[];
};

export const defaultWeaponValues: weapon = {
  level: { label: "Lvl", value: 20 },
  refinement: { label: "Refinement", value: 1 },
  mainStat: { label: "Atk", value: 100 },
  substat: {
    stat: "atkPercent",
    label: "Atk %",
    value: 0,
  },
  passive: [
    {
      status: true,
      stat: "em",
      label: "EM",
      value: 0,
    },
    {
      status: true,
      stat: "atkPercent",
      label: "Atk %",
      value: 0,
    },
  ],
};

export type refinement = 1 | 2 | 3 | 4 | 5;

// const weapons = {
//   widsith: {
//     lvl: 90,
//     refinement: 5,
//     mainStat: 510,
//     subStat: {
//       stat: "cDamage",
//       value: "55.1",
//     },
//     passive: {
//       status: "active",
//       stat: "em",
//       value: 480,
//     },
//   },
// };
