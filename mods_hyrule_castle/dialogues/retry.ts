import { getInput, getInputL, getInputD} from "../functions/readline";

export default function retry() {

    let i: number = 0;

    getInput('Navi - "Sah t\'es trop nul"')
    getInputL("Vous avez perdu...")
    let queFaire = getInputD("Voulez vous rejouer ? (O/N)\n")
    while (i < 1) {// boucle si on se trompe d'input
        
        if (queFaire.toLowerCase() === 'o') {
            return 0 // on rejoue
        }
        if (queFaire.toLowerCase() === 'n') {
            console.log('Goodbye Hero...');
            return 1 // on quitte le jeu
        }
        queFaire = getInputD("VOULEZ VOUS REJOUER OU PAS ? (O/N)\n")
    }

}