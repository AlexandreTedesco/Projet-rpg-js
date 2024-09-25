export class Game {
  constructor(characters) {
    this.characters = characters; 
    this.turnLeft = 10;        
  }

  startGame() {
    console.log("La partie commence !");
    while (this.turnLeft > 0 && this.characters.filter(c => c.alive).length > 1) {
      this.startTurn();
    }
    this.endGame();
  }

  startTurn() {
    console.log(`TOUR ${11 - this.turnLeft}`); 
    this.characters = this.characters.filter(c => c.alive); 
    const shuffledCharacters = this.shuffleCharacters(this.characters); 

    shuffledCharacters.forEach(character => {
      if (character.alive) {
        console.log(`C'est le moment d'attaquer pour ${character.name}`);
        const actionType = Math.random() > 0.5 ? 'special' : 'normal';
        const target = this.chooseRandomTarget(character);
        if (target) {
          if (actionType === 'special') {
            character.specialAttack(target);
          } else {
            character.dealDamage(target);
            console.log(`${character.name} attaque ${target.name}. il lui inflige ${character.dmg} de damages. ${target.name} n'a plus que ${target.hp} HP.`);
          }
        }
      }
    });

    this.watchStats();
    this.skipTurn(); 
  }


  skipTurn() {
    this.turnLeft -= 1;
    if (this.turnLeft <= 0) {
      console.log("La partie est terminée, plus de tours restants !");
    }
  }

  watchStats() {
    console.log("Statistiques des personnages encore en vie:");
    this.characters.filter(c => c.alive).forEach(character => {
      console.log(`${character.name} - HP: ${character.hp}, Mana: ${character.mana}, Status: ${character.status}`);
    });
  }

  chooseRandomTarget(attacker) {
    const aliveCharacters = this.characters.filter(c => c.alive && c !== attacker);
    if (aliveCharacters.length > 0) {
      return aliveCharacters[Math.floor(Math.random() * aliveCharacters.length)];
    }
    return null;
  }

  shuffleCharacters(characters) {
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters;
  }

  endGame() {
    const aliveCharacters = this.characters.filter(c => c.alive);
    if (aliveCharacters.length === 1) {
      aliveCharacters[0].status = 'winner';
      console.log(`Le gagnant est ${aliveCharacters[0].name} !`);
    } else if (aliveCharacters.length > 1) {
      console.log("Il reste plusieurs personnages en vie, ils sont tous gagnants !");
      aliveCharacters.forEach(character => character.status = 'winner');
    } else {
      console.log("Tous les personnages sont éliminés !");
    }
  }
}
