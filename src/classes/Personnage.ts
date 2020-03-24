import { Arme } from './Arme'

export class Personnage {
    private nom : string;
    private pv : number;
    private pvMax: number;
    private defense: number;
    private arme: Arme;
    private cible: any = null;

    constructor(nom: string, arme: Arme) {
        this.nom = nom;
        this.pv = Math.floor(Math.random() * 150) + 50;
        this.pvMax = this.pv;
        this.defense = Math.floor(Math.random() * 50) + 5;
        this.arme = arme;
    }

    /**
     * Le personnage attaque la cible
     */
    attaquer = () => {
        let pvCible = this.cible.pv;
        let nomCible = this.cible.nom;
        let defenseCible = this.cible.defense;
        let degat = Math.floor(Math.random() * (this.arme.getDegatMax() - this.arme.getDegatMin()) + this.arme.getDegatMin());
        let CC = this.arme.getTauxCC()/100;

        //Taux de chance de critique
        if (Math.random() < CC) {
            console.log(`CRITIQUE !`);
            degat * CC;
        }
        
        //S'il y a une cible
        if (this.cible != null) {
            console.log(`${this.nom} a inflige ${degat} de degats`);
            //S'il y a encore de l'armure
            if ((defenseCible - degat) > 0) {
                defenseCible-= degat;
                console.log(`${this.nom} a attaqué ${nomCible}, il lui reste ${pvCible} pv et ${defenseCible} de defense.`);
            } else {
                //S'il n'a plus d'armure
                defenseCible = 0;
                if (pvCible - degat <= 0) {
                    pvCible-= degat;
                    console.log(`${this.nom} a attaqué ${nomCible}, il lui reste ${pvCible} pv.`);
                } else {
                    this.cible.setPv(0);
                    console.log(`${this.nom} a tué ${nomCible}.`);
                }
            }
        }
    }

    /**
     * Le personnage cible un ennemie
     */
    cibler = (cible: Personnage) => { 
        this.cible = cible;
        console.log(`${this.nom} a ciblé ${this.cible.nom}`);
    }

    /**
     * Remet à zero la cible
     */
    resetCible = () => {
        this.cible = null;
    }

    getCible() {
        return this.cible;
    }

    setCible(cible: Personnage) {
        this.cible = cible;
    }


    getNom() {
        return this.nom;
    }

    setNom(nom: string) {
        this.nom = nom;
    }

    getPv() {
        return this.pv;
    }

    setPv(pv: number) {
        this.pv = pv;
    }

    getPvMax() {
        return this.pvMax;
    }

    setPvMax(pvMax: number) {
        this.pvMax = pvMax;
    }

    getDefense() {
        return this.defense;
    }

    setDefense(defense: number) {
        this.defense = defense;
    }

    getArme() {
        return this.arme;
    }

    setArme(arme: Arme) {
        this.arme = arme;
    }
}