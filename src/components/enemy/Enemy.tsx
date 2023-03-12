import anemoAura from "../../assets/misc/Element_Anemo.svg";
import geoAura from "../../assets/misc/Element_Geo.svg";
import dendroAura from "../../assets/misc/Element_Dendro.svg";
import cryoAura from "../../assets/misc/Element_Cryo.svg";
import electroAura from "../../assets/misc/Element_Electro.svg";
import pyroAura from "../../assets/misc/Element_Pyro.svg";
import hydroAura from "../../assets/misc/Element_Hydro.svg";
import hilichurl from "../../assets/enemies/Enemy_Hilichurl.webp";
import { ChangeEvent } from "react";
import { enemy } from "../../models/enemy";
import { IoClose } from "react-icons/io5";

export const Enemy = ({
  updateEnemyStats,
  setEnemyAura,
  enemy,
}: enemyProps) => {
  return (
    <>
      <div className="char-stats-container">
        <div className="char-stat-container">
          <label className="char-stat-input-label" htmlFor="enemyLevel">
            Level
          </label>
          <input
            className="char-stat-input"
            id="enemyLevel"
            type="number"
            min="0"
            max="100"
            value={enemy.level}
            onChange={updateEnemyStats("level")}
          />
        </div>
        <div className="char-stat-container">
          <label className="char-stat-input-label" htmlFor="resistance">
            Resistance
          </label>
          <input
            className="char-stat-input"
            id="resistance"
            type="number"
            min="0"
            max="90"
            value={enemy.resistance}
            onChange={updateEnemyStats("resistance")}
          />
        </div>
        <div className="char-stat-container">
          <label className="char-stat-input-label" htmlFor="defReduction">
            Def Reduction
          </label>
          <input
            className="char-stat-input"
            id="defReduction"
            type="number"
            min="0"
            value={enemy.defReduction}
            onChange={updateEnemyStats("defReduction")}
          />
        </div>
        <div className="char-stat-container">
          <label className="char-stat-input-label" htmlFor="defIgnore">
            Def Ignore
          </label>
          <input
            className="char-stat-input"
            id="defIgnore"
            type="number"
            min="0"
            value={enemy.defIgnore}
            onChange={updateEnemyStats("defIgnore")}
          />
        </div>
        <div className="char-stat-container">
          <label className="char-stat-input-label" htmlFor="resShred">
            Resitance shred
          </label>
          <input
            className="char-stat-input"
            id="resShred"
            type="number"
            min="0"
            value={enemy.resShred}
            onChange={updateEnemyStats("resShred")}
          />
        </div>
      </div>

      <div className="enemy-preview-container">
        <div className="char-aura-container">
          <div className="aura-selecter">
            <img
              className={`char-aura ${
                enemy.aura === anemoAura && "selected-aura"
              }`}
              onClick={setEnemyAura(anemoAura)}
              src={anemoAura}
            ></img>
            <img
              className={`char-aura ${
                enemy.aura === geoAura && "selected-aura"
              }`}
              onClick={setEnemyAura(geoAura)}
              src={geoAura}
            ></img>
            <img
              className={`char-aura ${
                enemy.aura === dendroAura && "selected-aura"
              }`}
              onClick={setEnemyAura(dendroAura)}
              src={dendroAura}
            ></img>
            <img
              className={`char-aura ${
                enemy.aura === cryoAura && "selected-aura"
              }`}
              onClick={setEnemyAura(cryoAura)}
              src={cryoAura}
            ></img>
            <img
              className={`char-aura ${
                enemy.aura === pyroAura && "selected-aura"
              }`}
              onClick={setEnemyAura(pyroAura)}
              src={pyroAura}
            ></img>
            <img
              className={`char-aura ${
                enemy.aura === electroAura && "selected-aura"
              }`}
              onClick={setEnemyAura(electroAura)}
              src={electroAura}
            ></img>
            <img
              className={`char-aura ${
                enemy.aura === hydroAura && "selected-aura"
              }`}
              onClick={setEnemyAura(hydroAura)}
              src={hydroAura}
            ></img>
            <IoClose
              onClick={setEnemyAura("none")}
              size={22}
              style={{
                color: "rgba(0 ,0, 0, 0.4)",
                cursor: "pointer",
              }}
            />
          </div>
          {enemy.aura === "none" ? (
            <div
              className="char-aura current-aura"
              style={{
                padding: "4px",
              }}
            ></div>
          ) : (
            <img className="char-aura current-aura" src={enemy.aura}></img>
          )}
        </div>
        <div className="enemy-image-container">
          <img className="enemy-preview" src={hilichurl} />
        </div>
      </div>
      {/* <pre>{JSON.stringify(enemy, null, 2)}</pre> */}
    </>
  );
};

interface enemyProps {
  setEnemyAura: (aura: string) => () => void;
  updateEnemyStats: (
    stat: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  enemy: enemy;
}
