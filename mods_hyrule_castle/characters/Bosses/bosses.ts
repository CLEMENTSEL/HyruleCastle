import { bosses } from "../interface_characters";
import * as fs from 'fs'

export default function lesBoss(nameBoss: string): bosses {
    let i: number = 0;
    let ifFind: boolean = false;
    
    let Bosss = fs.readFileSync('/home/oui/mods_hyrule_castle/characters/Bosses/bosses.json', 'utf-8');
    const parseBosss = JSON.parse(Bosss);

    let Boss: bosses = {
        id: 0,
        name: '',
        hp: 0,
        mp: 0,
        str: 0,
        int: 0,
        def: 0,
        res: 0,
        spd: 0,
        luck: 0,
        race: 0,
        class: 0,
        rarity: 0 
    }

    while (i < parseBosss.length) {

        if (parseBosss[i].name === nameBoss) {
;
            Boss.id = parseBosss[i].id;
            Boss.name = parseBosss[i].name;
            Boss.hp = parseBosss[i].hp;
            Boss.mp = parseBosss[i].mp;
            Boss.str = parseBosss[i].str;
            Boss.int = parseBosss[i].int;
            Boss.def = parseBosss[i].def;
            Boss.res = parseBosss[i].res;
            Boss.spd = parseBosss[i].spd;
            Boss.luck = parseBosss[i].luck;
            Boss.race = parseBosss[i].race;
            Boss.class = parseBosss[i].class;
            Boss.rarity = parseBosss[i].rarity;
            ifFind = true;
            break
        }
    i++
    }
 
    if (ifFind === true) {
        return Boss;
    }
    else {
        console.error("Ce Boss n'existe pas");
        return Boss;
    }
}