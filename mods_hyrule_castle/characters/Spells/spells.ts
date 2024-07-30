import { spells } from "../interface_characters";
import * as fs from 'fs'

export default function leSpell(nameSpell: string): spells {
    let i: number = 0;
    let ifFind: boolean = false;
    
    let spellss = fs.readFileSync('/home/oui/mods_hyrule_castle/characters/Spells/spells.json', 'utf-8');
    const parseSpells = JSON.parse(spellss);

    let Spell: spells = {
        id: 0,
        name: '',
        cost: '',
        dmg: '',
        effect: '',
        cooldown: '',
        race: '',
        class: '',
        rarity: 0
    }

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
            break
        }
    i++
    }
    if (ifFind === true) {
        return Spell;
    }
    else {
        console.error("Ce Sort n'existe pas");
        return Spell;
    }
    
}