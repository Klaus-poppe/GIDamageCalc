import hilichurl from "../../assets/enemies/Enemy_Hilichurl.webp";
import { ChangeEvent } from "react";
import { enemy } from "../../models/enemy";
import AuraSelector from "../auraSelector/AuraSelector";
import styles from "./enemy.module.css";

const enemyStats = ["resistance", "defReduction", "defIgnore", "resShred"];

export const Enemy = ({
  updateEnemyStats,
  setEnemyAura,
  enemy,
}: enemyProps) => {
  return (
    <>
      <div className="stats-container">
        {enemyStats.map((stat: string) => (
          <div className="stat-container">
            <label className="stat-input-label" htmlFor={stat}>
              {enemy[stat as keyof enemy].label}
            </label>
            <input
              className="stat-input"
              id={stat}
              type="number"
              min="0"
              max="90"
              value={enemy[stat as keyof enemy].value}
              onChange={updateEnemyStats(stat)}
            />
          </div>
        ))}
      </div>

      <div className={styles["enemy-preview-container"]}>
        <div className="state-container ">
          <div className="level-container">
            <div className="level">{`${enemy.level.label}.${enemy.level.value}`}</div>
            <div className="level-input">
              <input
                className="stat-input"
                id="enemyLevel"
                type="number"
                min="0"
                max="100"
                value={enemy.level.value}
                onChange={updateEnemyStats("level")}
              />
            </div>
          </div>
          <AuraSelector aura={enemy.aura.value} setAura={setEnemyAura} />
        </div>
        <div className={styles["enemy-image-container"]}>
          <img className={styles["enemy-preview"]} src={hilichurl} />
        </div>
      </div>
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
