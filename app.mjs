import { Fighter } from "./fighter.js";
import { Monk } from "./monk.js";
import { Berzerker } from "./berzerker.js";
import { Assassin } from "./assassin.js";
import { Paladin } from "./paladin.js";
import { Game } from "./game.js";


const grace = new Fighter("Grace");
const ulder = new Paladin("Ulder");
const moana = new Monk("Moana");
const draven = new Berzerker("Draven");
const carl = new Assassin("Carl");

const characters = [grace, ulder, moana, draven, carl];

const game = new Game(characters);

game.startGame();