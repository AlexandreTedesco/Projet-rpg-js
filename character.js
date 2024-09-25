import { rechargeMana } from "./manaCharger.js";

export class Character {
    constructor(name, hp, dmg, mana) {
      this.name = name;     
      this.hp = hp;         
      this.dmg = dmg;       
      this.mana = mana;     
      this.alive = true;
      this.status = 'playing';  
  }

  takeDamage(amount) {
    if (!this.alive) {
      console.log(`${this.name} est déjà éliminé.`);
      return;
    }
    
    this.hp -= amount;

    if (this.hp <= 0) {
      this.hp = 0;
      this.alive = false;
      this.status = 'loser';
      console.log(`${this.name} est éliminé et devient loser.`);
    }
  }

  dealDamage(victim) {
    if (!this.alive) {
        console.log(`${this.name} est éliminé et ne peut plus attaquer.`);
        return; 
    }
    
    if (!victim.alive) {
        console.log(`${victim.name} est déjà éliminé et ne peut pas être attaqué.`);
        return;
    }
    
    victim.takeDamage(this.dmg);

    if (!victim.alive) {
        rechargeMana(this, 20);
    }
}
}
