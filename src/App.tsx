import { Buffs } from "./components/buffs/Buffs";
import { Results } from "./components/results/Results";
import { Enemy } from "./components/enemy/Enemy";
import { Character } from "./components/character/Character";
import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import "./App.css";
import { defaultCharacterValues } from "./models/character";
import { defaultEnemyValues } from "./models/enemy";
import { calcDamage } from "./utils/calcDamage";
import useCharacter from "./hooks/useCharacter";
import useEnemy from "./hooks/useEnemy";

function App() {
  const { character, updateCharacterStats, setCharAura } = useCharacter();
  const { enemy, updateEnemyStats, setEnemyAura } = useEnemy();

  return (
    <div className="app">
      <div className="main">
        <div className="char-info">
          <Character
            setCharAura={setCharAura}
            updateCharacterStats={updateCharacterStats}
            character={character}
          />
          <Buffs
            character={character}
            updateCharacterStats={updateCharacterStats}
          />
        </div>

        <div className="enemy-info char-info ">
          <Results character={character} enemy={enemy} />
          <Enemy
            updateEnemyStats={updateEnemyStats}
            setEnemyAura={setEnemyAura}
            enemy={enemy}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
