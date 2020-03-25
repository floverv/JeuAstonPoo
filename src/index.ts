import { Partie } from "./classes/Partie";
import { Outil } from "./classes/outil/outil";
import Combat from "./classes/Combat";

let outilCreation = new Outil();

outilCreation.creerTabGentil().then(listGentils => {
    let partie = new Partie(listGentils);
    let combat = new Combat(partie);
    combat.cibler();
})










