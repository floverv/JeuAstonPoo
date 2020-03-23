import { Personnage } from "./Personnage";

export class Gentil extends Personnage {
    soigner = (personnageSoigne: Personnage, soinPv: number) => {
        let pvPerso: number = personnageSoigne.getPv();
        let pvMaxPerso: number = personnageSoigne.getPvMax();
        if ((pvPerso + soinPv) > pvMaxPerso) {
            personnageSoigne.setPv(pvMaxPerso);
        } else {
            personnageSoigne.setPv(pvPerso + soinPv);
        }   
    }
}