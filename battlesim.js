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
  const bs = weapon.bs;
  const hitMult = hitCheckMultiplier(bs, 0, false);
  const woundTarget = calc_wound_roll(weapon.strength, model.toughness);
  const woundMult = hitCheckMultiplier(woundTarget, 0, false);
  console.log("hitMult: " + hitMult);
  console.log("woundMult: " + woundMult);
  return hitMult * woundMult * weapon.damage;
}

export { calc_wound_roll, weaponAttackModel };
