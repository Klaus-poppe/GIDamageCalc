export type enemy = {
  level: number;
  resistance: number;
  defReduction: number;
  defIgnore: number;
  resShred: number;
  aura: string;
};

export const defaultEnemyValues: enemy = {
  level: 90,
  resistance: 10,
  defReduction: 0,
  defIgnore: 0,
  resShred: 0,
  aura: "none",
};

// const enemies = {
//   hilichurl: {
//     lvl: 90,
//     hp: 24354,
//     atk: 3426,
//     def: 1000,
//     resistance: 10,
//   },
// };

// type enemy = {
//   lvl: number;
//   hp: number;
//   atk: number;
//   def: number;
//   resistance: number;
// };
