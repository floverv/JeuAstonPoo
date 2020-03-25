import { Partie } from "./Partie";

export default class Combat {

    private partie: Partie;

    constructor(partie: Partie) {
        this.partie = partie;
    }

    /**
     * Verifie si une equipe est morte retourne true
     */
    verifieMort() {
        let tabGentil = this.partie.getTabGentils();
        let tabMechant = this.partie.getTabMechants();

        tabGentil.forEach(perso => {
            if (perso.getPv() == 0) {
                this.partie.supprGentil(perso);
            }
        });

        tabMechant.forEach(perso => {
            if (perso.getPv() == 0) {
                this.partie.supprMechant(perso);
            }
        });

        if (tabGentil.length == 0) {
            return true;
        }

        if (tabMechant.length == 0) {
            return true;
        }

        return false;
    }

    cibler = () => {
        let tabMechants = this.partie.getTabMechants();
        let tabGentils = this.partie.getTabGentils();
        
        this.partie.getTabGentils().forEach(persoGentil => {
            let random = Math.floor(Math.random() * tabMechants.length);
            let persoMechant = tabMechants[random];

            persoGentil.cibler(persoMechant);
            tabMechants = tabMechants.filter(monstre => monstre != persoMechant)
        });

        this.partie.getTabMechants().forEach(persoMechant => {
            let random = Math.floor(Math.random() * tabGentils.length);
            let persoGentil = tabGentils[random];

            persoMechant.cibler(persoGentil);
            tabGentils = tabGentils.filter(gentil => gentil != persoGentil)
        })
    }

    tour = () => {
        console.log('Tour numero : '+this.partie.getTour());
        this.partie.setTour(this.partie.getTour() + 1);
        
        if (Math.random() <= 0.5) {
            //Tour des gentils
            this.partie.getTabGentils().forEach(persoGentil => persoGentil.attaquer());
        } else {
            //Tour des mechants
            this.partie.getTabMechants().forEach(persoMechant => persoMechant.attaquer());
            
        }
    }
}

