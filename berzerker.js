import { Character } from "./character.js";

export class Berzerker extends Character {
  constructor(name) {
    super(name, 8, 4, 0);
  }

  specialAttack() {
    if (!this.alive) { 
      console.log(`${this.name} est éliminé et ne peut plus utiliser d'attaque spéciale.`);
      return;
  }

    this.dmg += 1;
    this.takeDamage(1);
    console.log(`${this.name} utilise Rage, augmentant son attaque de 1 mais perdant 1 point de vie.`);
  }
}
