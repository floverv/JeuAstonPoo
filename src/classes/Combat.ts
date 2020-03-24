import { Partie } from "./Partie"
import { Roles } from "./enum/Roles";
import { Arme } from "./Arme";
import Hache from "./arme/Hache";
import Epee from "./arme/Epee";
import readline from "readline";
import { Gentil } from "./Gentil";

export default class Combat {

    private partie: Partie;

    constructor(partie: Partie) {
        this.partie = partie;
    }

    readlineReader = async (question: string) => {
        let response;
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        })
        await new Promise((resolve, reject) => {
            rl.question(`${question}`, (answer: string) => {
                resolve(answer)
            })
        }).then(onfull => {
            response = onfull;
            rl.close();
        })
    
        return response;
    }
    
    async creerGentil() {
        let arme: any;
        let role: any;
        
        let nom = await this.readlineReader('Quel est le nom de votre Hero ?');
        console.log(`Le nom de votre hero est: ${nom}`);

        let nomArme = await this.readlineReader('Quel est votre arme -> Epee ou Hache ?');
        while (nomArme != "Epee" && nomArme != "Hache") {
            console.log(`Le nom de votre arme est incorrect, veuillez choisir entre une Epee ou une Hache`);
            nomArme = await this.readlineReader('Quel est votre arme -> Epee ou Hache ?');
        }

        if (nomArme == 'Epee') {
            arme = new Epee();
        } else {
            arme = new Hache();
        }

        let nameRole = await this.readlineReader('Quel est le votre classe -> [Assassin; Mage; Tank; Guerrier] ?');
        while (nameRole != "Tank" && nameRole != "Mage") {
            console.log(`Le nom de votre classee est incorrect, veuillez choisir une classe`);
            nameRole = await this.readlineReader('Quel est la classe de votre Hero ?');
        }

        if (nameRole == 'Mage') {
            role = Roles.Mage;
        }

        return new Gentil(name, arme, role);
    }


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
    }
}

