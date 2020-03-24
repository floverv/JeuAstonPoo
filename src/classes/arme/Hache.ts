import { Arme } from "../Arme";

//Cette classe augmente les dégats
export default class Hache extends Arme {
    
    private boost: number = 20;

    /**
     * Constructeur de la hache
     */
    constructor() {
        super();
        this.setDegatMin(this.getDegatMin() + this.boost);
        this.setDegatMax(this.getDegatMax() + this.boost);
    }
}