import lesBoss from "../characters/Bosses/bosses";
import characters from "../characters/characters";
import { getRandomBoss } from "../functions/randomNames";
import { getInput, getInputL, getInputD } from "../functions/readline";

export default function combatGanon(numberCombat: string, pvPlayer: any, coin: any, difficulty: any, numberOfStage: any, stageLevel: any) {
    
    let myHero = {
        hp: pvPlayer,
        coins: coin,
        finiORno: 0,
        stageLvl: stageLevel
    }
    let randomBoss = getRandomBoss();// pour le combat, on a des enemies aleatoires, donc on recupere un nom d'enemy random ici plutot que dans le fichier Characters
    let Boss = lesBoss(randomBoss);// puis on lui attribu

    let hpPlayer = myHero.hp;
    let coinsPlayer = myHero.coins;
    let hpBarPlayer: string = '';

    let hpBoss: number = Boss.hp;
    let atkBoss = Boss.str;
    let hpBarBoss: string = '';

    if (difficulty === 2) {
        hpBoss = hpBoss * 1.5;
        atkBoss = atkBoss * 1.5;
        Boss.hp = Boss.hp * 1.5;
        Boss.str = Boss.str * 1.5;
    }
    if (difficulty === 3) {
        hpBoss = hpBoss * 2;
        atkBoss = atkBoss * 2
        Boss.hp = Boss.hp * 2;
        Boss.str = Boss.str * 2;
    }

    let nmbCombat: string = "\x1b[" + "91m" + numberCombat
    let i: number = 0;
    let queFaire: string = '';
    
    
    
    while (characters.Player.hp !== 0 || Boss.hp !== 0) {
    
        if (hpBoss > 0 && hpPlayer > 0) {
            
            while (i < 1) {
                // console.clear();
                console.log('=============== '+"\x1b[" + "91m" +'Combat', nmbCombat, "\x1b[" + "39m" +'================');
                console.log("\x1b[" + "31m" + randomBoss +"\x1b[" + "39m" +' (' + hpBoss + '/' + Boss.hp+')');
                while (i < hpBoss) {//incrémentation barre hp BOSS
                    hpBarBoss += '\u{1F5A4}';
                    i++
                }

                while (i < Boss.hp) {
                    hpBarBoss += '\u{1F90D}';
                    i++
                }
                i = 0;
                console.log(hpBarBoss);
                hpBarBoss = '';

                console.log('');

                console.log("\x1b[" + "92m" + characters.randomPlayer+"\x1b[" + "39m" + ' (' + hpPlayer + '/' + characters.Player.hp + ')', myHero.coins+'\u{1F4B0}')
                while (i < hpPlayer) {//incrémentation barre hp PLAYER
                    hpBarPlayer += '\u{1F49A}';
                    i++
                }
                while (i < characters.Player.hp) {
                    hpBarPlayer += '\u{1F90D}';
                    i++
                }
                i = 0;
                
                console.log(hpBarPlayer);
                hpBarPlayer = '';

                console.log('');
                console.log("\x1b[" + "39m" + '============ Que voulez vous faire ? ============');
                
                queFaire = getInputD("1."+"\x1b[" + "91m" +" Attaquer"+"\x1b[" + "39m" +" 2."+"\x1b[" + "92m" +" Se soigner"+"\x1b[" + "39m" +" (+" + (characters.Player.hp / 2) + ") Q.quitter\n");

                if (queFaire === '1') {// si on choisi d'attaquer
                    console.log('');
                    hpBoss -= characters.Player.str;
                    console.log(randomBoss + 'a perdu', characters.Player.str + 'PV');
                
                    if (hpBoss > 0) {
                        console.log('Vous avez perdu', Boss.str + 'PV\n');
                        hpPlayer -= Boss.str;
                    }
                    break
                }
            
                if (queFaire === '2') {// incrementer puis afficher les hp perdu et regagné
                    console.log('');
                    hpPlayer -= Boss.str;
                    if ((hpPlayer + (characters.Player.hp / 2)) <= characters.Player.hp) {// incrementer puis afficher les hp perdu et regagné
                        console.log('Vous avez perdu', Boss.str + 'PV');
                        hpPlayer += (characters.Player.hp / 2);
                        console.log("Vous avez regagné", (characters.Player.hp / 2) + 'PV\n');
                        break
                    
                    }
                    if ((hpPlayer + (characters.Player.hp / 2)) > characters.Player.hp) {// incrementer puis afficher les hp perdu et regagné SI on se soigne au dessus de son nombre d'hp max
                        console.log('Vous avez perdu', Boss.str + 'PV');
                        console.log("Vous avez regagné", characters.Player.hp - hpPlayer + 'PV\n');
                        hpPlayer = characters.Player.hp;
                        break
                    }
                
                }
                if (queFaire.toUpperCase() === 'Q') {// pour renvoyer une valeur pour vérifier si on quitte le jeu
                    hpPlayer = 999999;
                    myHero.hp = hpPlayer;
                    return myHero
                }
                else {
                    while (i < 1) {// si on se trompe d'input
                        queFaire = getInputD("1." + "\x1b[" + "91m" + " Attaquer" + "\x1b[" + "39m" + " 2." + "\x1b[" + "92m" + " Se soigner" + "\x1b[" + "39m" + " (+" + (characters.Player.hp / 2) + ") Q.quitter\n");

                        if (queFaire === '1') {// si on choisi d'attaquer
                            console.log('');
                            hpBoss -= characters.Player.str;
                            console.log(randomBoss + 'a perdu', characters.Player.str + 'PV');
                    
                            if (hpBoss > 0) {
                                console.log('Vous avez perdu', Boss.str + 'PV\n');
                                hpPlayer -= Boss.str;
                            }
                            break
                        }
                
                        if (queFaire === '2') {// incrementer puis afficher les hp perdu et regagné
                            console.log('');
                            hpPlayer -= Boss.str;
                            if ((hpPlayer + (characters.Player.hp / 2)) <= characters.Player.hp) {// incrementer puis afficher les hp perdu et regagné
                                console.log('Vous avez perdu', Boss.str + 'PV');
                                hpPlayer += (characters.Player.hp / 2);
                                console.log("Vous avez regagné", (characters.Player.hp / 2) + 'PV\n');
                                break
                        
                            }
                            if ((hpPlayer + (characters.Player.hp / 2)) > characters.Player.hp) {// incrementer puis afficher les hp perdu et regagné SI on se soigne au dessus de son nombre d'hp max
                                console.log('Vous avez perdu', Boss.str + 'PV');
                                console.log("Vous avez regagné", characters.Player.hp - hpPlayer + 'PV\n');
                                hpPlayer = characters.Player.hp;
                                break
                            }
                    
                        }
                        if (queFaire.toUpperCase() === 'Q') {
                            hpPlayer = 999999;
                            myHero.hp = hpPlayer;
                            return myHero
                        }
                    }
                }
            }
            
        }
        if (hpBoss <= 0 || hpPlayer <= 0) {// si on perds ou on gagne

            
            if (hpBoss <= 0 && hpPlayer > 0 && numberOfStage === 20 && myHero.stageLvl < 1) {// si on gagne return objet hp coins
                myHero.stageLvl = myHero.stageLvl + 1;
                console.log('');
                getInputL("\x1b[" + "39m" + "Vous avez battu " + randomBoss + " !");
                getInputL("Vous avez gagné 1 000 000 000" + '\u{1F4B0}');
                getInputL('=============== '+"\x1b[" + "91m" +'Tour numéro '+(myHero.stageLvl+1)+" \x1b[" + "39m" +'================');
                coinsPlayer += 1000000000;
                myHero.coins = coinsPlayer;//on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer;//on return le nombre de d'hp perdu ou pas à la fin
                return myHero// return objet hp coins
            }

            if (hpBoss <= 0 && hpPlayer > 0 && numberOfStage === 50 && myHero.stageLvl < 4) {// si on gagne return objet hp coins
                myHero.stageLvl = myHero.stageLvl + 1;
                console.log('');
                getInputL("\x1b[" + "39m" + "Vous avez battu " + randomBoss + " !");
                getInputL("Vous avez gagné 1 000 000 000" + '\u{1F4B0}');
                getInputL('=============== '+"\x1b[" + "91m" +'Tour numéro '+(myHero.stageLvl+1)+" \x1b[" + "39m" +'================');
                coinsPlayer += 1000000000;
                myHero.coins = coinsPlayer;//on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer;//on return le nombre de d'hp perdu ou pas à la fin
                return myHero// return objet hp coins
            }

            if (hpBoss <= 0 && hpPlayer > 0 && numberOfStage === 100 && myHero.stageLvl < 9) {// si on gagne return objet hp coins
                myHero.stageLvl = myHero.stageLvl + 1;
                console.log('');
                getInputL("\x1b[" + "39m" + "Vous avez battu " + randomBoss + " !");
                getInputL("Vous avez gagné 1 000 000 000" + '\u{1F4B0}');
                getInputL('=============== '+"\x1b[" + "91m" +'Tour numéro '+(myHero.stageLvl+1)+" \x1b[" + "39m" +'================');
                coinsPlayer += 1000000000;
                myHero.coins = coinsPlayer;//on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer;//on return le nombre de d'hp perdu ou pas à la fin
                return myHero// return objet hp coins
            }

            if (hpBoss <= 0 && hpPlayer > 0) {// si on gagne return objet hp coins
                console.log('');
                myHero.finiORno = 1;
                getInputL("\x1b[" + "39m" + "Vous avez battu " + randomBoss + " !");
                getInputL("Vous avez gagné 1 000 000 000"+'\u{1F4B0}');
                console.log('Navi - "Hey ! Listen!"');
                console.log('- Regarde c\'est la princesse Zelda !"');
                if (characters.randomPlayer === 'Link') {
                    getInput(characters.randomPlayer+' *chokbar*\n');
                }
                if (characters.randomPlayer !== 'Link') {
                    getInput(characters.randomPlayer+' - "super.."\n');
                }
                coinsPlayer += 1000000000;
                myHero.coins = coinsPlayer;//on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer;//on return le nombre de d'hp perdu ou pas à la fin
                return myHero// return objet hp coins
            }
            if (hpPlayer <= 0) {// return objet hp coins
                myHero.coins = coinsPlayer//on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer;//on return le nombre de d'hp = 0 pour a la sortie tester si les hp sont a 0 ou moins pour lancer la fonction retry
                return myHero// return objet hp coins
            }
        }


    }
}