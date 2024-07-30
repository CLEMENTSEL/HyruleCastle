"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = lesRaces;
var fs = require("fs");
function lesRaces(nameRace) {
    var i = 0;
    var ifFind = false;
    var racess = fs.readFileSync('/home/oui/mods_hyrule_castle/characters/Races/races.json', 'utf-8');
    var pareRacess = JSON.parse(racess);
    var Race = {
        id: 0,
        name: '',
        strength: '',
        weakness: [0],
        rarity: ''
    };
    while (i < pareRacess.length) {
        if (pareRacess[i].name === nameRace) {
            Race.id = pareRacess[i].id;
            Race.name = pareRacess[i].name;
            Race.strength = pareRacess[i].strengths;
            Race.weakness = pareRacess[i].weaknesses;
            Race.rarity = pareRacess[i].rarity;
            ifFind = true;
            break;
        }
        i++;
    }
    if (ifFind === true) {
        return Race;
    }
    else {
        console.error("Cette Race n'existe pas");
        return Race;
    }
}
