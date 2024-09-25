import { Character } from "./character.js";

export class Fighter extends Character {
  constructor(name) {
    super(name, 12, 4, 40);
    this.damageReductionNextTurn = 0;
  }

  specialAttack(target) {

    if (!this.alive) { 
      console.log(`${this.name} est éliminé et ne peut plus utiliser d'attaque spéciale.`);
      return;
  }

    if (this.mana >= 20) {
      this.mana -= 20;
      console.log(`${this.name} utilise Dark Vision sur ${target.name}, infligeant 5 dégâts.`);
      
      target.takeDamage(5);
      
      this.damageReductionNextTurn = 2;
      console.log(`${this.name} prendra 2 dégâts de moins lors du prochain tour.`);
    } else {
      console.log(`${this.name} n'a pas assez de mana pour utiliser Dark Vision.`);
    }
  }

  takeDamage(amount) {
    if (this.damageReductionNextTurn > 0) {
      const reducedAmount = Math.max(0, amount - this.damageReductionNextTurn);
      console.log(`${this.name} réduit les dégâts reçus de 2. Il subit ${reducedAmount} dégâts au lieu de ${amount}.`);
      super.takeDamage(reducedAmount);
      this.damageReductionNextTurn = 0;
    } else {
      super.takeDamage(amount);
    }
  }
}