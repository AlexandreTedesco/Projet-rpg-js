export function rechargeMana(character, amount) {
  character.mana += amount;
  console.log(`${character.name} regagne ${amount} points de mana. Mana actuel : ${character.mana}`);
}