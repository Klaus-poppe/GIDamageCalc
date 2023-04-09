import { ChangeEvent } from "react";
import widsith from "../../assets/weapons/Weapon_The_Widsith.webp";
import { refinement, weapon } from "../../models/weapons";
import styles from "./weapon.module.css";

const Weapon = ({
  weapon,
  updateWeaponStats,
  updateWeaponPassive,
  updateWeaponRefinement,
}: weaponProps) => {
  return (
    <div className={styles["weapon-container"]}>
      <div className={styles["weapon-main-container"]}>
        <div className="char-level-container">
          <div className="char-level">{`${weapon.level.label}.${weapon.level.value}`}</div>
          <div className="char-level-input">
            <input
              className="char-stat-input"
              id="weaponLevel"
              type="number"
              min="0"
              max="90"
              value={weapon.level.value}
              onChange={updateWeaponStats("level")}
            />
          </div>
        </div>
        <div className="char-level-container">
          <div className="char-level">{`${weapon.mainStat.label} ${weapon.mainStat.value}`}</div>
          <div className="char-level-input">
            <input
              className="char-stat-input"
              id="weaponMainStat"
              type="number"
              min="0"
              value={weapon.mainStat.value}
              onChange={updateWeaponStats("mainStat")}
            />
          </div>
        </div>
        <div className="char-level-container">
          <div className="char-level">{`${weapon.substat.label} ${weapon.substat.value}`}</div>
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
          <div className="char-level">{weapon.refinement.label}</div>
          <div className={styles["refinement-container"]}>
            {[1, 2, 3, 4, 5].map((refinement) => (
              <div
                className={`${styles["refinement"]} ${
                  weapon.refinement.value === refinement
                    ? styles["selected-refinement"]
                    : ""
                }`}
                onClick={updateWeaponRefinement(refinement as refinement)}
              >
                {refinement}
              </div>
            ))}
          </div>
          <div className="char-level">Passive</div>
          <div className={styles["passives"]}>
            {weapon.passive.map((passive, index) => (
              <div key={index} className={styles["weapon-stat-container"]}>
                <div className="char-level">{passive.label}</div>
                <input
                  className="char-stat-input"
                  id="weaponSubStatValue"
                  type="number"
                  min="0"
                  max="90"
                  value={passive.value}
                  onChange={updateWeaponPassive(index)}
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
  updateWeaponPassive: (
    passiveIndex: number
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  updateWeaponRefinement: (refinement: refinement) => () => void;
}

export default Weapon;
