import characters from "../characters/characters";
import { getRandomEnemy, getRandomHearts } from "../functions/randomNames";
import { getInput, getInputL, getInputD } from "../functions/readline";
import lesEnemies from "../characters/Enemies/enemies"

export default function combat(numberCombat: string, pvPlayer: any, coin: any, difficulty: any) {

    let myHero = { // objet qu'on return avec des valeurs voulues
        hp: pvPlayer,
        coins: coin
    }

    let randomEnemy = getRandomEnemy();// pour le combat, on a des enemies aleatoires, donc on recupere un nom d'enemy random ici plutot que dans le fichier Characters
    let Enemy = lesEnemies(randomEnemy);// puis on lui attribu

    let hpPlayer = myHero.hp;
    let strPlayer = characters.Player.str;
    let coinsPlayer = myHero.coins;
    let hpBarPlayer: string = '';// pour l'affichage

    let hpEnemy: number = Enemy.hp
    let strEnemy = Enemy.str;
    let hpBarEnemy: string = '';// pour l'affichage
    let randomHearts = getRandomHearts()// pour l'affichage des couleurs des coeurs
    
    if (difficulty === 2) {
        hpEnemy = hpEnemy * 1.5;
        strEnemy = strEnemy * 1.5;
        Enemy.hp = Enemy.hp * 1.5;
        Enemy.str = Enemy.str * 1.5;
    }
    if (difficulty === 3) {
        hpEnemy = hpEnemy * 2;
        strEnemy = strEnemy * 2;
        Enemy.hp = Enemy.hp * 2;
        Enemy.str = Enemy.str * 2
    }

    let nmbCombat: string = "\x1b[" + "91m" + numberCombat// I II III IV V VI VII VIII IX ou X
    let i: number = 0;//boucle infini
    let queFaire: string = '';//string pour valeur input
    
    getInputL('Attention ! Un '+"\x1b[" + "91m" +randomEnemy+"\x1b[" + "39m" +' vous attaque !');
    while (characters.Player.hp !== 0 || Enemy.hp !== 0) {
    
        

        if (hpEnemy > 0 && hpPlayer > 0) {
            
                   
            while (i < 1) {//tant que le combat continue
                // console.clear();
                console.log("\x1b[" + "39m" +'=============== '+"\x1b[" + "91m" +'Combat', nmbCombat, "\x1b[" + "39m" +'================');

                console.log("\x1b[" + "91m" + randomEnemy+"\x1b[" + "39m" +' (' + hpEnemy + '/' + Enemy.hp+')');
                while (i < hpEnemy) {// pour l'affichage de la bar d'hp BOSS
                    hpBarEnemy += randomHearts;
                    i++
                }

                while (i < Enemy.hp) {
                    hpBarEnemy += '\u{1F90D}';
                    i++
                }
                i = 0;
                console.log(hpBarEnemy);
                hpBarEnemy = '';

                console.log('');

                console.log("\x1b[" + "92m" + characters.randomPlayer+"\x1b[" + "39m" +' (' + hpPlayer + '/' + characters.Player.hp + ')', myHero.coins+'\u{1F4B0}');
                while (i < hpPlayer) {// pour l'affichage de la bar d'hp PLAYER
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
                console.log("\x1b[" + "39m" +'============ Que voulez vous faire ? ============')
                queFaire = getInputD("1."+"\x1b[" + "91m" +" Attaquer"+"\x1b[" + "39m" +" 2."+"\x1b[" + "92m" +" Se soigner"+"\x1b[" + "39m" +" (+" + (characters.Player.hp / 2) + ") Q.quitter\n");
                
                if (queFaire === '1') {// si on choisi d'attaquer
                    console.log('');
                    hpEnemy -= characters.Player.str;
                    console.log('Le '+randomEnemy+' a perdu',characters.Player.str +'PV');
                    if (hpEnemy > 0) {
                        console.log('Vous avez perdu',strEnemy + 'PV\n');
                        hpPlayer -= strEnemy;
                    }
                    break
                }
                
                if (queFaire === '2') {// incrementer puis afficher les hp perdu et regagné
                    console.log('');
                    hpPlayer -= strEnemy;
                    if ((hpPlayer + (characters.Player.hp / 2)) <= characters.Player.hp) {// incrementer puis afficher les hp perdu et regagné
                        console.log('Vous avez perdu', strEnemy + 'PV');
                        hpPlayer += (characters.Player.hp / 2);
                        console.log("Vous avez regagné", (characters.Player.hp / 2) + 'PV\n');
                        break
                        
                    }
                    if ((hpPlayer + (characters.Player.hp / 2)) > characters.Player.hp) {// incrementer puis afficher les hp perdu et regagné SI on se soigne au dessus de son nombre d'hp max
                        console.log('Vous avez perdu', strEnemy + 'PV');
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
                        queFaire = getInputD("1."+"\x1b[" + "91m" +" Attaquer"+"\x1b[" + "39m" +" 2."+"\x1b[" + "92m" +" Se soigner"+"\x1b[" + "39m" +" (+" + (characters.Player.hp / 2) + ") Q.quitter\n");
                
                        if (queFaire === '1') {// si on choisi d'attaquer
                            console.log('');
                            hpEnemy -= characters.Player.str;
                            console.log('Le '+randomEnemy+' a perdu',characters.Player.str +'PV');
                            if (hpEnemy > 0) {
                                console.log('Vous avez perdu',strEnemy + 'PV\n');
                                hpPlayer -= strEnemy;
                            }
                            break
                        }
                        
                        if (queFaire === '2') {// incrementer puis afficher les hp perdu et regagné
                            console.log('');
                            hpPlayer -= strEnemy;
                            if ((hpPlayer + (characters.Player.hp / 2)) <= characters.Player.hp) {// incrementer puis afficher les hp perdu et regagné
                                console.log('Vous avez perdu', strEnemy + 'PV');
                                hpPlayer += (characters.Player.hp / 2);
                                console.log("Vous avez regagné", (characters.Player.hp / 2) + 'PV\n');
                                break
                                
                            }
                            if ((hpPlayer + (characters.Player.hp / 2)) > characters.Player.hp) {// incrementer puis afficher les hp perdu et regagné SI on se soigne au dessus de son nombre d'hp max
                                console.log('Vous avez perdu', strEnemy + 'PV');
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
                    }
                }
            }
            
        }
        if (hpEnemy <= 0 || hpPlayer <= 0) {// si on perds ou on gagne

            if (hpEnemy <= 0 && hpPlayer > 0) {// si on gagne return objet hp coins
                console.log('');
                getInputL("\x1b[" + "39m" + "Vous avez battu le " + randomEnemy + " !");
                getInputL("Vous avez gagné 1"+'\u{1F4B0}');
                console.log('Navi - "Hey ! Listen!"');
                console.log('- "Allons à l\'étage suivant !"');
                getInputL(characters.randomPlayer + ' - \u{1F644}');
                coinsPlayer += 1;
                myHero.coins = coinsPlayer//on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer;//on return le nombre de d'hp perdu ou pas à la fin
                return myHero// return objet hp coins
            }
            if (hpPlayer <= 0) {// on perds
                myHero.coins = coinsPlayer;//on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer;//on return le nombre de d'hp = 0 pour a la sortie tester si les hp sont a 0 ou moins pour lancer la fonction retry
                return myHero// return objet hp coins
            }
        }

    }
}