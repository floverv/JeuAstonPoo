import { Gentil } from "./Gentil";
import { Mechant } from "./Mechant";
import { Arme } from "./Arme";

export class Partie {
    private tabGentils: Gentil[];
    private tabMechants: Mechant[];

    constructor(tabGentils: Gentil[]) {
        this.tabGentils = tabGentils;
        this.tabMechants = this.generationMechants();
    }

    ajoutGentil(personnage: Gentil) {
        this.tabGentils.push(personnage);
    }

    generationMechants = () => {
        let listMechants: Mechant[] = [];
        for(let i = 0; i < this.tabGentils.length; i++) {
            let mechant: Mechant = new Mechant('', new Arme());
            mechant.randomName(mechant);
            listMechants.push(mechant);
        }

        return listMechants;
    }

    getTabGentils() {
        return this.tabGentils;
    }

    getTabMechants() {
        return this.tabMechants;
    }
}