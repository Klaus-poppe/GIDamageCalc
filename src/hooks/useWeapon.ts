import React, { ChangeEvent, MouseEventHandler, useState } from "react";
import { defaultWeaponValues, refinement, weapon } from "../models/weapons";

const useWeapon = () => {
  const [weapon, setWeapon] = useState(defaultWeaponValues);

  const updateWeaponStats = (stat: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") return;
      setWeapon((prev) => ({
        ...prev,
        [stat]: {
          ...prev[stat as keyof weapon],
          value: parseFloat(e.target.value),
        },
      }));
    };
  };

  const updateWeaponRefinement = (refinement: refinement) => {
    return () => {
      setWeapon((prev) => ({
        ...prev,
        refinement: {
          ...prev.refinement,
          value: refinement,
        },
      }));
    };
  };

  const updateWeaponPassive = (passiveIndex: number) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") return;
      setWeapon((prev) => ({
        ...prev,
        passive: [
          ...prev.passive.map((passive, index) => {
            if (index === passiveIndex) {
              passive.value = parseFloat(e.target.value);
            }
            return passive;
          }),
        ],
      }));
    };
  };

  return {
    weapon,
    updateWeaponStats,
    updateWeaponRefinement,
    updateWeaponPassive,
  };
};

export default useWeapon;
