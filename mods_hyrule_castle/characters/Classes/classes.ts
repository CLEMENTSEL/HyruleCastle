import { classes } from "../interface_characters";
import * as fs from 'fs'

export default function lesClass(nameClass: string): classes {
    let i: number = 0;
    let ifFind: boolean = false;
    
    let classs = fs.readFileSync('/home/oui/mods_hyrule_castle/characters/Classes/classes.json', 'utf-8');
    const parseClasss = JSON.parse(classs);

    let Class: classes = {
    id: 0,
    name: '',
    strengths: [0],
    weaknesses: [0],
    attack_type: '',
    alignment: '',
    rarity: 0 
    }

    while (i < parseClasss.length) {

        if (parseClasss[i].name === nameClass) {

            Class.id = parseClasss[i].id;
            Class.name = parseClasss[i].name;
            Class.strengths = parseClasss[i].strengths;
            Class.weaknesses = parseClasss[i].weaknesses;
            Class.attack_type = parseClasss[i].attack_type;
            Class.alignment = parseClasss[i].alignment;
            Class.rarity = parseClasss[i].rarity;
            ifFind = true;
            break
        }
    i++
    }
    if (ifFind === true) {
        return Class;
    }
    else {
        console.error("Cette Classe n'existe pas");
        return Class;
    }
    
}