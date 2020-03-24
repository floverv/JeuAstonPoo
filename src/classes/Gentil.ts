import { Personnage } from "./Personnage";
import { Roles } from "./enum/Roles";
import { Arme } from "./Arme";

export class Gentil extends Personnage {
    private role: Roles;

    constructor(nom = '', arme: Arme, role: Roles) {
        super(nom, arme);
        this.role = role;
    }

    soigner = (personnageSoigne: Personnage) => {
        //Si le gentil est un mage
        if( this.role == Roles.Mage) {
            let soinPv = Math.floor(Math.random() * 10 + 5);
            let pvPerso: number = personnageSoigne.getPv();
            let pvMaxPerso: number = personnageSoigne.getPvMax();

            //Si les pv soignée sont superieur au pv MAX.
            if ((pvPerso + soinPv) > pvMaxPerso) {
                personnageSoigne.setPv(pvMaxPerso);
            } else {
                personnageSoigne.setPv(pvPerso + soinPv);
            }

            console.log(`${personnageSoigne.getNom()} vient d'etre soigné de ${soinPv} PV.`);
        }
    }
}