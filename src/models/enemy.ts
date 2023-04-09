export type enemy = {
  level: { label: string; value: number };
  resistance: { label: string; value: number };
  defReduction: { label: string; value: number };
  defIgnore: { label: string; value: number };
  resShred: { label: string; value: number };
  aura: { label: string; value: string };
};

export const defaultEnemyValues: enemy = {
  level: { label: "Lvl", value: 90 },
  resistance: { label: "Resistance", value: 10 },
  defReduction: { label: "Def Reduction", value: 0 },
  defIgnore: { label: "Def Ignore", value: 0 },
  resShred: { label: "Res Shred", value: 0 },
  aura: { label: "Aura", value: "none" },
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
