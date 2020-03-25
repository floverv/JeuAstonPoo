import { Personnage } from "./Personnage";

export class Mechant extends Personnage {
    randomName = (personnage: Personnage) => {
        let name = Math.random().toString(36).replace(/[^a-z]+/g, '')
        personnage.setNom(name[0].toUpperCase() + name.substring(1));
    }
}