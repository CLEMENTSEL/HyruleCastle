"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = sNd;
var readline_1 = require("../functions/readline");
function sNd() {
    var StageNDifficulty = {
        numberStage: 0,
        difficulty: 1,
        quit: 0
    };
    var i = 0;
    console.log("\x1b[" + "39m" + "============ " + "\x1b[" + "92m" + "Zelda" + "\x1b[" + "93m" + ": Le Chateau d\'Hyrule" + "\x1b[" + "39m" + " ============");
    (0, readline_1.getInputL)('Appuyez sur "Entrée" pour continuer . . .');
    console.log('Choisissez une difficulté\n');
    while (i < 1) {
        var choseDifficulty = (0, readline_1.getInputD)('== 1.Normal 2.Difficile 3.Insane Q.Quitter ==');
        console.log('');
        if (choseDifficulty === '1') {
            StageNDifficulty.difficulty = 1;
            break;
        }
        if (choseDifficulty === '2') {
            StageNDifficulty.difficulty = 2;
            break;
        }
        if (choseDifficulty === '3') {
            StageNDifficulty.difficulty = 3;
            break;
        }
        if (choseDifficulty.toUpperCase() === 'Q') {
            StageNDifficulty.quit = 1;
            return StageNDifficulty;
        }
    }
    console.log('');
    console.log('Combien d\'etage voulez-vous gravir pour aller sauver la princesse Zelda ?\n');
    while (i < 1) {
        var choseLvl = (0, readline_1.getInputD)('== 1. 10 | 2. 20 | 3. 50 | 4. 100 | Q.Quitter ==\n');
        console.log('');
        if (choseLvl === '1') {
            StageNDifficulty.numberStage = 0;
            break;
        }
        if (choseLvl === '2') {
            StageNDifficulty.numberStage = 20;
            break;
        }
        if (choseLvl === '3') {
            StageNDifficulty.numberStage = 50;
            break;
        }
        if (choseLvl === '4') {
            StageNDifficulty.numberStage = 100;
            break;
        }
        if (choseLvl.toUpperCase() === 'Q') {
            StageNDifficulty.quit = 1;
            return StageNDifficulty;
        }
    }
    return StageNDifficulty;
}
