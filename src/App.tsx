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
import Weapon from "./components/weapon/Weapon";
import useWeapon from "./hooks/useWeapon";
import Constellations from "./components/constellations/Constellations";

function App() {
  const { character, updateCharacterStats, setCharAura, setCharCon } =
    useCharacter();
  const { enemy, updateEnemyStats, setEnemyAura } = useEnemy();
  const {
    weapon,
    updateWeaponStats,
    updateWeaponRefinement,
    updateWeaponPassive,
  } = useWeapon();

  return (
    <div className="app">
      <div className="main">
        <div className="char-info">
          <Character
            setCharAura={setCharAura}
            updateCharacterStats={updateCharacterStats}
            character={character}
          />
          {/* <Buffs
            character={character}
            updateCharacterStats={updateCharacterStats}
          /> */}
          <Constellations setCharCon={setCharCon} />
          <Weapon
            weapon={weapon}
            updateWeaponStats={updateWeaponStats}
            updateWeaponRefinement={updateWeaponRefinement}
            updateWeaponPassive={updateWeaponPassive}
          />
        </div>

        <div className="char-info enemy-info ">
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
