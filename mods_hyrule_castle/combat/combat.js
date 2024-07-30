"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = combat;
var characters_1 = require("../characters/characters");
var randomNames_1 = require("../functions/randomNames");
var readline_1 = require("../functions/readline");
var enemies_1 = require("../characters/Enemies/enemies");
function combat(numberCombat, pvPlayer, coin, difficulty) {
    var myHero = {
        hp: pvPlayer,
        coins: coin
    };
    var randomEnemy = (0, randomNames_1.getRandomEnemy)(); // pour le combat, on a des enemies aleatoires, donc on recupere un nom d'enemy random ici plutot que dans le fichier Characters
    var Enemy = (0, enemies_1.default)(randomEnemy); // puis on lui attribu
    var hpPlayer = myHero.hp;
    var strPlayer = characters_1.default.Player.str;
    var coinsPlayer = myHero.coins;
    var hpBarPlayer = ''; // pour l'affichage
    var hpEnemy = Enemy.hp;
    var strEnemy = Enemy.str;
    var hpBarEnemy = ''; // pour l'affichage
    var randomHearts = (0, randomNames_1.getRandomHearts)(); // pour l'affichage des couleurs des coeurs
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
        Enemy.str = Enemy.str * 2;
    }
    var nmbCombat = "\x1b[" + "91m" + numberCombat; // I II III IV V VI VII VIII IX ou X
    var i = 0; //boucle infini
    var queFaire = ''; //string pour valeur input
    (0, readline_1.getInputL)('Attention ! Un ' + "\x1b[" + "91m" + randomEnemy + "\x1b[" + "39m" + ' vous attaque !');
    while (characters_1.default.Player.hp !== 0 || Enemy.hp !== 0) {
        if (hpEnemy > 0 && hpPlayer > 0) {
            while (i < 1) { //tant que le combat continue
                // console.clear();
                console.log("\x1b[" + "39m" + '=============== ' + "\x1b[" + "91m" + 'Combat', nmbCombat, "\x1b[" + "39m" + '================');
                console.log("\x1b[" + "91m" + randomEnemy + "\x1b[" + "39m" + ' (' + hpEnemy + '/' + Enemy.hp + ')');
                while (i < hpEnemy) { // pour l'affichage de la bar d'hp BOSS
                    hpBarEnemy += randomHearts;
                    i++;
                }
                while (i < Enemy.hp) {
                    hpBarEnemy += "\uD83E\uDD0D";
                    i++;
                }
                i = 0;
                console.log(hpBarEnemy);
                hpBarEnemy = '';
                console.log('');
                console.log("\x1b[" + "92m" + characters_1.default.randomPlayer + "\x1b[" + "39m" + ' (' + hpPlayer + '/' + characters_1.default.Player.hp + ')', myHero.coins + "\uD83D\uDCB0");
                while (i < hpPlayer) { // pour l'affichage de la bar d'hp PLAYER
                    hpBarPlayer += "\uD83D\uDC9A";
                    i++;
                }
                while (i < characters_1.default.Player.hp) {
                    hpBarPlayer += "\uD83E\uDD0D";
                    i++;
                }
                i = 0;
                console.log(hpBarPlayer);
                hpBarPlayer = '';
                console.log('');
                console.log("\x1b[" + "39m" + '============ Que voulez vous faire ? ============');
                queFaire = (0, readline_1.getInputD)("1." + "\x1b[" + "91m" + " Attaquer" + "\x1b[" + "39m" + " 2." + "\x1b[" + "92m" + " Se soigner" + "\x1b[" + "39m" + " (+" + (characters_1.default.Player.hp / 2) + ") Q.quitter\n");
                if (queFaire === '1') { // si on choisi d'attaquer
                    console.log('');
                    hpEnemy -= characters_1.default.Player.str;
                    console.log('Le ' + randomEnemy + ' a perdu', characters_1.default.Player.str + 'PV');
                    if (hpEnemy > 0) {
                        console.log('Vous avez perdu', strEnemy + 'PV\n');
                        hpPlayer -= strEnemy;
                    }
                    break;
                }
                if (queFaire === '2') { // incrementer puis afficher les hp perdu et regagné
                    console.log('');
                    hpPlayer -= strEnemy;
                    if ((hpPlayer + (characters_1.default.Player.hp / 2)) <= characters_1.default.Player.hp) { // incrementer puis afficher les hp perdu et regagné
                        console.log('Vous avez perdu', strEnemy + 'PV');
                        hpPlayer += (characters_1.default.Player.hp / 2);
                        console.log("Vous avez regagné", (characters_1.default.Player.hp / 2) + 'PV\n');
                        break;
                    }
                    if ((hpPlayer + (characters_1.default.Player.hp / 2)) > characters_1.default.Player.hp) { // incrementer puis afficher les hp perdu et regagné SI on se soigne au dessus de son nombre d'hp max
                        console.log('Vous avez perdu', strEnemy + 'PV');
                        console.log("Vous avez regagné", characters_1.default.Player.hp - hpPlayer + 'PV\n');
                        hpPlayer = characters_1.default.Player.hp;
                        break;
                    }
                }
                if (queFaire.toUpperCase() === 'Q') { // pour renvoyer une valeur pour vérifier si on quitte le jeu
                    hpPlayer = 999999;
                    myHero.hp = hpPlayer;
                    return myHero;
                }
                else {
                    while (i < 1) { // si on se trompe d'input
                        queFaire = (0, readline_1.getInputD)("1." + "\x1b[" + "91m" + " Attaquer" + "\x1b[" + "39m" + " 2." + "\x1b[" + "92m" + " Se soigner" + "\x1b[" + "39m" + " (+" + (characters_1.default.Player.hp / 2) + ") Q.quitter\n");
                        if (queFaire === '1') { // si on choisi d'attaquer
                            console.log('');
                            hpEnemy -= characters_1.default.Player.str;
                            console.log('Le ' + randomEnemy + ' a perdu', characters_1.default.Player.str + 'PV');
                            if (hpEnemy > 0) {
                                console.log('Vous avez perdu', strEnemy + 'PV\n');
                                hpPlayer -= strEnemy;
                            }
                            break;
                        }
                        if (queFaire === '2') { // incrementer puis afficher les hp perdu et regagné
                            console.log('');
                            hpPlayer -= strEnemy;
                            if ((hpPlayer + (characters_1.default.Player.hp / 2)) <= characters_1.default.Player.hp) { // incrementer puis afficher les hp perdu et regagné
                                console.log('Vous avez perdu', strEnemy + 'PV');
                                hpPlayer += (characters_1.default.Player.hp / 2);
                                console.log("Vous avez regagné", (characters_1.default.Player.hp / 2) + 'PV\n');
                                break;
                            }
                            if ((hpPlayer + (characters_1.default.Player.hp / 2)) > characters_1.default.Player.hp) { // incrementer puis afficher les hp perdu et regagné SI on se soigne au dessus de son nombre d'hp max
                                console.log('Vous avez perdu', strEnemy + 'PV');
                                console.log("Vous avez regagné", characters_1.default.Player.hp - hpPlayer + 'PV\n');
                                hpPlayer = characters_1.default.Player.hp;
                                break;
                            }
                        }
                        if (queFaire.toUpperCase() === 'Q') { // pour renvoyer une valeur pour vérifier si on quitte le jeu
                            hpPlayer = 999999;
                            myHero.hp = hpPlayer;
                            return myHero;
                        }
                    }
                }
            }
        }
        if (hpEnemy <= 0 || hpPlayer <= 0) { // si on perds ou on gagne
            if (hpEnemy <= 0 && hpPlayer > 0) { // si on gagne return objet hp coins
                console.log('');
                (0, readline_1.getInputL)("\x1b[" + "39m" + "Vous avez battu le " + randomEnemy + " !");
                (0, readline_1.getInputL)("Vous avez gagné 1" + "\uD83D\uDCB0");
                console.log('Navi - "Hey ! Listen!"');
                console.log('- "Allons à l\'étage suivant !"');
                (0, readline_1.getInputL)(characters_1.default.randomPlayer + " - \uD83D\uDE44");
                coinsPlayer += 1;
                myHero.coins = coinsPlayer; //on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer; //on return le nombre de d'hp perdu ou pas à la fin
                return myHero; // return objet hp coins
            }
            if (hpPlayer <= 0) { // on perds
                myHero.coins = coinsPlayer; //on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer; //on return le nombre de d'hp = 0 pour a la sortie tester si les hp sont a 0 ou moins pour lancer la fonction retry
                return myHero; // return objet hp coins
            }
        }
    }
}
