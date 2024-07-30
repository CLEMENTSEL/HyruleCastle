"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dialogueDebut;
var readline_1 = require("../functions/readline");
var characters_1 = require("../characters/characters");
function dialogueDebut() {
    var YorN = 0; //pour faire une boucle infini
    var leguess = ''; // pour récupérer un input
    (0, readline_1.getInput)('Navi - "Link... Link... HEY, LINK, WAKE UP !!!');
    (0, readline_1.getInput)('- Reveil toi ! La princesse Zelda a disparu !"');
    if (characters_1.default.randomPlayer === 'Link') {
        (0, readline_1.getInput)('Link - "ah"');
        (0, readline_1.getInput)('Navi - "C\'est Ganon, il l\'a enlevé ! Il faut aller la secourir !"');
        (0, readline_1.getInput)('Link - "euh"');
        (0, readline_1.getInputL)('Navi - "Il faut aller au chateau d\'Hyrule !"');
    }
    if (characters_1.default.randomPlayer === 'Young Link') {
        (0, readline_1.getInput)('- "WESH T\ES TOUT PETIT"');
        (0, readline_1.getInput)(characters_1.default.randomPlayer + ' - "gougou gaga"');
        (0, readline_1.getInput)('Navi - "euh . . . BON OK on s\'en fiche"');
        (0, readline_1.getInputL)('- "Il faut aller au chateau d\'Hyrule !"');
    }
    if (characters_1.default.randomPlayer !== 'Link' && characters_1.default.randomPlayer !== "Young Link") {
        (0, readline_1.getInput)('Navi - "Att mais t\'es pas Link"');
        (0, readline_1.getInput)(characters_1.default.randomPlayer + ' - "bah non ??"');
        (0, readline_1.getInput)('Navi - "euh . . . BON OK on s\'en fiche"');
        (0, readline_1.getInputL)('- "Il faut aller au chateau d\'Hyrule !"');
    }
    leguess = (0, readline_1.getInputD)("Partir pour le chateau d'Hyrule ? (O/N/Q)\n");
    while (YorN < 1) { //boucle si on appuie sur la mauvaise touche
        if (leguess.toUpperCase() === 'O') {
            if (characters_1.default.randomPlayer === 'Link') {
                (0, readline_1.getInput)('Link - "ok go"\n');
            }
            if (characters_1.default.randomPlayer !== 'Link') {
                (0, readline_1.getInput)(characters_1.default.randomPlayer + ' - "euh . . . vas y hein pourquoi pas"\n');
            }
            (0, readline_1.getInput)('. . .');
            (0, readline_1.getInputL)("Vous voila au chateau d\'Hyrule !");
            YorN = 1;
            var O = 'o';
            return O; //il faut retourner quelque chose mais a l'arrivé on vérifie seulement si c'est N sinon on continue
        }
        if (leguess.toUpperCase() === 'N') {
            if (characters_1.default.randomPlayer === 'Link') {
                (0, readline_1.getInput)('Link - "flemme"');
            }
            if (characters_1.default.randomPlayer !== 'Link') {
                (0, readline_1.getInput)(characters_1.default.randomPlayer + ' - "Bah je jsuis pas Link ? Dégage"');
            }
            (0, readline_1.getInput)("Navi - \uD83D\uDE10");
            YorN = 1;
            var N = 'n';
            return N; //on returne n car a la sortie si le return = 'n' on quitte le jeu
        }
        if (leguess.toUpperCase() === 'Q') {
            var N = 'n';
            return N; //on returne n car a la sortie si le return = 'n' on quitte le jeu
        }
        else {
            leguess = (0, readline_1.getInputD)("Partir pour le chateau d'Hyrule ? (O/N/Q)\n");
        }
    }
}
