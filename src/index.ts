import { Gentil } from "./classes/Gentil";
import { Partie } from "./classes/Partie";
import { Roles } from "./classes/enum/Roles";
import Epee from "./classes/arme/Epee";
import Hache from "./classes/arme/Hache";
import Combat from "./classes/Combat";

let arme1 = new Epee();
let arme2 = new Hache();
let perso1 = new Gentil('michel', arme1, Roles.Assassin); 
let perso2 = new Gentil('jack', arme2, Roles.Tank); 

let tabGentil = [perso1, perso2];

let partie = new Partie(tabGentil);

let combat = new Combat(partie);
combat.creerGentil();




