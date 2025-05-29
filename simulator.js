"use strict";

import { modelsAttackModels } from "./battlesim.js";

function calculateResults() {
  // build attacker
  const attacker = {};
  const atk = document.getElementById("attacker-form");
  for (let i = 0; i < 4; i++) {
    attacker[atk.children[i].children[1].id] =
      atk.children[i].children[1].value;
  }
  attacker.name = atk.children[0].children[1].value;
  attacker.toughness = Number(atk.children[1].children[1].value);
  attacker.save = Number(atk.children[2].children[1].value);
  attacker.wounds = Number(atk.children[3].children[1].value);

  // attacker.name = atk.children[0].children[1].value

  console.log(attacker.name);
  console.log(attacker.wounds);

  // build attacker weapon
  const wpn = document.querySelector(".weapon-input");
  const weapon = {};
  for (let i = 0; i < 6; i++) {
    weapon[wpn.children[i].children[1].name] =
      wpn.children[i].children[1].value;
  }
  weapon.name = wpn.children[0].children[1].value;
  weapon.BS = Number(wpn.children[1].children[1].value);
  weapon.attacks = Number(wpn.children[2].children[1].value);
  weapon.strength = Number(wpn.children[3].children[1].value);
  weapon.AP = Number(wpn.children[4].children[1].value);
  weapon.damage = Number(wpn.children[5].children[1].value);

  console.log(weapon.damage);

  attacker.weapons = [weapon];

  // build defender
  const defender = {};
  const def = document.getElementById("defender-form");
  for (let i = 0; i < 4; i++) {
    defender[def.children[i].children[1].id] =
      def.children[i].children[1].value;
  }
  defender.name = def.children[0].children[1].value;
  defender.toughness = Number(def.children[1].children[1].value);
  defender.save = Number(def.children[2].children[1].value);
  defender.wounds = Number(def.children[3].children[1].value);
  defender.woundsTaken = 0;
  defender.modelsLost = 0;

  const battleResults = modelsAttackModels(attacker, defender, 10);
  // set the text field
  const txt = document.getElementById("results-text");
  txt.value =
    JSON.stringify(battleResults);
}

document.getElementById("results-button").onclick = calculateResults;

export {};
