"use strict";

import { modelsAttackModels } from "./battlesim.js";

function createWeaponBox() {
  const wbox = document.createElement("div");
  wbox.classList.add("weapon-input");

  const header = document.createElement("h5");
  header.textContent = "Weapon";
  wbox.appendChild(header);

  const p1 = document.createElement("p");
  const l1 = document.createElement("label");
  l1.setAttribute("for", "weapon-name");
  l1.textContent = "Weapon Name";
  const i1 = document.createElement("input");
  i1.setAttribute("type", "text");
  i1.setAttribute("id", "weapon-name");
  i1.setAttribute("name", "name");
  p1.appendChild(l1);
  p1.appendChild(i1);

  const p2 = document.createElement("p");
  const l2 = document.createElement("label");
  l2.setAttribute("for", "weapon-BS");
  l2.textContent = "Weapon BS";
  const i2 = document.createElement("input");
  i2.setAttribute("type", "text");
  i2.setAttribute("id", "weapon-BS");
  i2.setAttribute("name", "name");
  p2.appendChild(l2);
  p2.appendChild(i2);

  const p3 = document.createElement("p");
  const l3 = document.createElement("label");
  l3.setAttribute("for", "weapon-attacks");
  l3.textContent = "Weapon Attacks";
  const i3 = document.createElement("input");
  i3.setAttribute("type", "text");
  i3.setAttribute("id", "weapon-attacks");
  i3.setAttribute("name", "name");
  p3.appendChild(l3);
  p3.appendChild(i3);

  const p4 = document.createElement("p");
  const l4 = document.createElement("label");
  l4.setAttribute("for", "weapon-strength");
  l4.textContent = "Weapon Strength";
  const i4 = document.createElement("input");
  i4.setAttribute("type", "text");
  i4.setAttribute("id", "weapon-strength");
  i4.setAttribute("name", "name");
  p4.appendChild(l4);
  p4.appendChild(i4);

  const p5 = document.createElement("p");
  const l5 = document.createElement("label");
  l5.setAttribute("for", "weapon-AP");
  l5.textContent = "Weapon AP";
  const i5 = document.createElement("input");
  i5.setAttribute("type", "text");
  i5.setAttribute("id", "weapon-AP");
  i5.setAttribute("name", "name");
  p5.appendChild(l5);
  p5.appendChild(i5);

  const p6 = document.createElement("p");
  const l6 = document.createElement("label");
  l6.setAttribute("for", "weapon-damage");
  l6.textContent = "Weapon Damage";
  const i6 = document.createElement("input");
  i6.setAttribute("type", "text");
  i6.setAttribute("id", "weapon-damage");
  i6.setAttribute("name", "name");
  p6.appendChild(l6);
  p6.appendChild(i6);

  wbox.appendChild(p1);
  wbox.appendChild(p2);
  wbox.appendChild(p3);
  wbox.appendChild(p4);
  wbox.appendChild(p5);
  wbox.appendChild(p6);

  return wbox;
}

function addWeapon() {
  document.getElementById("attacker-form").appendChild(createWeaponBox());
}

function setUpPage() {
  addWeapon();
}

function calculateResults() {
  // build attacker
  const attacker = {};
  const atk = document.querySelector(".base-stats");
  for (let i = 0; i < 4; i++) {
    attacker[atk.children[i].children[1].id] =
      atk.children[i].children[1].value;
    console.log(i);
  }
  attacker.name = atk.children[0].children[1].value;
  attacker.toughness = Number(atk.children[1].children[1].value);
  attacker.save = Number(atk.children[2].children[1].value);
  attacker.wounds = Number(atk.children[3].children[1].value);


  // build attacker weapon
  attacker.weapons = [];
  const wpns = document.querySelectorAll(".weapon-input");
  for (const wpn of wpns) {
    console.log(wpn);
    const weapon = {};
    weapon.name = wpn.children[1].children[1].value;
    weapon.BS = Number(wpn.children[2].children[1].value);
    weapon.attacks = Number(wpn.children[3].children[1].value);
    weapon.strength = Number(wpn.children[4].children[1].value);
    weapon.AP = Number(wpn.children[5].children[1].value);
    weapon.damage = Number(wpn.children[6].children[1].value);

    console.log(weapon.damage);

    attacker.weapons.push(weapon);
  }

  // build defender
  const defender = {};
  const def = document.getElementById("defender-form").children[0];
  defender.name = def.children[0].children[1].value;
  defender.toughness = Number(def.children[1].children[1].value);
  defender.save = Number(def.children[2].children[1].value);
  defender.wounds = Number(def.children[3].children[1].value);
  defender.woundsTaken = 0;
  defender.modelsLost = 0;

  const battleResults = modelsAttackModels(attacker, defender, 10);
  // set the text field
  const txt = document.getElementById("results-text");
  txt.value = JSON.stringify(battleResults);
}

setUpPage();
document.getElementById("results-button").onclick = calculateResults;
document.getElementById("new-wpn-btn").onclick = addWeapon;

export {};
