"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = combatGanon;
var bosses_1 = require("../characters/Bosses/bosses");
var characters_1 = require("../characters/characters");
var randomNames_1 = require("../functions/randomNames");
var readline_1 = require("../functions/readline");
function combatGanon(numberCombat, pvPlayer, coin, difficulty, numberOfStage, stageLevel) {
    var myHero = {
        hp: pvPlayer,
        coins: coin,
        finiORno: 0,
        stageLvl: stageLevel
    };
    var randomBoss = (0, randomNames_1.getRandomBoss)(); // pour le combat, on a des enemies aleatoires, donc on recupere un nom d'enemy random ici plutot que dans le fichier Characters
    var Boss = (0, bosses_1.default)(randomBoss); // puis on lui attribu
    var hpPlayer = myHero.hp;
    var coinsPlayer = myHero.coins;
    var hpBarPlayer = '';
    var hpBoss = Boss.hp;
    var atkBoss = Boss.str;
    var hpBarBoss = '';
    if (difficulty === 2) {
        hpBoss = hpBoss * 1.5;
        atkBoss = atkBoss * 1.5;
        Boss.hp = Boss.hp * 1.5;
        Boss.str = Boss.str * 1.5;
    }
    if (difficulty === 3) {
        hpBoss = hpBoss * 2;
        atkBoss = atkBoss * 2;
        Boss.hp = Boss.hp * 2;
        Boss.str = Boss.str * 2;
    }
    var nmbCombat = "\x1b[" + "91m" + numberCombat;
    var i = 0;
    var queFaire = '';
    while (characters_1.default.Player.hp !== 0 || Boss.hp !== 0) {
        if (hpBoss > 0 && hpPlayer > 0) {
            while (i < 1) {
                // console.clear();
                console.log('=============== ' + "\x1b[" + "91m" + 'Combat', nmbCombat, "\x1b[" + "39m" + '================');
                console.log("\x1b[" + "31m" + randomBoss + "\x1b[" + "39m" + ' (' + hpBoss + '/' + Boss.hp + ')');
                while (i < hpBoss) { //incrémentation barre hp BOSS
                    hpBarBoss += "\uD83D\uDDA4";
                    i++;
                }
                while (i < Boss.hp) {
                    hpBarBoss += "\uD83E\uDD0D";
                    i++;
                }
                i = 0;
                console.log(hpBarBoss);
                hpBarBoss = '';
                console.log('');
                console.log("\x1b[" + "92m" + characters_1.default.randomPlayer + "\x1b[" + "39m" + ' (' + hpPlayer + '/' + characters_1.default.Player.hp + ')', myHero.coins + "\uD83D\uDCB0");
                while (i < hpPlayer) { //incrémentation barre hp PLAYER
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
                    hpBoss -= characters_1.default.Player.str;
                    console.log(randomBoss + 'a perdu', characters_1.default.Player.str + 'PV');
                    if (hpBoss > 0) {
                        console.log('Vous avez perdu', Boss.str + 'PV\n');
                        hpPlayer -= Boss.str;
                    }
                    break;
                }
                if (queFaire === '2') { // incrementer puis afficher les hp perdu et regagné
                    console.log('');
                    hpPlayer -= Boss.str;
                    if ((hpPlayer + (characters_1.default.Player.hp / 2)) <= characters_1.default.Player.hp) { // incrementer puis afficher les hp perdu et regagné
                        console.log('Vous avez perdu', Boss.str + 'PV');
                        hpPlayer += (characters_1.default.Player.hp / 2);
                        console.log("Vous avez regagné", (characters_1.default.Player.hp / 2) + 'PV\n');
                        break;
                    }
                    if ((hpPlayer + (characters_1.default.Player.hp / 2)) > characters_1.default.Player.hp) { // incrementer puis afficher les hp perdu et regagné SI on se soigne au dessus de son nombre d'hp max
                        console.log('Vous avez perdu', Boss.str + 'PV');
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
                            hpBoss -= characters_1.default.Player.str;
                            console.log(randomBoss + 'a perdu', characters_1.default.Player.str + 'PV');
                            if (hpBoss > 0) {
                                console.log('Vous avez perdu', Boss.str + 'PV\n');
                                hpPlayer -= Boss.str;
                            }
                            break;
                        }
                        if (queFaire === '2') { // incrementer puis afficher les hp perdu et regagné
                            console.log('');
                            hpPlayer -= Boss.str;
                            if ((hpPlayer + (characters_1.default.Player.hp / 2)) <= characters_1.default.Player.hp) { // incrementer puis afficher les hp perdu et regagné
                                console.log('Vous avez perdu', Boss.str + 'PV');
                                hpPlayer += (characters_1.default.Player.hp / 2);
                                console.log("Vous avez regagné", (characters_1.default.Player.hp / 2) + 'PV\n');
                                break;
                            }
                            if ((hpPlayer + (characters_1.default.Player.hp / 2)) > characters_1.default.Player.hp) { // incrementer puis afficher les hp perdu et regagné SI on se soigne au dessus de son nombre d'hp max
                                console.log('Vous avez perdu', Boss.str + 'PV');
                                console.log("Vous avez regagné", characters_1.default.Player.hp - hpPlayer + 'PV\n');
                                hpPlayer = characters_1.default.Player.hp;
                                break;
                            }
                        }
                        if (queFaire.toUpperCase() === 'Q') {
                            hpPlayer = 999999;
                            myHero.hp = hpPlayer;
                            return myHero;
                        }
                    }
                }
            }
        }
        if (hpBoss <= 0 || hpPlayer <= 0) { // si on perds ou on gagne
            if (hpBoss <= 0 && hpPlayer > 0 && numberOfStage === 20 && myHero.stageLvl < 1) { // si on gagne return objet hp coins
                myHero.stageLvl = myHero.stageLvl + 1;
                console.log('');
                (0, readline_1.getInputL)("\x1b[" + "39m" + "Vous avez battu " + randomBoss + " !");
                (0, readline_1.getInputL)("Vous avez gagné 1 000 000 000" + "\uD83D\uDCB0");
                (0, readline_1.getInputL)('=============== ' + "\x1b[" + "91m" + 'Tour numéro ' + (myHero.stageLvl + 1) + " \x1b[" + "39m" + '================');
                coinsPlayer += 1000000000;
                myHero.coins = coinsPlayer; //on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer; //on return le nombre de d'hp perdu ou pas à la fin
                return myHero; // return objet hp coins
            }
            if (hpBoss <= 0 && hpPlayer > 0 && numberOfStage === 50 && myHero.stageLvl < 4) { // si on gagne return objet hp coins
                myHero.stageLvl = myHero.stageLvl + 1;
                console.log('');
                (0, readline_1.getInputL)("\x1b[" + "39m" + "Vous avez battu " + randomBoss + " !");
                (0, readline_1.getInputL)("Vous avez gagné 1 000 000 000" + "\uD83D\uDCB0");
                (0, readline_1.getInputL)('=============== ' + "\x1b[" + "91m" + 'Tour numéro ' + (myHero.stageLvl + 1) + " \x1b[" + "39m" + '================');
                coinsPlayer += 1000000000;
                myHero.coins = coinsPlayer; //on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer; //on return le nombre de d'hp perdu ou pas à la fin
                return myHero; // return objet hp coins
            }
            if (hpBoss <= 0 && hpPlayer > 0 && numberOfStage === 100 && myHero.stageLvl < 9) { // si on gagne return objet hp coins
                myHero.stageLvl = myHero.stageLvl + 1;
                console.log('');
                (0, readline_1.getInputL)("\x1b[" + "39m" + "Vous avez battu " + randomBoss + " !");
                (0, readline_1.getInputL)("Vous avez gagné 1 000 000 000" + "\uD83D\uDCB0");
                (0, readline_1.getInputL)('=============== ' + "\x1b[" + "91m" + 'Tour numéro ' + (myHero.stageLvl + 1) + " \x1b[" + "39m" + '================');
                coinsPlayer += 1000000000;
                myHero.coins = coinsPlayer; //on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer; //on return le nombre de d'hp perdu ou pas à la fin
                return myHero; // return objet hp coins
            }
            if (hpBoss <= 0 && hpPlayer > 0) { // si on gagne return objet hp coins
                console.log('');
                myHero.finiORno = 1;
                (0, readline_1.getInputL)("\x1b[" + "39m" + "Vous avez battu " + randomBoss + " !");
                (0, readline_1.getInputL)("Vous avez gagné 1 000 000 000" + "\uD83D\uDCB0");
                console.log('Navi - "Hey ! Listen!"');
                console.log('- Regarde c\'est la princesse Zelda !"');
                if (characters_1.default.randomPlayer === 'Link') {
                    (0, readline_1.getInput)(characters_1.default.randomPlayer + ' *chokbar*\n');
                }
                if (characters_1.default.randomPlayer !== 'Link') {
                    (0, readline_1.getInput)(characters_1.default.randomPlayer + ' - "super.."\n');
                }
                coinsPlayer += 1000000000;
                myHero.coins = coinsPlayer; //on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer; //on return le nombre de d'hp perdu ou pas à la fin
                return myHero; // return objet hp coins
            }
            if (hpPlayer <= 0) { // return objet hp coins
                myHero.coins = coinsPlayer; //on return le nombre de coins gagné à la fin
                myHero.hp = hpPlayer; //on return le nombre de d'hp = 0 pour a la sortie tester si les hp sont a 0 ou moins pour lancer la fonction retry
                return myHero; // return objet hp coins
            }
        }
    }
}
