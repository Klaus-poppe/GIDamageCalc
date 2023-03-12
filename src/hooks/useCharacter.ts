import { ChangeEvent, useState } from "react";
import { defaultCharacterValues } from "../models/character";

const useCharacter = () => {
  const [character, setCharacter] = useState(defaultCharacterValues);

  const updateCharacterStats = (stat: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === "") return;
      setCharacter((prev) => ({
        ...prev,
        [stat]: parseFloat(e.target.value),
      }));
    };
  };

  const setCharAura = (aura: string): any => {
    return () => {
      setCharacter((prev) => ({
        ...prev,
        aura,
      }));
    };
  };

  return { character, updateCharacterStats, setCharAura };
};

export default useCharacter;
