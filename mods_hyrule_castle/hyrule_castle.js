"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var characters_1 = require("./characters/characters");
var combat_1 = require("./combat/combat");
var stages_1 = require("./combat/stages");
var readline_1 = require("./functions/readline");
var dialogueDebut_1 = require("./dialogues/dialogueDebut");
var combatGanon_1 = require("./combat/combatGanon");
var retry_1 = require("./dialogues/retry");
var numberStage_1 = require("./combat/numberStage");
function Hyrule_Castle() {
    try {
        var queFaire = ''; //pour savoir si on recommence le jeu ou pas
        var hpPlayer = characters_1.default.Player.hp; //on doit envoyer les hp du hero dans une fonction combat , mais la valeur retour du combat est stocké dans une autre variable
        var coins = 12; //on doit envoyer les coins du hero dans une fonction combat , mais la valeur retour du combat est stocké dans une autre variable
        var i = 0; //pour faire une boucle infini
        var returnPlayer = void 0;
        var newHpHero = void 0;
        var newCoinsHero = void 0;
        var stageLevel = 0;
        var newStageLevel = void 0;
        while (i < 1) {
            var SND = (0, numberStage_1.default)();
            if (SND.quit === 1) {
                return null;
            }
            var leguess = (0, dialogueDebut_1.default)();
            if (leguess === 'n') {
                return null;
            }
            while (i < 1) {
                (0, stages_1.default)('I');
                returnPlayer = (0, combat_1.default)('I', hpPlayer, coins, SND.difficulty); //on recupere l'objet contenant les hp du hero et coins pour les utiliser dans les prochains lvl
                newHpHero = returnPlayer === null || returnPlayer === void 0 ? void 0 : returnPlayer.hp; //on crée une variable pour recupere les hp pour les reutiliser
                newCoinsHero = returnPlayer === null || returnPlayer === void 0 ? void 0 : returnPlayer.coins; //on crée une variable pour recupere les hp pour les reutiliser
                if (newHpHero <= 0) { // si on perds on rentre dans une fonction qui va tester si on veut rejouer ou pas
                    var retryorno = (0, retry_1.default)();
                    if (retryorno === 1) {
                        return null;
                    }
                    if (retryorno === 0) { // on quitte la premiere boucle pour retourner au debut
                        // hpPlayer = character.Player.hp;
                        // coins = 12;
                        // stageLevel = 0;
                        // SND = StageNDifficulty();
                        // if (SND.quit === 1) {
                        //     return null
                        // }
                        break;
                    }
                }
                if (newHpHero === 999999) { //quitter le jeu si ingame j'appuie q
                    return;
                }
                // stages('II');
                // returnPlayer = combat('II', newHpHero, newCoinsHero, SND.difficulty);//on recupere l'objet contenant les hp du hero et coins pour les utiliser dans les prochains lvl
                // newHpHero = returnPlayer?.hp;//on recupere les hp pour les reutiliser
                // newCoinsHero = returnPlayer?.coins;//on recupere les coins pour les reutiliser
                // if (newHpHero <= 0) {// si on perds on rentre dans une fonction qui va tester si on veut rejouer ou pas
                //     let retryorno = retry();
                //     if (retryorno === 1) {
                //         return null
                //     }
                //     if (retryorno === 0) {// on quitte la premiere boucle pour retourner au debut
                // hpPlayer = character.Player.hp;
                // coins = 12;
                // stageLevel = 0;
                // SND = StageNDifficulty();
                // if (SND.quit === 1) {
                //     return null
                // }
                //         break
                //     }
                // }
                // if (newHpHero === 999999) {//quitter le jeu si ingame j'appuie q
                //     return
                // }
                // stages('III');
                // returnPlayer = combat('III', newHpHero, newCoinsHero, SND.difficulty);//on recupere l'objet contenant les hp du hero et coins pour les utiliser dans les prochains lvl
                // newHpHero = returnPlayer?.hp;//on recupere les hp pour les reutiliser
                // newCoinsHero = returnPlayer?.coins;//on recupere les coins pour les reutiliser
                // if (newHpHero <= 0) {// si on perds on rentre dans une fonction qui va tester si on veut rejouer ou pas
                //     let retryorno = retry();
                //     if (retryorno === 1) {
                //          return null
                //     }
                //     if (retryorno === 0) {// on quitte la premiere boucle pour retourner au debut
                // hpPlayer = character.Player.hp;
                // coins = 12;
                // stageLevel = 0;
                // SND = StageNDifficulty();
                // if (SND.quit === 1) {
                //     return null
                // }
                //         break
                //     }
                // }
                // if (newHpHero === 999999) {//quitter le jeu si ingame j'appuie q
                //     return
                // }
                // stages('IV');
                // returnPlayer = combat('IV', newHpHero, newCoinsHero, SND.difficulty);//on recupere l'objet contenant les hp du hero et coins pour les utiliser dans les prochains lvl
                // newHpHero = returnPlayer?.hp;//on recupere les hp pour les reutiliser
                // newCoinsHero = returnPlayer?.coins;//on recupere les coins pour les reutiliser
                // if (newHpHero <= 0) {// si on perds on rentre dans une fonction qui va tester si on veut rejouer ou pas
                //     let retryorno = retry();
                //     if (retryorno === 1) {
                //         return null
                //     }
                //     if (retryorno === 0) {// on quitte la premiere boucle pour retourner au debut
                // hpPlayer = character.Player.hp;
                // coins = 12;
                // stageLevel = 0;
                // SND = StageNDifficulty();
                // if (SND.quit === 1) {
                //     return null
                // }
                //         break
                //     }
                // }
                // if (newHpHero === 999999) {//quitter le jeu si ingame j'appuie q
                //     return
                // }
                // stages('V');
                // returnPlayer = combat('V', newHpHero, newCoinsHero, SND.difficulty);//on recupere l'objet contenant les hp du hero et coins pour les utiliser dans les prochains lvl
                // newHpHero = returnPlayer?.hp;//on recupere les hp pour les reutiliser
                // newCoinsHero = returnPlayer?.coins;//on recupere les coins pour les reutiliser
                // if (newHpHero <= 0) {// si on perds on rentre dans une fonction qui va tester si on veut rejouer ou pas
                //     let retryorno = retry();
                //     if (retryorno === 1) {
                //         return null
                //     }
                //     if (retryorno === 0) {// on quitte la premiere boucle pour retourner au debut
                // hpPlayer = character.Player.hp;
                // coins = 12;
                // stageLevel = 0;
                // SND = StageNDifficulty();
                // if (SND.quit === 1) {
                //     return null
                // }
                //         break
                //     }
                // }
                // if (newHpHero === 999999) {//quitter le jeu si ingame j'appuie q
                //     return
                // }
                // stages('VI');
                // returnPlayer = combat('VI', newHpHero, newCoinsHero, SND.difficulty);//on recupere l'objet contenant les hp du hero et coins pour les utiliser dans les prochains lvl
                // newHpHero = returnPlayer?.hp;//on recupere les hp pour les reutiliser
                // newCoinsHero = returnPlayer?.coins;//on recupere les coins pour les reutiliser
                // if (newHpHero <= 0) {// si on perds on rentre dans une fonction qui va tester si on veut rejouer ou pas
                //     let retryorno = retry();
                //     if (retryorno === 1) {
                //         return null
                //     }
                //     if (retryorno === 0) {// on quitte la premiere boucle pour retourner au debut
                // hpPlayer = character.Player.hp;
                // coins = 12;
                // stageLevel = 0;
                // SND = StageNDifficulty();
                // if (SND.quit === 1) {
                //     return null
                // }
                //         break
                //     }
                // }
                // if (newHpHero === 999999) {//quitter le jeu si ingame j'appuie q
                //     return
                // }
                // stages('VII');
                // returnPlayer = combat('VII', newHpHero, newCoinsHero, SND.difficulty);//on recupere l'objet contenant les hp du hero et coins pour les utiliser dans les prochains lvl
                // newHpHero = returnPlayer?.hp;//on recupere les hp pour les reutiliser
                // newCoinsHero = returnPlayer?.coins;//on recupere les coins pour les reutiliser
                // if (newHpHero <= 0) {// si on perds on rentre dans une fonction qui va tester si on veut rejouer ou pas
                //     let retryorno = retry();
                //     if (retryorno === 1) {
                //         return null
                //     }
                //     if (retryorno === 0) {// on quitte la premiere boucle pour retourner au debut
                // hpPlayer = character.Player.hp;
                // coins = 12;
                // stageLevel = 0;
                // SND = StageNDifficulty();
                // if (SND.quit === 1) {
                //     return null
                // }
                //         break
                //     }
                // }
                // if (newHpHero === 999999) {//quitter le jeu si ingame j'appuie q
                //     return
                // }
                // stages('VIII');
                // returnPlayer = combat('VIII', newHpHero, newCoinsHero, SND.difficulty);//on recupere l'objet contenant les hp du hero et coins pour les utiliser dans les prochains lvl
                // newHpHero = returnPlayer?.hp;//on recupere les hp pour les reutiliser
                // newCoinsHero = returnPlayer?.coins;//on recupere les coins pour les reutiliser
                // if (newHpHero <= 0) {// si on perds on rentre dans une fonction qui va tester si on veut rejouer ou pas
                //     let retryorno = retry();
                //     if (retryorno === 1) {
                //         return null
                //     }
                //     if (retryorno === 0) {// on quitte la premiere boucle pour retourner au debut
                // hpPlayer = character.Player.hp;
                // coins = 12;
                // stageLevel = 0;
                // SND = StageNDifficulty();
                // if (SND.quit === 1) {
                //     return null
                // }
                //         break
                //     }
                // }
                // if (newHpHero === 999999) {//quitter le jeu si ingame j'appuie q
                //     return
                // }
                // stages('IX');
                // returnPlayer = combat('IX', newHpHero, newCoinsHero, SND.difficulty);//on recupere l'objet contenant les hp du hero et coins pour les utiliser dans les prochains lvl
                // newHpHero = returnPlayer?.hp;//on recupere les hp pour les reutiliser
                // newCoinsHero = returnPlayer?.coins;//on recupere les coins pour les reutiliser
                // if (newHpHero <= 0) {// si on perds on rentre dans une fonction qui va tester si on veut rejouer ou pas
                //     let retryorno = retry();
                //     if (retryorno === 1) {
                //         return null
                //     }
                //     if (retryorno === 0) {// on quitte la premiere boucle pour retourner au debut
                // hpPlayer = character.Player.hp;
                // coins = 12;
                // stageLevel = 0;
                // SND = StageNDifficulty();
                // if (SND.quit === 1) {
                //     return null
                // }
                //         break
                //     }
                // }
                // if (newHpHero === 999999) {//quitter le jeu si ingame j'appuie q
                //     return
                // }
                (0, stages_1.default)('X');
                returnPlayer = (0, combatGanon_1.default)('X', newHpHero, newCoinsHero, SND.difficulty, SND.numberStage, stageLevel); //on recupere l'objet contenant les hp pour vérifier si on perds ou on quitte
                newStageLevel = returnPlayer.stageLvl;
                newHpHero = returnPlayer.hp; //on recupere hp pour voir si gagné ou pas
                newCoinsHero = returnPlayer.coins;
                if (newHpHero <= 0) { // si on perds on rentre dans une fonction qui va tester si on veut rejouer ou pas
                    var retryorno = (0, retry_1.default)();
                    if (retryorno === 1) {
                        return null;
                    }
                    if (retryorno === 0) { // on quitte la premiere boucle pour retourner au debut
                        hpPlayer = characters_1.default.Player.hp;
                        coins = 12;
                        stageLevel = 0;
                        SND = (0, numberStage_1.default)();
                        if (SND.quit === 1) {
                            return null;
                        }
                        break;
                    }
                }
                if (newHpHero === 999999) { //quitter le jeu si ingame j'appuie q
                    return;
                }
                hpPlayer = newHpHero;
                coins = newCoinsHero;
                stageLevel = newStageLevel;
                while (i < 1 && returnPlayer.finiORno === 1) { //Dialogue de fin si game gagné
                    (0, readline_1.getInput)("FELICITATIONS vous avez fini . . .");
                    (0, readline_1.getInput)("\x1b[" + "39m" + "============ " + "\x1b[" + "92m" + "Zelda" + "\x1b[" + "93m" + ": Le Chateau d\'Hyrule" + "\x1b[" + "39m" + " ============\n");
                    queFaire = (0, readline_1.getInputD)("Voulez vous rejouer ? (O/N)\n");
                    if (queFaire.toLowerCase() === 'o') {
                        hpPlayer = characters_1.default.Player.hp;
                        stageLevel = 0;
                        SND = (0, numberStage_1.default)();
                        if (SND.quit === 1) {
                            return null;
                        }
                        break;
                    }
                    if (queFaire.toLowerCase() === 'n') {
                        console.log('Goodbye Hero...');
                        return null;
                    }
                    else {
                        while (i < 1) { //boucle si on appuie sur la mauvaise touche
                            queFaire = (0, readline_1.getInputD)("Voulez vous rejouer ? (O/N)\n");
                            if (queFaire.toLowerCase() === 'o') {
                                hpPlayer = characters_1.default.Player.hp;
                                stageLevel = 0;
                                SND = (0, numberStage_1.default)();
                                if (SND.quit === 1) {
                                    return null;
                                }
                                break;
                            }
                            if (queFaire.toLowerCase() === 'n') {
                                console.log('Goodbye Hero...');
                                return null;
                            }
                        }
                    }
                }
            }
        }
    }
    catch (error) {
        console.error("Mauvaise utilisation du programme");
        return null;
    }
}
Hyrule_Castle();
