import readline from "readline";
import Epee from "../arme/Epee";
import Hache from "../arme/Hache";
import { Roles } from "../enum/Roles";
import { Gentil } from "../Gentil";

export class Outil {

    inputReader = async (question: string) => {
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

    async creerTabGentil() {
        let tabGentil: Gentil[] = [];
        let i = 0;

        let choix = await this.inputReader('Voulez-vous creer un personnage (o/n) ?');
        while (choix != "n") {
            i++;
            console.log('Creation dun nouveau personnage numero : '+i);
            await this.creerGentil().then(perso => {
                tabGentil.push(perso);
            });
            choix = await this.inputReader('Voulez-vous creer un personnage (o/n) ?');
        }
        console.log('Fin de la creation des personnages !');
        return tabGentil;
    }

    async creerGentil() {
        let arme: any;
        let role: any;
        
        let nom = await this.inputReader('Quel est le nom de votre Hero ?');
        console.log(`Le nom de votre hero est: ${nom}`);

        let nomArme = await this.inputReader('Quel est votre arme -> Epee ou Hache ?');
        while (nomArme != "Epee" && nomArme != "Hache") {
            console.log(`Le nom de votre arme est incorrect, veuillez choisir entre une Epee ou une Hache`);
            nomArme = await this.inputReader('Quel est votre arme -> Epee ou Hache ?');
        }

        if (nomArme == 'Epee') {
            arme = new Epee();
        } else {
            arme = new Hache();
        }

        let nomRole = await this.inputReader('Quel est le votre classe -> [Mage; Tank;] ?');
        while (nomRole != "Tank" && nomRole != "Mage") {
            console.log(`Le nom de votre classee est incorrect, veuillez choisir une classe`);
            nomRole = await this.inputReader('Quel est la classe de votre Hero ?');
        }

        if (nomRole == 'Mage') {
            role = Roles.Mage;
        } else if (nomRole == 'Tank') {
            role = Roles.Tank;
        }

        return new Gentil(nom, arme, role);
    }
}
