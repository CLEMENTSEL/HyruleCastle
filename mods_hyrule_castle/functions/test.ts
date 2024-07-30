import {getRandomBoss,getRandomClass,getRandomEnemy,getRandomPlayer,getRandomRace,getRandomSpell,getRandomTrap} from '../functions/randomNames'


let a = getRandomBoss();
let b = getRandomPlayer();
let c = getRandomEnemy();

console.log('Boss:', a, ', Player:', b, ' Enemy:', c);