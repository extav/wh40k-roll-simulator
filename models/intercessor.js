"use strict";
import { lasgun, heavy_boltor, boltCannon } from "../weapons/lasgun.js";

const intercessor = {
  name: "intercessor",
  toughness: 4,
  save: 3,
  wounds: 2,
  woundsTaken: 0,
  modelsLost: 0,
};

const guardsman = {
  name: "guardsman",
  toughness: 4,
  save: 3,
  wounds: 2,
  woundsTaken: 0,
  modelsLost: 0,
  weapons: [
    // lasgun,
    // heavy_boltor
    boltCannon
  ]
};

const forge_fiend = {
  name: "Forge fiend",
  toughness: 4,
  save: 3,
  wounds: 2,
  woundsTaken: 0,
  modelsLost: 0,
};

export { intercessor, guardsman, forge_fiend };
