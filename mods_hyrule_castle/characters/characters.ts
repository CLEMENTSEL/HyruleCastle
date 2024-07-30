import { characters, players, enemies, classes, races, spells, traps } from "./interface_characters";
import * as fs from 'fs'
import lesBoss from "./Bosses/bosses"
import lesClasses from "./Classes/classes"
import lesEnemies from "./Enemies/enemies"
import lesPlayers from "./Players/players"
import lesRaces from "./Races/races"
import lesSpells from "./Spells/spells"
import lesTraps from "./Traps/traps"

import {getRandomBoss,getRandomClass,getRandomEnemy,getRandomPlayer,getRandomRace,getRandomSpell,getRandomTrap} from '../functions/randomNames'


let randomPlayer = getRandomPlayer();//on get un nom d'hero random
let randomBoss = getRandomBoss();// on get un nom de boss random

let Player = lesPlayers(randomPlayer);// on l'attribue
let Boss = lesBoss(randomBoss)// on l'attribue

export default {Player, Boss, randomPlayer, randomBoss}