import { Character } from "./character.js";

export class Assassin extends Character {
  constructor(name) {
    super(name, 7, 6, 30);
    this.protectedNextTurn = false;
  }

  specialAttack(target) {
    if (!this.alive) {
      console.log(`${this.name} est éliminé et ne peut plus utiliser d'attaque spéciale.`);
      return;
  }

    if (this.mana >= 20) {
      this.mana -= 20;
      console.log(`${this.name} utilise Shadow Hit sur ${target.name}.`);
      
      this.protectedNextTurn = true;
      
      target.takeDamage(7);
      
      if (target.alive) {
        console.log(`${target.name} est toujours vivant. ${this.name} perdra 7 points de vie.`);
        
        

        if (!this.alive)  {
          this.takeDamage(7);
          console.log(`${this.name} est mort après avoir utilisé Shadow Hit.`);
        }
      } else {
        console.log(`${target.name} a été éliminé par Shadow Hit.`);
        
      }
    } else {
      console.log(`${this.name} n'a pas assez de mana pour Shadow Hit.`);
    }
  }

  takeDamage(amount) {
    if (this.protectedNextTurn) {
      console.log(`${this.name} est protégé des dégâts ce tour-ci.`);
      this.protectedNextTurn = false;
    } else {
      super.takeDamage(amount);
    }
  }
}
