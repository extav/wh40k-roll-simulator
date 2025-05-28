"use strict";

function hitCheckMultiplier(target, bonus, reroll = false) {
  // only add functionality for rerolling all dice atm
  let mult;
  const good_outcomes = 6 - (target - bonus) + 1;
  if (reroll == false) {
    mult = good_outcomes / 6;
  } else {
    let successes = good_outcomes;
    let failures = 6 - good_outcomes;
    successes += (failures * good_outcomes) / 6;
    mult = successes / 6;
  }
  return mult;
}

export { hitCheckMultiplier };
