const emMultipliers = {
  1: { x: 2.78, y: 1400 },
  2: { x: 16, y: 2000 },
  3: { x: 5, y: 1200 },
  4: { x: 4.44, y: 1400 },
};

export const getEmBonus = (em: number) => {
  return {
    1: emMultipliers[1].x * (em / (em + emMultipliers[1].y)) * 100,
    2: emMultipliers[2].x * (em / (em + emMultipliers[2].y)) * 100,
    3: emMultipliers[3].x * (em / (em + emMultipliers[3].y)) * 100,
    4: emMultipliers[4].x * (em / (em + emMultipliers[4].y)) * 100,
  };
};
