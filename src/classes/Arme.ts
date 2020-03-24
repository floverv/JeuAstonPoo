export class Arme {
    private degatMin: number;
    private degatMax: number;
    private tauxCC: number;

    /**
     * Constructeur de l'épée
     */
    constructor() {
        this.degatMin = Math.floor(Math.random() * 10) + 1;
        this.degatMax = Math.floor(Math.random() * 10) + 10;
        this.tauxCC = Math.floor(Math.random() * 20 + 4);
    }

    /**
     * Getter de degaMin
     */
    getDegatMin() {
        return this.degatMin;    
    }

    /**
     * Setter de degaMax
     * @param degatMin
     */
    setDegatMin(degatMin: number) {
        this.degatMin = degatMin;
    }

    /**
     * Getter de degaMax
     */
    getDegatMax() {
        return this.degatMax;    
    }

    /**
     * Setter de degaMax
     * @param degatMax 
     */
    setDegatMax(degatMax: number) {
        this.degatMax = degatMax;
    }

    /**
     * Getter de tauxCC
     */
    getTauxCC() {
        return this.tauxCC;
    }

    /**
     * Setter de tauxCC
     * @param tauxCC 
     */
    setTauxCC(tauxCC: number) {
        this.tauxCC = tauxCC;
    }

    /**
     * Affiche les stats de l'arme
     */
    afficherStats() : string {
        let response: string = `Voici les stats de cette arme :
        > Dégâts minimums : ${this.degatMin}
        > Dégâts maximums : ${this.degatMax}
        > Chance de coup critiques : ${this.tauxCC}`;
        return response;
    }



}