import { Arme } from "../Arme";

//Cette classe augmente les chances de coups critiques
export default class Epee extends Arme {

    private boost: number = 20;

    /**
     * Constructeur de l'épée
     */
    constructor() {
        super();
        this.setTauxCC(this.getTauxCC() + this.boost);
    }
}