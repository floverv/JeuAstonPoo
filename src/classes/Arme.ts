export class Arme {
    private degatMin: Number;
    private degaMax: Number;
    private TauxCC: Number;

    constructor() {
        this.degatMin = Math.floor(Math.random() * 10) + 1;
        this.degaMax = Math.floor(Math.random() * 10) + 11;
        this.TauxCC = Math.floor(Math.random() * 20 + 4);
    }
}