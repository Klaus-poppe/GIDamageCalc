import { ChangeEvent, ReactNode, useEffect, useState } from "react";
import YaeMiko from "./assets/characters/yaeMiko_full.png";
import hilichurl from "./assets/enemies/Enemy_Hilichurl.webp";
import "./App.css";
import anemoAuro from "./assets/misc/Element_Anemo.svg";

function App() {
  const [character, setCharacter] = useState(defaultCharacterValues);
  const [enemy, setEnemy] = useState(defaultEnemyValues);

  const updateCharacterStats = (stat: string) => {
    return (e: ChangeEvent<HTMLInputElement>) =>
      setCharacter((prev) => ({
        ...prev,
        [stat]: parseFloat(e.target.value),
      }));
  };

  const updateEnemyStats = (stat: string) => {
    return (e: ChangeEvent<HTMLInputElement>) =>
      setEnemy((prev) => ({
        ...prev,
        [stat]: parseInt(e.target.value),
      }));
  };

  const results = calcDamage(character, enemy);

  return (
    <div className="app">
      <div className="main">
        <div className="char-info">
          <div className="char-preview-container">
            <div className="char-name">Yae Miko</div>
            <div className="char-aura-container">
              <img className="char-aura" src={anemoAuro}></img>
            </div>
            <div className="char-image-container">
              <img className="char-preview" src={YaeMiko}></img>
            </div>
          </div>

          <div className="char-stats-container">
            <div className="char-stat-container">
              <label className="char-stat-input-label" htmlFor="charLevel">
                Level
              </label>
              <input
                className="char-stat-input"
                id="charLevel"
                type="number"
                min="0"
                max="90"
                value={character.level}
                onChange={updateCharacterStats("level")}
              />
            </div>
            <div className="char-stat-container">
              <label className="char-stat-input-label" htmlFor="baseAtk">
                Base atk
              </label>
              <input
                className="char-stat-input"
                id="baseAtk"
                type="number"
                min="0"
                value={character.baseAtk}
                onChange={updateCharacterStats("baseAtk")}
              />
            </div>
            <div className="char-stat-container">
              <label className="char-stat-input-label" htmlFor="atk">
                Atk
              </label>
              <input
                className="char-stat-input"
                id="atk"
                type="number"
                min="0"
                value={character.atk}
                onChange={updateCharacterStats("atk")}
              />
            </div>
            <div className="char-stat-container">
              <label className="char-stat-input-label" htmlFor="em">
                Em
              </label>
              <input
                className="char-stat-input"
                id="em"
                type="number"
                min="0"
                value={character.em}
                onChange={updateCharacterStats("em")}
              />
            </div>
            <div className="char-stat-container">
              <label className="char-stat-input-label" htmlFor="cRate">
                Crit Rate
              </label>
              <input
                className="char-stat-input"
                id="cRate"
                type="number"
                min="0"
                value={character.cRate}
                onChange={updateCharacterStats("cRate")}
              />
            </div>
            <div className="char-stat-container">
              <label className="char-stat-input-label" htmlFor="cDamage">
                Crit Damage
              </label>
              <input
                className="char-stat-input"
                id="cDamage"
                type="number"
                min="0"
                value={character.cDamage}
                onChange={updateCharacterStats("cDamage")}
              />
            </div>
            <div className="char-stat-container">
              <label className="char-stat-input-label" htmlFor="dmgBonus">
                Damage Bonus
              </label>
              <input
                className="char-stat-input"
                id="dmgBonus"
                type="number"
                min="0"
                value={character.dmgBonus}
                onChange={updateCharacterStats("dmgBonus")}
              />
            </div>
            <div className="char-stat-container">
              <label
                className="char-stat-input-label"
                htmlFor="skillMultiplier"
              >
                Skill Multiplier
              </label>
              <input
                className="char-stat-input"
                id="skillMultiplier"
                type="number"
                min="0"
                value={character.skillMultiplier}
                onChange={updateCharacterStats("skillMultiplier")}
              />
            </div>
            {/* <pre>{JSON.stringify(character, null, 2)}</pre> */}
          </div>

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
            </div>
          </div>
        </div>

        <div className="enemy-info char-info ">
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
          </div>
          <div className="char-stats-container">
            <div className="char-stat-container">
              <label className="char-stat-input-label" htmlFor="enemyLevel">
                Level
              </label>
              <input
                className="char-stat-input"
                id="enemyLevel"
                type="number"
                min="0"
                max="100"
                value={enemy.level}
                onChange={updateEnemyStats("level")}
              />
            </div>
            <div className="char-stat-container">
              <label className="char-stat-input-label" htmlFor="resistance">
                Resistance
              </label>
              <input
                className="char-stat-input"
                id="resistance"
                type="number"
                min="0"
                max="90"
                value={enemy.resistance}
                onChange={updateEnemyStats("resistance")}
              />
            </div>
            <div className="char-stat-container">
              <label className="char-stat-input-label" htmlFor="defReduction">
                Def Reduction
              </label>
              <input
                className="char-stat-input"
                id="defReduction"
                type="number"
                min="0"
                value={enemy.defReduction}
                onChange={updateEnemyStats("defReduction")}
              />
            </div>
            <div className="char-stat-container">
              <label className="char-stat-input-label" htmlFor="defIgnore">
                Def Ignore
              </label>
              <input
                className="char-stat-input"
                id="defIgnore"
                type="number"
                min="0"
                value={enemy.defIgnore}
                onChange={updateEnemyStats("defIgnore")}
              />
            </div>
            <div className="char-stat-container">
              <label className="char-stat-input-label" htmlFor="resShred">
                Resitance shred
              </label>
              <input
                className="char-stat-input"
                id="resShred"
                type="number"
                min="0"
                value={enemy.resShred}
                onChange={updateEnemyStats("resShred")}
              />
            </div>
          </div>

          <div>
            <div className="char-aura-container">
              <img className="char-aura" src={anemoAuro}></img>
            </div>
            <div className="enemy-preview-container">
              <img className="enemy-preview" src={hilichurl} />
            </div>
          </div>

          {/* <pre>{JSON.stringify(enemy, null, 2)}</pre> */}
        </div>
      </div>
      {/* <div className="results-contianer">{calcDamage(character, enemy)}</div> */}
    </div>
  );
}

type character = {
  level: number;
  baseAtk: number;
  atk: number;
  em: number;
  cRate: number;
  cDamage: number;
  dmgBonus: number;
  skillMultiplier: number;
  atkPercent: number;
  flatAtkBonus: number;
  flatEmBonus: number;
  Aura: string;
  FlatDmgBonus: number;
};

type enemy = {
  level: number;
  resistance: number;
  defReduction: number;
  defIgnore: number;
  resShred: number;
};

const defaultCharacterValues: character = {
  level: 90,
  baseAtk: 0,
  atk: 0,
  em: 0,
  cRate: 0,
  cDamage: 0,
  dmgBonus: 0,
  skillMultiplier: 0,
  atkPercent: 0,
  flatAtkBonus: 0,
  flatEmBonus: 0,
  Aura: "none",
  FlatDmgBonus: 0,
};

const defaultEnemyValues: enemy = {
  level: 90,
  resistance: 10,
  defReduction: 0,
  defIgnore: 0,
  resShred: 0,
};

const calcResMultiplier = (
  resistance: number = 0,
  resShred: number = 0
): number => {
  let res = (resistance - resShred) / 100;

  if (res < 0) return 1 - res / 2;

  if (res >= 75) return 1 / (4 * res + 1);

  return 1 - res;
};

const calcDamage = (char: character, enemy: enemy) => {
  // const baseDmg = skill * atk/def/hp

  // const skill = 170 / 100;
  // const atk = 1464;
  // const em = 273;
  // const eDmgBonus = 61 / 100;
  // const cRate = 85;
  // const cDamage = 203 / 100;
  // const sesshouSakuraBonus = (em * 0.15) / 100;
  // const defReduction = 0;
  // const defIgnore = 0;
  // const charLevel = 90;
  // const enemyLevel = 90;
  // const enemyResistance = 10;

  const charLevel = char.level || 0;
  const skill = (char.skillMultiplier || 0) / 100;

  // use Math.round to potentially increase accuracy
  const atk =
    (char.atk || 0) +
    (char.baseAtk * char.atkPercent) / 100 +
    char.flatAtkBonus;
  const em = char.em || 0;
  const eDmgBonus = (char.dmgBonus || 0) / 100;
  const cRate = char.cRate || 0;
  const cDamage = (char.cDamage || 0) / 100;
  const sesshouSakuraBonus = (em * 0.15) / 100;

  const defReduction = enemy.defReduction || 0;
  const defIgnore = enemy.defIgnore || 0;
  const enemyLevel = enemy.level || 0;
  // const enemyResistance = calcResMultiplier(
  //   enemy.resistance || 0,
  //   enemy.resShred || 0
  // );

  const baseDmg = skill * atk;
  const dmgBonus = eDmgBonus + sesshouSakuraBonus;
  const k = (1 - defReduction) * (1 - defIgnore);

  const defMultiplierEnemy =
    (charLevel + 100) / (k * (enemyLevel + 100) + (charLevel + 100));

  const resMultiplierEnemy = calcResMultiplier(
    enemy.resistance || 0,
    enemy.resShred || 0
  );

  const dmg =
    baseDmg * (1 + dmgBonus) * (defMultiplierEnemy * resMultiplierEnemy);

  const critDmg = dmg * (1 + cDamage);

  // const dmg =
  //   ((baseDmg * specialMultiplier) + FlatDmgBonus) *
  //   (1 + percentageDmgBonus - DmgReductionTarget) *
  //   (defMultiplierTarget * ResMultipliesTarget) *
  //   AmplifyingMultiplier;

  // const critDamage = Dmg * (1 + critDamage)

  return {
    dmg: Math.round(dmg),
    critDmg: Math.round(critDmg),
    // dmg: dmg.toFixed(2),
    // critDmg: critDmg.toFixed(2),
  };

  // return `Yae Miko does ${dmg.toFixed(2)} damage against a lvl ${
  //   enemy.level
  // } hilichurl
  // and crit damage of ${critDmg.toFixed(2)}

  // baseDmg = ${baseDmg.toFixed(2)}
  // dmgBonus = ${dmgBonus.toFixed(2)} `;
};

// const characters: characters = {
//   yae: {
//     lvl: 90,
//     bHp: 10372,
//     bAtk: 339,
//     bDef: 568,
//     em: 0,
//     er: 100,
//     cRate: 24.2,
//     cDamge: 50,
//     dmgBonus: 0,
//     atkPercent: 50,
//     atk: function () {
//       return this.bAtk * (1 + this.atkPercent / 100);
//     },
//   },
// };

// const weapons = {
//   widsith: {
//     lvl: 90,
//     refinement: 5,
//     mainStat: 510,
//     subStat: {
//       stat: "cDamage",
//       value: "55.1",
//     },
//     passive: {
//       status: "active",
//       stat: "em",
//       value: 480,
//     },
//   },
// };

// const enemies = {
//   hilichurl: {
//     lvl: 90,
//     hp: 24354,
//     atk: 3426,
//     def: 1000,
//     resistance: 10,
//   },
// };

// type characters = {
//   [charName: string]: character;
// };

// type character = {
//   bHp: number;
//   lvl: number;
//   bAtk: number;
//   bDef: number;
//   em: number;
//   er: number;
//   cRate: number;
//   cDamge: number;
//   atkPercent: number;
//   dmgBonus: number;
//   atk: Function;
// };

// type weapon = {
//   lvl: number;
//   refinement: number;
//   mainStat: number;
//   substat: {
//     stat: string;
//     value: number;
//   };
//   passive: {
//     status: string;
//     stat: string;
//     value: number;
//   };
// };

// type enemy = {
//   lvl: number;
//   hp: number;
//   atk: number;
//   def: number;
//   resistance: number;
// };

export default App;
