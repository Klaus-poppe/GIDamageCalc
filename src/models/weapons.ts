import { buff, stat } from "./character";

export type weapon = {
  level: number;
  refinement: 1 | 2 | 3 | 4 | 5;
  mainStat: number;
  substat: {
    stat: stat;
    value: number;
  };
  passive: buff[];
};

export const defaultWeaponValues: weapon = {
  level: 0,
  refinement: 1,
  mainStat: 100,
  substat: {
    stat: "atkPercent",
    value: 0,
  },
  passive: [
    {
      status: true,
      stat: "em",
      value: 0,
    },
  ],
};

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
