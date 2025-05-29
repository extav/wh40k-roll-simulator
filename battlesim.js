"use strict";
import { hitCheckMultiplier } from "./dicemath.js";

// lets add functions to calculate wound rolls
function calc_wound_roll(S, T) {
  if (S >= T * 2) {
    return 2;
  } else if (S > T) {
    return 3;
  } else if (S == T) {
    return 4;
  } else if (S > T / 2) {
    return 5;
  } else {
    return 6;
  }
}

// implement basic weapon attacks model
// add an object with additional things to consider on the hit like rerolls
//  can check the object for keywords to figure out what to do
function weaponAttackModel(weapon, model) {
  const bs = weapon.BS;
  const hitMult = hitCheckMultiplier(bs, 0, false);
  const woundTarget = calc_wound_roll(weapon.strength, model.toughness);
  const woundMult = hitCheckMultiplier(woundTarget, 0, false);
  const saveMult = 1 - hitCheckMultiplier(model.save, weapon.AP);
  // console.log("hitMult: " + hitMult);
  // console.log("woundMult: " + woundMult);
  // console.log("saveMult: " + saveMult);
  return hitMult * woundMult * saveMult * weapon.damage;
}

function modelsAttackModels(attacker, defender, N) {
  defender.woundsTaken = 0;
  defender.modelsLost = 0;
  for (const weapon of attacker.weapons) {
    for (let j = 0; j < N; j++) {
      for (let i = 0; i < weapon.attacks; i++) {
        console.log("Attacking with " + weapon.name);
        defender.woundsTaken += weaponAttackModel(weapon, defender);
        if (defender.woundsTaken >= defender.wounds) {
          defender.modelsLost += 1;
          defender.woundsTaken = 0;
        }
      }
    }
  }
  const resultObj = {
    name: defender.name,
    woundsTaken: defender.woundsTaken,
    modelsLost: defender.modelsLost,
  };
  return resultObj
}

function logResults(resultObj) {
  console.log(
    resultObj.name +
      " took " +
      resultObj.woundsTaken +
      " wounds and lost " +
      resultObj.modelsLost +
      " models."
  );
}

export { calc_wound_roll, weaponAttackModel, modelsAttackModels };
