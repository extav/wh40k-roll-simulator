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

const testval = RollDice(5);
console.log(testval);
console.log(CountNonzeroDice(testval));
const testval_3plus = RolledAtLeast(testval, 3);
console.log(testval_3plus);
console.log(CountNonzeroDice(testval_3plus));
