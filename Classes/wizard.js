import { Character } from "./character.js";

export class Wizard extends Character {
  constructor(name) {
    super(name, 9, 2, 180);
  }

  specialAttack(target) {

    if (!this.alive) { 
      console.log(`${this.name} est éliminé et ne peut plus utiliser d'attaque spéciale.`);
      return;
  }

    if (this.mana >= 20) {
      this.mana -= 20;
      console.log(`${this.name} utilise Fireball sur ${target.name}, infligeant 7 dégâts.`);
      
      target.takeDamage(7);
    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Fireball.`);
    }
  }
}