"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = stages;
var readline_1 = require("../functions/readline");
var characters_1 = require("../characters/characters");
function stages(etage) {
    var numberEtage = "\x1b[" + "91m" + etage;
    if (etage !== 'X') {
        console.log('=============== ' + "\x1b[" + "91m" + 'Étage', numberEtage, "\x1b[" + "39m" + '================');
    }
    if (etage === 'X') {
        console.log('=============== ' + "\x1b[" + "91m" + 'Étage', numberEtage, "\x1b[" + "39m" + '================');
        console.log('Navi - "Regarde ' + characters_1.default.randomPlayer + ' ! C\est mon ex ! ' + "\x1b[" + "31m" + characters_1.default.randomBoss + "\x1b[" + "39m" + ' !"');
        console.log(characters_1.default.randomPlayer + ' - "???"');
        (0, readline_1.getInputL)('Navi - "euh ATTENTION IL ATTAQUE !"');
    }
}
