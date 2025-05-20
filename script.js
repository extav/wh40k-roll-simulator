"use strict";
console.log("script.js loaded successfully");

function RollOneDie() {
  // roll a 6-sided dice
  return Math.floor(Math.random() * 6 + 1);
}

function RollDice(N) {
  // return an N-length array of dice rolls
  const rolls = [];
  for (let i = 0; i < N; i++) {
    rolls.push(RollOneDie());
  }
  return rolls;
}

function CountNonzeroDice(arr) {
  // return the number of nonzero dice
  return arr.filter((val) => {
    return val > 0;
  }).length;
}

function RolledAtLeast(diceArr, minVal) {
  // return an array of dice that were minval+
  return diceArr.filter((val) => val >= minVal);
}

// okay what next?
// lets simulate a full wh40k roll
//     hit roll
//     wound roll
//     save roll
// we will assume it is a 3+ to hit, 4+ to wound, 5+ save

function simulate_40k_attack(attackCount, toHit, toWound, toSave) {
  console.log(attackCount + " attacks.");

  // hit roll
  const hitRoll = RollDice(attackCount);
  const hits = RolledAtLeast(hitRoll, toHit).length;
  console.log(hits + " hits.");

  // wound roll
  const woundRoll = RollDice(hits);
  const wounds = RolledAtLeast(woundRoll, toWound).length;
  console.log(wounds + " wounds.");

  //save roll
  const saveRoll = RollDice(wounds);
  const saves = RolledAtLeast(saveRoll, toSave).length;
  console.log(saves + " saves.");

  const damageInstances = wounds - saves;
  console.log(damageInstances + " instances of damage occur.");
}

const testval = RollDice(5);
console.log(testval);
console.log(CountNonzeroDice(testval));
const testval_3plus = RolledAtLeast(testval, 3);
console.log(testval_3plus);
console.log(CountNonzeroDice(testval_3plus));

// simulate attacks
simulate_40k_attack(20, 3, 4, 5);

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

console.log("Start testing wound calc");
console.log("expect 6, 5, 4, 3, 3, 2");
const wound_calc_test_1 = [];
for (let S = 1; S < 12; S = S + 2) {
  wound_calc_test_1.push(calc_wound_roll(S, 5));
}
console.log(wound_calc_test_1);

console.log("expect 6, 6, 5, 3, 3, 3, 2");
const wound_calc_test_2 = [];
for (let S = 1; S < 14; S = S + 2) {
  wound_calc_test_2.push(calc_wound_roll(S, 6));
}
console.log(wound_calc_test_2);
