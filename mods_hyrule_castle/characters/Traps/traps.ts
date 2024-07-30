import { traps } from "../interface_characters";
import * as fs from 'fs'

export default function leSpell(nameTrap: string): traps {
    let i: number = 0;
    let ifFind: boolean = false;
    
    let trapss = fs.readFileSync('/home/oui/mods_hyrule_castle/characters/Traps/traps.json', 'utf-8');
    const parseTrapss = JSON.parse(trapss);

    let Trap: traps = {
        id: 0, 
        name: '', 
        requirement: '', 
        rarity: 0
    }

    while (i < parseTrapss.length) {

        if (parseTrapss[i].name === nameTrap) {

            Trap.id = parseTrapss[i].id;
            Trap.name = parseTrapss[i].name;
            Trap.requirement = parseTrapss[i].requirement;
            Trap.rarity = parseTrapss[i].rarity;
            
            ifFind = true;
            break
        }
    i++
    }
    if (ifFind === true) {
        return Trap;
    }
    else {
        console.error("Ce Piege n'existe pas");
        return Trap;
    }
    
}