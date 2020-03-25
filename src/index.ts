import { Partie } from "./classes/Partie";
import { Outil } from "./classes/outil/outil";
import Combat from "./classes/Combat";

let outilCreation = new Outil();

outilCreation.creerTabGentil().then(listGentils => {
    let partie = new Partie(listGentils);
    let combat = new Combat(partie);
    combat.cibler();
    while (!combat.verifieMort()) {
        combat.tour();
    }
    let name: string;
    if (partie.getTabGentils().length == 0) {
        name = "Gentils"
    } else {
        name = "Mechants"
    }
    console.log(`Les ${name} ont remporté ce combat !`);
    console.log('Fin du combat.');
})










