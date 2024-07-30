import {getInput,getInputL,getInputD} from '../functions/readline';
import characters from '../characters/characters'

export default function dialogueDebut() {
    let YorN: number = 0;//pour faire une boucle infini
    let leguess: string = '';// pour récupérer un input
    
    
    getInput('Navi - "Link... Link... HEY, LINK, WAKE UP !!!');
    getInput('- Reveil toi ! La princesse Zelda a disparu !"');
    if (characters.randomPlayer === 'Link') {
        getInput('Link - "ah"');
        getInput('Navi - "C\'est Ganon, il l\'a enlevé ! Il faut aller la secourir !"');
        getInput('Link - "euh"');
        getInputL('Navi - "Il faut aller au chateau d\'Hyrule !"');
    }
    if (characters.randomPlayer === 'Young Link') {
        getInput('- "WESH T\ES TOUT PETIT"');
        getInput(characters.randomPlayer + ' - "gougou gaga"');
        getInput('Navi - "euh . . . BON OK on s\'en fiche"');
        getInputL('- "Il faut aller au chateau d\'Hyrule !"');
    }
    if (characters.randomPlayer !== 'Link' && characters.randomPlayer !== "Young Link") {
        getInput('Navi - "Att mais t\'es pas Link"');
        getInput(characters.randomPlayer + ' - "bah non ??"');
        getInput('Navi - "euh . . . BON OK on s\'en fiche"');
        getInputL('- "Il faut aller au chateau d\'Hyrule !"');
    }
    
    leguess = getInputD("Partir pour le chateau d'Hyrule ? (O/N/Q)\n");

    while (YorN < 1) {//boucle si on appuie sur la mauvaise touche
        if (leguess.toUpperCase() === 'O') {
            if (characters.randomPlayer === 'Link') {
                getInput('Link - "ok go"\n');
            }
            if (characters.randomPlayer !== 'Link') {
                getInput(characters.randomPlayer+' - "euh . . . vas y hein pourquoi pas"\n');
            }
            
            getInput('. . .');
            getInputL("Vous voila au chateau d\'Hyrule !");
            YorN = 1;
            let O: string = 'o'
            return O;//il faut retourner quelque chose mais a l'arrivé on vérifie seulement si c'est N sinon on continue
        }
        if (leguess.toUpperCase() === 'N') {
            if (characters.randomPlayer === 'Link') {
                getInput('Link - "flemme"');
            }
            if (characters.randomPlayer !== 'Link') {
                getInput(characters.randomPlayer+' - "Bah je jsuis pas Link ? Dégage"');
            }
            getInput('Navi - \u{1F610}');
            YorN = 1;
            let N: string = 'n';
            return N;//on returne n car a la sortie si le return = 'n' on quitte le jeu
        }
        if (leguess.toUpperCase() === 'Q') {
            let N: string = 'n';
            return N;//on returne n car a la sortie si le return = 'n' on quitte le jeu
        }
        else {
            leguess = getInputD("Partir pour le chateau d'Hyrule ? (O/N/Q)\n");
        }
    }
}