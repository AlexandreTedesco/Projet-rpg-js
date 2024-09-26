import { Character } from "./character.js";

export class Necromancer extends Character {
  constructor(name) {
    super(name, 10, 3, 120);
  }

  specialAttack(target) {

    if (!this.alive) { 
      console.log(`${this.name} est éliminé et ne peut plus utiliser d'attaque spéciale.`);
      return;
  }

    if (this.mana >= 30) {
      const maxDamage = 6;
      this.mana -= 30;

      const actualDamage = Math.min(maxDamage, target.hp);

      const healthGain = Math.floor(actualDamage * 0.5); 
      this.hp += healthGain;

      console.log(`${this.name} utilise Soul Drain sur ${target.name}, infligeant ${actualDamage} dégâts et regagne ${healthGain} Points de vie`);
      
      target.takeDamage(actualDamage);
    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Soul Drain.`);
    }
  }
}