import { ChangeEvent, useState } from "react";
import { character, defaultCharacterValues } from "../../models/character";

import YaeMiko from "../../assets/characters/yaeMiko_full.png";
import AuraSelector from "../auraSelector/AuraSelector";

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
            <div className="char-level">{`Lvl.${character.level}`}</div>
            <div className="char-level-input">
              <input
                className="char-stat-input"
                id="charLevel"
                type="number"
                min="0"
                max="90"
                value={character.level}
                onChange={updateCharacterStats("level")}
              />
            </div>
          </div>

          <AuraSelector aura={character.aura} setAura={setCharAura} />
        </div>
        <div className="char-image-container">
          <img className="char-preview" src={YaeMiko}></img>
        </div>
      </div>

      <div className="char-stats-container">
        {/* <div className="char-stat-container">
          <label className="char-stat-input-label" htmlFor="charLevel">
            Level
          </label>
          <input
            className="char-stat-input"
            id="charLevel"
            type="number"
            min="0"
            max="90"
            value={character.level}
            onChange={updateCharacterStats("level")}
          />
        </div> */}
        <div className="char-stat-container">
          <label className="char-stat-input-label" htmlFor="baseAtk">
            Base atk
          </label>
          <input
            className="char-stat-input"
            id="baseAtk"
            type="number"
            min="0"
            value={character.baseAtk}
            onChange={updateCharacterStats("baseAtk")}
          />
        </div>
        <div className="char-stat-container">
          <label className="char-stat-input-label" htmlFor="atk">
            Atk
          </label>
          <input
            className="char-stat-input"
            id="atk"
            type="number"
            min="0"
            value={character.atk}
            onChange={updateCharacterStats("atk")}
          />
        </div>
        <div className="char-stat-container">
          <label className="char-stat-input-label" htmlFor="em">
            Em
          </label>
          <input
            className="char-stat-input"
            id="em"
            type="number"
            min="0"
            value={character.em}
            onChange={updateCharacterStats("em")}
          />
        </div>
        <div className="char-stat-container">
          <label className="char-stat-input-label" htmlFor="cRate">
            Crit Rate
          </label>
          <input
            className="char-stat-input"
            id="cRate"
            type="number"
            min="0"
            value={character.cRate}
            onChange={updateCharacterStats("cRate")}
          />
        </div>
        <div className="char-stat-container">
          <label className="char-stat-input-label" htmlFor="cDamage">
            Crit Damage
          </label>
          <input
            className="char-stat-input"
            id="cDamage"
            type="number"
            min="0"
            value={character.cDamage}
            onChange={updateCharacterStats("cDamage")}
          />
        </div>
        <div className="char-stat-container">
          <label className="char-stat-input-label" htmlFor="dmgBonus">
            Damage Bonus
          </label>
          <input
            className="char-stat-input"
            id="dmgBonus"
            type="number"
            min="0"
            value={character.dmgBonus}
            onChange={updateCharacterStats("dmgBonus")}
          />
        </div>
        <div className="char-stat-container">
          <label className="char-stat-input-label" htmlFor="skillMultiplier">
            Skill Multiplier
          </label>
          <input
            className="char-stat-input"
            id="skillMultiplier"
            type="number"
            min="0"
            value={character.skillMultiplier}
            onChange={updateCharacterStats("skillMultiplier")}
          />
        </div>
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
