import { races } from "../interface_characters";
import * as fs from 'fs'

export default function lesRaces(nameRace: string): races {
    let i: number = 0;
    let ifFind: boolean = false;
    
    let racess = fs.readFileSync('/home/oui/mods_hyrule_castle/characters/Races/races.json', 'utf-8');
    const pareRacess = JSON.parse(racess);

    let Race: races = {
        id: 0,
        name: '',
        strength: '',
        weakness: [0],
        rarity: ''
    }

    while (i < pareRacess.length) {

        if (pareRacess[i].name === nameRace) {

            Race.id = pareRacess[i].id;
            Race.name = pareRacess[i].name;
            Race.strength = pareRacess[i].strengths;
            Race.weakness = pareRacess[i].weaknesses;
            Race.rarity = pareRacess[i].rarity;
            
            ifFind = true;
            break
        }
    i++
    }
    if (ifFind === true) {
        return Race;
    }
    else {
        console.error("Cette Race n'existe pas");
        return Race;
    }
    
}