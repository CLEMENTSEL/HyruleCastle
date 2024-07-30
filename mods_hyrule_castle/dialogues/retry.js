"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = retry;
var readline_1 = require("../functions/readline");
function retry() {
    var i = 0;
    (0, readline_1.getInput)('Navi - "Sah t\'es trop nul"');
    (0, readline_1.getInputL)("Vous avez perdu...");
    var queFaire = (0, readline_1.getInputD)("Voulez vous rejouer ? (O/N)\n");
    while (i < 1) { // boucle si on se trompe d'input
        if (queFaire.toLowerCase() === 'o') {
            return 0; // on rejoue
        }
        if (queFaire.toLowerCase() === 'n') {
            console.log('Goodbye Hero...');
            return 1; // on quitte le jeu
        }
        queFaire = (0, readline_1.getInputD)("VOULEZ VOUS REJOUER OU PAS ? (O/N)\n");
    }
}
