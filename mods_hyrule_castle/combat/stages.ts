import { getInput, getInputL } from "../functions/readline";
import characters from "../characters/characters";


export default function stages(etage: string) {
    
    let numberEtage: string = "\x1b[" + "91m" +etage;

    if (etage !== 'X') {
        console.log('=============== '+"\x1b[" + "91m" +'Étage', numberEtage, "\x1b[" + "39m" +'================');
    }

    if (etage === 'X') {
        console.log('=============== '+"\x1b[" + "91m" +'Étage', numberEtage,"\x1b[" + "39m" +'================');
        console.log('Navi - "Regarde '+characters.randomPlayer+' ! C\est mon ex ! '+"\x1b[" + "31m" +characters.randomBoss+"\x1b[" + "39m" +' !"');
        console.log(characters.randomPlayer+' - "???"');
        getInputL('Navi - "euh ATTENTION IL ATTAQUE !"');
    }

}