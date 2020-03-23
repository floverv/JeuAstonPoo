import { Arme } from "./classes/Arme";
import { Personnage } from "./classes/Personnage";

const readline = require('readline');
let arme1 = new Arme();
let perso1 = new Personnage('michel', arme1); 

console.log(perso1);


