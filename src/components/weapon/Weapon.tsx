import { ChangeEvent } from "react";
import widsith from "../../assets/weapons/Weapon_The_Widsith.webp";
import { weapon } from "../../models/weapons";
import styles from "./weapon.module.css";

const Weapon = ({ weapon, updateWeaponStats }: weaponProps) => {
  return (
    <div className={styles["weapon-container"]}>
      <div className={styles["weapon-main-container"]}>
        <div className="char-level-container">
          <div className="char-level">{`Lvl.${weapon.level}`}</div>
          <div className="char-level-input">
            <input
              className="char-stat-input"
              id="weaponLevel"
              type="number"
              min="0"
              max="90"
              value={weapon.level}
              onChange={updateWeaponStats("level")}
            />
          </div>
        </div>
        <div className="char-level-container">
          <div className="char-level">{`Base Atk ${weapon.mainStat}`}</div>
          <div className="char-level-input">
            <input
              className="char-stat-input"
              id="weaponMainStat"
              type="number"
              min="0"
              max="90"
              value={weapon.mainStat}
              onChange={updateWeaponStats("mainStat")}
            />
          </div>
        </div>
        <div className="char-level-container">
          <div className="char-level">{`${weapon.substat.stat} ${weapon.substat.value}`}</div>
          <div className="char-level-input">
            <input
              className="char-stat-input"
              id="weaponSubStatValue"
              type="number"
              min="0"
              max="90"
              value={weapon.substat.value}
              onChange={updateWeaponStats("substat")}
            />
          </div>
        </div>
        <div className={styles["weapon-passive-container"]}>
          <div className="char-level">Refinement</div>
          <div className={styles["refinement-container"]}>
            <div className={styles["refinement"]}>1</div>
            <div className={styles["refinement"]}>2</div>
            <div className={styles["refinement"]}>3</div>
            <div className={styles["refinement"]}>4</div>
            <div className={styles["refinement"]}>5</div>
          </div>
          <div className="char-level">Passive</div>
          <div className={styles["passives"]}>
            {weapon.passive.map((passive, index) => (
              <div key={index} className={styles["weapon-stat-container"]}>
                <div className="char-level">{passive.stat}</div>

                <input
                  className="char-stat-input"
                  id="weaponSubStatValue"
                  type="number"
                  min="0"
                  max="90"
                  value={passive.value}
                  onChange={updateWeaponStats("passive")}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles["weapon-image-container"]}>
          <img src={widsith} className={styles["weapon-image"]} alt="" />
        </div>
      </div>
      {/* 
      <div className={styles["weapon-stats-container"]}>
        <div className={styles["weapon-stat-container"]}>
          <label className="char-stat-input-label" htmlFor="weaponLevel">
            Level
          </label>
          <input
            className="char-stat-input"
            id="weaponLevel"
            type="number"
            min="0"
            max="90"
            value={weapon.level}
            onChange={updateWeaponStats("level")}
          />
        </div>
        <div className={styles["weapon-stat-container"]}>
          <label className="char-stat-input-label" htmlFor="weaponMainStat">
            Main Stat
          </label>
          <input
            className="char-stat-input"
            id="weaponMainStat"
            type="number"
            min="0"
            max="90"
            value={weapon.mainStat}
            onChange={updateWeaponStats("mainStat")}
          />
        </div>
        <div className={styles["weapon-stat-container"]}>
          <label className="char-stat-input-label" htmlFor="weaponSubStat">
            Sub Stat
          </label>
          <input
            className="char-stat-input"
            id="weaponSubStat"
            type="string"
            min="0"
            max="90"
            value={weapon.substat.stat}
            onChange={updateWeaponStats("substat")}
          />
          <input
            className="char-stat-input"
            id="weaponSubStatValue"
            type="number"
            min="0"
            max="90"
            value={weapon.substat.value}
            onChange={updateWeaponStats("substat")}
          />
        </div>
        {weapon.passive.map((passive, index) => (
          <div key={index} className={styles["weapon-stat-container"]}>
            <label className="char-stat-input-label" htmlFor="weaponSubStat">
              {`Passive ${index + 1}`}
            </label>
            <input
              className="char-stat-input"
              id="weaponSubStat"
              type="string"
              min="0"
              max="90"
              value={passive.stat}
              onChange={updateWeaponStats("passive")}
            />
            <input
              className="char-stat-input"
              id="weaponSubStatValue"
              type="number"
              min="0"
              max="90"
              value={passive.value}
              onChange={updateWeaponStats("passive")}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

interface weaponProps {
  weapon: weapon;
  updateWeaponStats: (
    stat: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
}

export default Weapon;
