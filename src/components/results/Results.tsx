import React from "react";
import { character } from "../../models/character";
import { enemy } from "../../models/enemy";
import { calcDamage } from "../../utils/calcDamage";

import styles from "./results.module.css";

export const Results = ({ character, enemy }: resultsProps) => {
  const results = calcDamage(character, enemy);
  return (
    <div className={styles["results-contianer"]}>
      <label htmlFor="bdmgRes" className="stat-input-label">
        BASE DMG
      </label>
      <div id="bdmgRes" className={styles["result"]}>
        {results.dmg}
      </div>
      <label htmlFor="cdmgRes" className="stat-input-label">
        CRIT DMG
      </label>
      <div id="cdmgRes" className={styles["result"]}>
        {results.critDmg}
      </div>
      <label htmlFor="cdmgRes" className="stat-input-label">
        Aggravate Crit Dmg
      </label>
      <div id="cdmgRes" className={styles["result"]}>
        {results.aggravateDmg}
      </div>
    </div>
  );
};

interface resultsProps {
  character: character;
  enemy: enemy;
}
