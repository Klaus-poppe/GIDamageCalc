import { ChangeEvent } from "react";
import { character } from "../../models/character";

export const Buffs = ({ character, updateCharacterStats }: buffsProps) => {
  return (
    <div className="buffs-container">
      <div className="buffs">
        <div className="buff">
          <label htmlFor="atkPercent" className="char-stat-input-label">
            Atk percent
          </label>
          <input
            className="char-stat-input"
            id="atkPercent"
            type="number"
            min="0"
            max="100"
            value={character.atkPercent}
            onChange={updateCharacterStats("atkPercent")}
          />
        </div>
        <div className="buff">
          <label htmlFor="flatAtkBonus" className="char-stat-input-label">
            Flat Atk Bonus
          </label>
          <input
            className="char-stat-input"
            id="flatAtkBonus"
            type="number"
            min="0"
            max="100"
            value={character.flatAtkBonus}
            onChange={updateCharacterStats("flatAtkBonus")}
          />
        </div>
        <div className="buff">
          <label htmlFor="flatEmBonus" className="char-stat-input-label">
            EM bonus
          </label>
          <input
            className="char-stat-input"
            id="flatEmBonus"
            type="number"
            min="0"
            max="100"
            value={character.flatEmBonus}
            onChange={updateCharacterStats("flatEmBonus")}
          />
        </div>
        <div className="buff">
          <label htmlFor="flatEmBonus" className="char-stat-input-label">
            Flat Dmg Bonus
          </label>
          <input
            className="char-stat-input"
            id="atkDmgBonus"
            type="number"
            min="0"
            max="100"
            value={character.flatDmgBonus}
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
