import { ChangeEvent, useState } from "react";
import { character, defaultCharacterValues } from "../../models/character";

import YaeMiko from "../../assets/characters/yaeMiko_full.png";
import AuraSelector from "../auraSelector/AuraSelector";

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
      <div className="char-preview-container">
        {/* <div className="char-name">Yae Miko</div> */}
        <div className="char-state-container">
          <div className="char-level-container">
            <div className="char-level">{`${character.level.label}.${character.level.value}`}</div>
            <div className="char-level-input">
              <input
                className="char-stat-input"
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
        <div className="char-image-container">
          <img className="char-preview" src={YaeMiko}></img>
        </div>
      </div>

      <div className="char-stats-container">
        {charStats.map((stat) => (
          <div className="char-stat-container">
            <label className="char-stat-input-label" htmlFor={stat}>
              {character[stat as keyof character].label}
            </label>
            <input
              className="char-stat-input"
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
