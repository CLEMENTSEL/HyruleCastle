import { enemies } from "../interface_characters";
import * as fs from 'fs'

export default function lesEnemies(nameEnemy: string): enemies {
    let i: number = 0;
    let ifFind: boolean = false;
    
    let enemiess = fs.readFileSync('/home/oui/mods_hyrule_castle/characters/Enemies/enemies.json', 'utf-8');
    const parseEnemiess = JSON.parse(enemiess);

    let Enemy: enemies = {
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

    while (i < parseEnemiess.length) {

        if (parseEnemiess[i].name === nameEnemy) {

            Enemy.id = parseEnemiess[i].id;
            Enemy.name = parseEnemiess[i].name;
            Enemy.hp = parseEnemiess[i].hp;
            Enemy.mp = parseEnemiess[i].mp;
            Enemy.str = parseEnemiess[i].str;
            Enemy.int = parseEnemiess[i].int;
            Enemy.def = parseEnemiess[i].def;
            Enemy.res = parseEnemiess[i].res;
            Enemy.spd = parseEnemiess[i].spd;
            Enemy.luck = parseEnemiess[i].luck;
            Enemy.race = parseEnemiess[i].race;
            Enemy.class = parseEnemiess[i].class;
            Enemy.rarity = parseEnemiess[i].rarity;
            ifFind = true;
            break
        }
    i++
    }
    if (ifFind === true) {
        return Enemy;
    }
    else {
        console.error("Cet Enemi n'existe pas");
        return Enemy;
    }
    
}