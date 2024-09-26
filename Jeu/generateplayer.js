import { Fighter } from "../Classes/fighter.js";
import { Monk } from "../Classes/monk.js";
import { Berzerker } from "../Classes/berzerker.js";
import { Assassin } from "../Classes/assassin.js";
import { Paladin } from "../Classes/paladin.js";
import { Wizard } from "../Classes/wizard.js";
import { Necromancer } from "../Classes/necromancer.js";

const classes = [Wizard, Necromancer, Berzerker, Fighter, Monk, Assassin, Paladin];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function generateRandomCharacters(numCharacters) {
  const characters = [];
  const names = ["Draven", "Moana", "Grace", "Carl", "Ulder", "Patrick", "Zara", "Finn", "Luna", "Myra"]; 

  for (let i = 0; i < numCharacters; i++) {
    const randomClass = classes[getRandomInt(classes.length)];
    const randomName = names.splice(getRandomInt(names.length), 1)[0];
    const character = new randomClass(randomName); 
    characters.push(character);
  }
  return characters;
}