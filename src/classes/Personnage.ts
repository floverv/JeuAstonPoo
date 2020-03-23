import { Arme } from './Arme'

export class Personnage {
    private nom : string;
    private pv : number;
    private pvMax: number;
    private defense: number;
    private arme: Arme;

    constructor(nom: string, arme: Arme) {
        this.nom = nom;
        this.pv = 150;
        this.pvMax = 150;
        this.defense = 50;
        this.arme = arme;
    }

    attaque = (ennemie: Personnage) => { }

    cibler = (cible: Personnage) => { }

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