"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = leSpell;
var fs = require("fs");
function leSpell(nameSpell) {
    var i = 0;
    var ifFind = false;
    var spellss = fs.readFileSync('/home/oui/mods_hyrule_castle/characters/Spells/spells.json', 'utf-8');
    var parseSpells = JSON.parse(spellss);
    var Spell = {
        id: 0,
        name: '',
        cost: '',
        dmg: '',
        effect: '',
        cooldown: '',
        race: '',
        class: '',
        rarity: 0
    };
    while (i < parseSpells.length) {
        if (parseSpells[i].name === nameSpell) {
            Spell.id = parseSpells[i].id;
            Spell.name = parseSpells[i].name;
            Spell.cost = parseSpells[i].cost;
            Spell.dmg = parseSpells[i].dmg;
            Spell.effect = parseSpells[i].effect;
            Spell.cooldown = parseSpells[i].cooldown;
            Spell.race = parseSpells[i].race;
            Spell.class = parseSpells[i].class;
            Spell.rarity = parseSpells[i].rarity;
            ifFind = true;
            break;
        }
        i++;
    }
    if (ifFind === true) {
        return Spell;
    }
    else {
        console.error("Ce Sort n'existe pas");
        return Spell;
    }
}
