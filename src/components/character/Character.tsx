import { ChangeEvent, useState } from "react";
import { character, defaultCharacterValues } from "../../models/character";
import anemoAura from "../../assets/misc/Element_Anemo.svg";
import geoAura from "../../assets/misc/Element_Geo.svg";
import dendroAura from "../../assets/misc/Element_Dendro.svg";
import cryoAura from "../../assets/misc/Element_Cryo.svg";
import electroAura from "../../assets/misc/Element_Electro.svg";
import pyroAura from "../../assets/misc/Element_Pyro.svg";
import hydroAura from "../../assets/misc/Element_Hydro.svg";
import YaeMiko from "../../assets/characters/yaeMiko_full.png";
import { IoClose } from "react-icons/io5";

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
        <div className="char-aura-container">
          <div className="aura-selecter">
            <img
              className={`char-aura ${
                character.aura === anemoAura && "selected-aura"
              }`}
              onClick={setCharAura(anemoAura)}
              src={anemoAura}
            ></img>
            <img
              className={`char-aura ${
                character.aura === geoAura && "selected-aura"
              }`}
              onClick={setCharAura(geoAura)}
              src={geoAura}
            ></img>
            <img
              className={`char-aura ${
                character.aura === dendroAura && "selected-aura"
              }`}
              onClick={setCharAura(dendroAura)}
              src={dendroAura}
            ></img>
            <img
              className={`char-aura ${
                character.aura === cryoAura && "selected-aura"
              }`}
              onClick={setCharAura(cryoAura)}
              src={cryoAura}
            ></img>
            <img
              className={`char-aura ${
                character.aura === pyroAura && "selected-aura"
              }`}
              onClick={setCharAura(pyroAura)}
              src={pyroAura}
            ></img>
            <img
              className={`char-aura ${
                character.aura === electroAura && "selected-aura"
              }`}
              onClick={setCharAura(electroAura)}
              src={electroAura}
            ></img>
            <img
              className={`char-aura ${
                character.aura === hydroAura && "selected-aura"
              }`}
              onClick={setCharAura(hydroAura)}
              src={hydroAura}
            ></img>
            <IoClose
              onClick={setCharAura("none")}
              size={22}
              style={{
                color: "rgba(0 ,0, 0, 0.4)",
                cursor: "pointer",
              }}
            />
          </div>
          {character.aura === "none" ? (
            <div
              className="char-aura current-aura"
              style={{
                padding: "4px",
              }}
            ></div>
          ) : (
            <img className="char-aura current-aura" src={character.aura}></img>
          )}
        </div>
        <div className="char-image-container">
          <img className="char-preview" src={YaeMiko}></img>
        </div>
      </div>

      <div className="char-stats-container">
        <div className="char-stat-container">
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
        </div>
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
