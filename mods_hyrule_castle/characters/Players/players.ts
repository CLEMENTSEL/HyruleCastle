import { players } from "../interface_characters";
import * as fs from 'fs'

export default function lesplayers(namePlayer: string): players {
    let i: number = 0;
    let ifFind: boolean = false;
    
    let players = fs.readFileSync('/home/oui/mods_hyrule_castle/characters/Players/players.json', 'utf-8');
    const parsePlayers = JSON.parse(players);

    let Hero: players = {
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

    while (i < parsePlayers.length) {

        if (parsePlayers[i].name === namePlayer) {

            Hero.id = parsePlayers[i].id;
            Hero.name = parsePlayers[i].name;
            Hero.hp = parsePlayers[i].hp;
            Hero.mp = parsePlayers[i].mp;
            Hero.str = parsePlayers[i].str;
            Hero.int = parsePlayers[i].int;
            Hero.def = parsePlayers[i].def;
            Hero.res = parsePlayers[i].res;
            Hero.spd = parsePlayers[i].spd;
            Hero.luck = parsePlayers[i].luck;
            Hero.race = parsePlayers[i].race;
            Hero.class = parsePlayers[i].class;
            Hero.rarity = parsePlayers[i].rarity;
            ifFind = true;
            break
        }
    i++
    }
    if (ifFind === true) {
        return Hero;
    }
    else {
        console.error("Ce Hero n'existe pas");
        return Hero;
    }
    
}