"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = leSpell;
var fs = require("fs");
function leSpell(nameTrap) {
    var i = 0;
    var ifFind = false;
    var trapss = fs.readFileSync('/home/oui/mods_hyrule_castle/characters/Traps/traps.json', 'utf-8');
    var parseTrapss = JSON.parse(trapss);
    var Trap = {
        id: 0,
        name: '',
        requirement: '',
        rarity: 0
    };
    while (i < parseTrapss.length) {
        if (parseTrapss[i].name === nameTrap) {
            Trap.id = parseTrapss[i].id;
            Trap.name = parseTrapss[i].name;
            Trap.requirement = parseTrapss[i].requirement;
            Trap.rarity = parseTrapss[i].rarity;
            ifFind = true;
            break;
        }
        i++;
    }
    if (ifFind === true) {
        return Trap;
    }
    else {
        console.error("Ce Piege n'existe pas");
        return Trap;
    }
}
