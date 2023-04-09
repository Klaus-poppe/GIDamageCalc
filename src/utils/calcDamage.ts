import { Character } from "../components/character/Character";
import { getEmBonus } from "../constants/emMultipliers";
import { getLevelMultiplier } from "../constants/levelMultipliers";
import { character, defaultCharacterValues } from "../models/character";
import { defaultEnemyValues, enemy } from "../models/enemy";

export const calcDamage = (
  char: character = defaultCharacterValues,
  enemy: enemy = defaultEnemyValues
) => {
  // const baseDmg = skill * atk/def/hp

  const charLevel = char.level.value;
  const skill = char.skillMultiplier.value / 100;

  // use Math.round to potentially increase accuracy
  const atk =
    char.atk.value +
    (char.baseAtk.value * char.atkPercent.value) / 100 +
    char.flatAtkBonus.value;

  // const flatDmgBonus = char.flatDmgBonus;

  const em = char.em.value + char.flatEmBonus.value;
  const eDmgBonus = char.dmgBonus.value / 100;
  const cRate = char.cRate.value;
  const cDamage = char.cDamage.value / 100;
  const sesshouSakuraBonus = (em * 0.15) / 100;

  const defReduction = enemy.defReduction.value;
  const defIgnore = enemy.defIgnore.value;
  const enemyLevel = enemy.level.value;

  const baseDmg = skill * atk;
  const dmgBonus = eDmgBonus + sesshouSakuraBonus;
  const k = (1 - defReduction) * (1 - defIgnore);

  const defMultiplierEnemy =
    (charLevel + 100) / (k * (enemyLevel + 100) + (charLevel + 100));

  const resMultiplierEnemy = calcResMultiplier(
    enemy.resistance.value,
    enemy.resShred.value
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

  const aggravateBaseDmg =
    1.15 * getLevelMultiplier(enemy.level.value, "character");
  const reactionMultiplier = getReactionMultiplier(char.em.value, 0, 3);

  const flatDmgBonus = aggravateBaseDmg * reactionMultiplier;

  const aggravateDmg =
    (baseDmg + flatDmgBonus) *
    (1 + dmgBonus) *
    (defMultiplierEnemy * resMultiplierEnemy);

  const aggravateCritDmg = getCritDamage(aggravateDmg, cDamage);

  // console.log({
  //   aggravateBaseDmg,
  //   reactionMultiplier,
  //   flatDmgBonus,
  //   aggravateDmg,
  //   aggravateCritDmg,
  // });

  return {
    dmg: Math.round(dmg),
    critDmg: Math.round(critDmg),
    aggravateDmg: Math.round(aggravateCritDmg),
    // dmg: dmg.toFixed(2),
    // critDmg: critDmg.toFixed(2),
  };
};

// my yae miko stats for test, gives in game crit damage of 6882 against a lvl 91 hilichurl
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

const calcResMultiplier = (
  resistance: number = 0,
  resShred: number = 0
): number => {
  let res = (resistance - resShred) / 100;

  if (res < 0) return 1 - res / 2;

  if (res >= 75) return 1 / (4 * res + 1);

  return 1 - res;
};

const getReactionMultiplier = (
  em: number = 0,
  reactionBonus: number = 0,
  reactionType: 1 | 2 | 3 | 4 = 1
) => {
  let emBonus = getEmBonus(em)[reactionType];
  return 1 + emBonus / 100 + reactionBonus / 100;
};

const getCritDamage = (dmg: number, cDamage: number) => dmg * (1 + cDamage);
