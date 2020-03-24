import { Arme } from "./classes/Arme";
import { Personnage } from "./classes/Personnage";
import Hache from "./classes/arme/Hache";
import Epee from "./classes/arme/Epee";

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('question ?', (variable: any) => {
    console.log(variable+'--');
    readline.close();
}) 

let arme1 = new Epee();
let perso1 = new Personnage('michel', arme1); 

let arme2 = new Hache();
let perso2 = new Personnage('michelle', arme2); 

console.log(arme1.afficherStats());

//console.log(perso1, perso2);


