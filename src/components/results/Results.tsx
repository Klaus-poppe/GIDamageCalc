import React from "react";
import { character } from "../../models/character";
import { enemy } from "../../models/enemy";
import { calcDamage } from "../../utils/calcDamage";

export const Results = ({ character, enemy }: resultsProps) => {
  const results = calcDamage(character, enemy);
  return (
    <div className="results-contianer">
      <label htmlFor="bdmgRes" className="char-stat-input-label">
        BASE DMG
      </label>
      <div id="bdmgRes" className="result">
        {results.dmg}
      </div>
      <label htmlFor="cdmgRes" className="char-stat-input-label">
        CRIT DMG
      </label>
      <div id="cdmgRes" className="result">
        {results.critDmg}
      </div>
      <label htmlFor="cdmgRes" className="char-stat-input-label">
        Aggravate Crit Dmg
      </label>
      <div id="cdmgRes" className="result">
        {results.aggravateDmg}
      </div>
    </div>
  );
};

interface resultsProps {
  character: character;
  enemy: enemy;
}
