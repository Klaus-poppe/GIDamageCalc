import { ChangeEvent, useState } from "react";
import { character, defaultCharacterValues } from "../../models/character";

import YaeMiko from "../../assets/characters/yaeMiko_full.png";
import AuraSelector from "../auraSelector/AuraSelector";

import styles from "./character.module.css";

const charStats = [
  "baseAtk",
  "atk",
  "em",
  "cRate",
  "cDamage",
  "dmgBonus",
  "skillMultiplier",
];

export const Character = ({
  setCharAura,
  updateCharacterStats,
  character,
}: charProps) => {
  // const [character, setCharacter] = useState(defaultCharacterValues);

  return (
    <>
      <div className={styles["char-preview-container"]}>
        {/* <div className="char-name">Yae Miko</div> */}
        <div className="state-container">
          <div className="level-container">
            <div className="level">{`${character.level.label}.${character.level.value}`}</div>
            <div className="level-input">
              <input
                className="stat-input"
                id="charLevel"
                type="number"
                min="0"
                max="90"
                value={character.level.value}
                onChange={updateCharacterStats("level")}
              />
            </div>
          </div>

          <AuraSelector aura={character.aura.value} setAura={setCharAura} />
        </div>
        <div className={styles["char-image-container"]}>
          <img className={styles["char-preview"]} src={YaeMiko}></img>
        </div>
      </div>

      <div className="stats-container">
        {charStats.map((stat) => (
          <div className="stat-container">
            <label className="stat-input-label" htmlFor={stat}>
              {character[stat as keyof character].label}
            </label>
            <input
              className="stat-input"
              id={stat}
              type="number"
              min="0"
              value={character[stat as keyof character].value}
              onChange={updateCharacterStats(stat)}
            />
          </div>
        ))}
        {/* <pre>{JSON.stringify(character, null, 2)}</pre> */}
      </div>
    </>
  );
};

interface charProps {
  setCharAura: (aura: string) => () => void;
  updateCharacterStats: (
    stat: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  character: character;
}
