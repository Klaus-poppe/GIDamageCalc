import React, { ChangeEvent, useState } from "react";
import { defaultWeaponValues } from "../models/weapons";

const useWeapon = () => {
  const [weapon, setWeapon] = useState(defaultWeaponValues);

  const updateWeaponStats = (stat: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") return;
      setWeapon((prev) => ({
        ...prev,
        [stat]: parseFloat(e.target.value),
      }));
    };
  };

  return { weapon, updateWeaponStats };
};

export default useWeapon;
