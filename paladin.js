import { Character } from "./character.js";

export class Paladin extends Character {
  constructor(name) {
    super(name, 16, 3, 160);
  }

  specialAttack(target) {
    if (!this.alive) {
      console.log(`${this.name} est éliminé et ne peut plus utiliser d'attaque spéciale.`);
      return;
  }

    if (this.mana >= 40) {
      this.mana -= 40;
      console.log(`${this.name} utilise Healing Lighting sur ${target.name}, infligeant 4 dégâts et se soignant de 5.`);
      target.takeDamage(4);
      this.hp += 5;
    } else {
      console.log(`${this.name} n'a pas assez de mana pour Healing Lighting.`);
    }
  }
}
