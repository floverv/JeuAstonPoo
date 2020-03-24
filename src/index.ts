import { Arme } from "./classes/Arme";
import { Personnage } from "./classes/Personnage";
import Hache from "./classes/arme/Hache";
import Epee from "./classes/arme/Epee";
import { Gentil } from "./classes/Gentil";
import { Partie } from "./classes/Partie";
import { Roles } from "./classes/enum/Roles";

/* const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('question ?', (variable: any) => {
    console.log(variable+'--');
    readline.close();
})  */

let arme1 = new Epee();
let arme2 = new Hache();
let perso1 = new Gentil('michel', arme1, Roles.Assassin); 
let perso2 = new Gentil('jack', arme2, Roles.Tank); 

let tabGentil = [perso1, perso2];

let partie = new Partie(tabGentil);

console.log(partie.getTabMechants(), partie.getTabGentils());




