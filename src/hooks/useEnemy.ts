import React, { ChangeEvent, useState } from "react";
import { defaultEnemyValues, enemy } from "../models/enemy";

const useEnemy = () => {
  const [enemy, setEnemy] = useState(defaultEnemyValues);

  const updateEnemyStats = (stat: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") return;
      setEnemy((prev) => ({
        ...prev,
        [stat]: {
          ...prev[stat as keyof enemy],
          value: parseFloat(e.target.value),
        },
      }));
    };
  };

  const setEnemyAura = (aura: string): any => {
    return () => {
      setEnemy((prev) => ({
        ...prev,
        aura: {
          ...prev.aura,
          value: aura,
        },
      }));
    };
  };

  return { enemy, updateEnemyStats, setEnemyAura };
};

export default useEnemy;
