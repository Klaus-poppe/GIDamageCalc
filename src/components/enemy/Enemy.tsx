import hilichurl from "../../assets/enemies/Enemy_Hilichurl.webp";
import { ChangeEvent } from "react";
import { enemy } from "../../models/enemy";
import AuraSelector from "../auraSelector/AuraSelector";

const enemyStats = ["resistance", "defReduction", "defIgnore", "resShred"];

export const Enemy = ({
  updateEnemyStats,
  setEnemyAura,
  enemy,
}: enemyProps) => {
  return (
    <>
      <div className="char-stats-container">
        {enemyStats.map((stat: string) => (
          <div className="char-stat-container">
            <label className="char-stat-input-label" htmlFor={stat}>
              {enemy[stat as keyof enemy].label}
            </label>
            <input
              className="char-stat-input"
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

      <div className="enemy-preview-container">
        <div className="char-state-container">
          <div className="char-level-container">
            <div className="char-level">{`${enemy.level.label}.${enemy.level.value}`}</div>
            <div className="char-level-input">
              <input
                className="char-stat-input"
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
