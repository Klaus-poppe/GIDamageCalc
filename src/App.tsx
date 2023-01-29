import { ChangeEvent, ReactNode, useState } from "react";
import YaeMiko from "./assets/characters/yaeMiko.webp";
import hilichurl from "./assets/enemies/Enemy_Hilichurl.webp";
import "./App.css";

function App() {
  const [character, setCharacter] = useState(defaultCharacterValues);
  const [enemy, setEnemy] = useState(defaultEnemyValues);

  const updateCharacterStats = (stat: string) => {
    return (e: ChangeEvent<HTMLInputElement>) =>
      setCharacter((prev) => ({
        ...prev,
        [stat]: parseInt(e.target.value),
      }));
  };

  const updateEnemyStats = (stat: string) => {
    return (e: ChangeEvent<HTMLInputElement>) =>
      setEnemy((prev) => ({
        ...prev,
        [stat]: parseInt(e.target.value),
      }));
  };

  return (
    <div className="App">
      <div className="main">
        <div className="char-info">
          <div className="char-preview-container">
            <img className="char-preview" src={YaeMiko}></img>
          </div>
          <div className="char-stats-container">
            <div className="char-stat-container">
              <label htmlFor="charLevel">Level</label>
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
              <label htmlFor="atk">Atk</label>
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
              <label htmlFor="em">Em</label>
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
              <label htmlFor="cRate">Crit Rate</label>
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
              <label htmlFor="cDamage">Crit Damage</label>
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
              <label htmlFor="dmgBonus">Damage Bonus</label>
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
              <label htmlFor="skillMultiplier">Skill Multiplier</label>
              <input
                className="char-stat-input"
                id="skillMultiplier"
                type="number"
                min="0"
                value={character.skillMultiplier}
                onChange={updateCharacterStats("skillMultiplier")}
              />
            </div>
            <pre>{JSON.stringify(character, null, 2)}</pre>
          </div>
        </div>
        <div className="dmg-results">
          <div className="char-preview-container">
            <img className="char-preview" src={hilichurl} />
          </div>
          <div className="char-stats-container">
            <div className="char-stat-container">
              <label htmlFor="enemyLevel">Enemy Level</label>
              <input
                className="char-stat-input"
                id="enemyLevel"
                type="number"
                min="0"
                max="90"
                value={enemy.level}
                onChange={updateEnemyStats("level")}
              />
            </div>
            <div className="char-stat-container">
              <label htmlFor="resistance">Resistance</label>
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
              <label htmlFor="defReduction">Enemy Def Reduction</label>
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
              <label htmlFor="defIgnore">Enemy Def Ignore</label>
              <input
                className="char-stat-input"
                id="defIgnore"
                type="number"
                min="0"
                value={enemy.defIgnore}
                onChange={updateEnemyStats("defIgnore")}
              />
            </div>
          </div>

          <pre>{JSON.stringify(enemy, null, 2)}</pre>
        </div>
      </div>
      <div className="results-contianer">{calcDamage()}</div>
    </div>
  );
}

const defaultCharacterValues = {
  level: 90,
  atk: 0,
  em: 0,
  cRate: 0,
  cDamage: 0,
  dmgBonus: 0,
  skillMultiplier: 0,
};

const defaultEnemyValues = {
  level: 90,
  resistance: 10,
  defReduction: 0,
  defIgnore: 0,
};

const calcDamage = () => {
  // const baseDmg = skill * atk/def/hp

  const skill = 170 / 100;
  const atk = 1464;
  const em = 273;
  const eDmgBonus = 61 / 100;
  const cRate = 85;
  const cDamage = 203 / 100;
  const sesshouSakuraBonus = (em * 0.15) / 100;
  const defReduction = 0;
  const defIgnore = 0;
  const charLevel = 90;
  const enemyLevel = 90;

  const baseDmg = skill * atk;
  const dmgBonus = eDmgBonus + sesshouSakuraBonus;
  const k = (1 - defReduction) * (1 - defIgnore);

  const enemyResistance = 10;

  const defMultiplierEnemy =
    (charLevel + 100) / (k * (enemyLevel + 100) + (charLevel + 100));
  const resMultiplierEnemy = 1 - enemyResistance / 100;

  const dmg =
    baseDmg * (1 + dmgBonus) * (defMultiplierEnemy * resMultiplierEnemy);

  const critDmg = dmg * (1 + cDamage);

  // const dmg =
  //   (baseDmg * specialMultiplier + FlatDmgBonus) *
  //   (1 + percentageDmgBonus - DmgReductionTarget) *
  //   (defMultiplierTarget * ResMultipliesTarget) *
  //   AmplifyingMultiplier;

  // const critDamage = Dmg * (1 + critDamage)

  return `Yae Miko does ${dmg.toFixed(2)} damage against a lvl 90 hilichurl
  and crit damage of ${critDmg.toFixed(2)}

  baseDmg = ${baseDmg.toFixed(2)}
  dmgBonus = ${dmgBonus.toFixed(2)}
  defMultiplierEnemy = ${defMultiplierEnemy.toFixed(2)}
  resMultiplierEnemy = ${resMultiplierEnemy.toFixed(2)}
  
  `;
};

const characters: characters = {
  yae: {
    lvl: 90,
    bHp: 10372,
    bAtk: 339,
    bDef: 568,
    em: 0,
    er: 100,
    cRate: 24.2,
    cDamge: 50,
    dmgBonus: 0,
    atkPercent: 50,
    atk: function () {
      return this.bAtk * (1 + this.atkPercent / 100);
    },
  },
};

const weapons = {
  widsith: {
    lvl: 90,
    refinement: 5,
    mainStat: 510,
    subStat: {
      stat: "cDamage",
      value: "55.1",
    },
    passive: {
      status: "active",
      stat: "em",
      value: 480,
    },
  },
};

const enemies = {
  hilichurl: {
    lvl: 90,
    hp: 24354,
    atk: 3426,
    def: 1000,
    resistance: 10,
  },
};

type characters = {
  [charName: string]: character;
};

type character = {
  bHp: number;
  lvl: number;
  bAtk: number;
  bDef: number;
  em: number;
  er: number;
  cRate: number;
  cDamge: number;
  atkPercent: number;
  dmgBonus: number;
  atk: Function;
};

type weapon = {
  lvl: number;
  refinement: number;
  mainStat: number;
  substat: {
    stat: string;
    value: number;
  };
  passive: {
    status: string;
    stat: string;
    value: number;
  };
};

type enemy = {
  lvl: number;
  hp: number;
  atk: number;
  def: number;
  resistance: number;
};

export default App;
