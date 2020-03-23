import { Personnage } from "./Personnage";

export class Mechant extends Personnage {
    randomName = (personnage: Personnage) => {
        var name: string = '';
        var characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength: number = characters.length;
        for ( var i: number = 0; i < 8; i++ ) {
           name += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        personnage.setNom(name);
    }
}