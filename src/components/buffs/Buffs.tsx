import { ChangeEvent } from "react";
import { character } from "../../models/character";
import styles from "./buffs.module.css";

export const Buffs = ({ character, updateCharacterStats }: buffsProps) => {
  return (
    <div className={styles["buffs-container"]}>
      <div className={styles["buffs"]}>
        <div className={styles["buff"]}>
          <label htmlFor="atkPercent" className="stat-input-label">
            Atk percent
          </label>
          <input
            className="stat-input"
            id="atkPercent"
            type="number"
            min="0"
            max="100"
            value={character.atkPercent.value}
            onChange={updateCharacterStats("atkPercent")}
          />
        </div>
        <div className={styles["buff"]}>
          <label htmlFor="flatAtkBonus" className="stat-input-label">
            Flat Atk Bonus
          </label>
          <input
            className="stat-input"
            id="flatAtkBonus"
            type="number"
            min="0"
            max="100"
            value={character.flatAtkBonus.value}
            onChange={updateCharacterStats("flatAtkBonus")}
          />
        </div>
        <div className={styles["buff"]}>
          <label htmlFor="flatEmBonus" className="stat-input-label">
            EM bonus
          </label>
          <input
            className="stat-input"
            id="flatEmBonus"
            type="number"
            min="0"
            max="100"
            value={character.flatEmBonus.value}
            onChange={updateCharacterStats("flatEmBonus")}
          />
        </div>
        <div className={styles["buff"]}>
          <label htmlFor="flatEmBonus" className="stat-input-label">
            Flat Dmg Bonus
          </label>
          <input
            className="stat-input"
            id="atkDmgBonus"
            type="number"
            min="0"
            max="100"
            value={character.flatDmgBonus.value}
            onChange={updateCharacterStats("flatDmgBonus")}
          />
        </div>
      </div>
    </div>
  );
};

interface buffsProps {
  character: character;
  updateCharacterStats: (
    stat: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
}
