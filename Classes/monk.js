import { Character } from "./character.js";

export class Monk extends Character {
  constructor(name) {
    super(name, 10, 3, 150);
  }

  specialAttack() {
    if (!this.alive) {
      console.log(`${this.name} est éliminé et ne peut plus utiliser d'attaque spéciale.`);
      return;
  }

    if (this.mana >= 25) {
      this.mana -= 25;
      this.hp += 3;
      console.log(`${this.name} utilise Heal et récupère 3 points de vie.`);
    } else {
      console.log(`${this.name} n'a pas assez de mana pour Heal.`);
    }
  }
}
