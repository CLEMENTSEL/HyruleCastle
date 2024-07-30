import character from "./characters/characters";
import combat from "./combat/combat";
import stages from './combat/stages';
import { getInput, getInputL,getInputD } from './functions/readline';
import dialogueDebut from './dialogues/dialogueDebut';
import combatGanon from './combat/combatGanon';
import retry from './dialogues/retry';
import StageNDifficulty from './combat/numberStage'

function Hyrule_Castle() {

    try {
        let queFaire: string = '';//pour savoir si on recommence le jeu ou pas
        let hpPlayer: number = character.Player.hp;//on doit envoyer les hp du hero dans une fonction combat , mais la valeur retour du combat est stocké dans une autre variable
        let coins: number = 12;//on doit envoyer les coins du hero dans une fonction combat , mais la valeur retour du combat est stocké dans une autre variable
        let i: number = 0;//pour faire une boucle infini
        let returnPlayer;
        let newHpHero;
        let newCoinsHero;
        let stageLevel = 0;
        let newStageLevel;
        while (i < 1) {

            let SND = StageNDifficulty();
                if (SND.quit === 1) {
                    return null
                }
            const leguess = dialogueDebut();
                if (leguess === 'n') {
                    return null
                }

            while (i < 1) {

                stages('I');
                returnPlayer = combat('I', hpPlayer, coins, SND.difficulty);//on recupere l'objet contenant les hp du hero et coins pour les utiliser dans les prochains lvl
                newHpHero = returnPlayer?.hp;//on crée une variable pour recupere les hp pour les reutiliser
                newCoinsHero = returnPlayer?.coins;//on crée une variable pour recupere les hp pour les reutiliser
                if (newHpHero <= 0) {// si on perds on rentre dans une fonction qui va tester si on veut rejouer ou pas
                    let retryorno = retry();
                    if (retryorno === 1) {
                        return null
                    }
                    if (retryorno === 0) {// on quitte la premiere boucle pour retourner au debut
                        // hpPlayer = character.Player.hp;
                            // coins = 12;
                            // stageLevel = 0;
                            // SND = StageNDifficulty();
                            // if (SND.quit === 1) {
                            //     return null
                            // }
                        break
                    }
                }
                if (newHpHero === 999999) {//quitter le jeu si ingame j'appuie q
                    return
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

                stages('X');
                returnPlayer = combatGanon('X', newHpHero, newCoinsHero, SND.difficulty, SND.numberStage, stageLevel);//on recupere l'objet contenant les hp pour vérifier si on perds ou on quitte
                newStageLevel = returnPlayer?.stageLvl
                newHpHero = returnPlayer?.hp;//on recupere hp pour voir si gagné ou pas
                newCoinsHero = returnPlayer?.coins;
                if (newHpHero <= 0) {// si on perds on rentre dans une fonction qui va tester si on veut rejouer ou pas
                    let retryorno = retry();
                    if (retryorno === 1) {
                        return null
                     }
                    if (retryorno === 0) {// on quitte la premiere boucle pour retourner au debut
                        hpPlayer = character.Player.hp;
                            coins = 12;
                            stageLevel = 0;
                            SND = StageNDifficulty();
                            if (SND.quit === 1) {
                                return null
                            }
                        break
                    }
                }
                if (newHpHero === 999999) {//quitter le jeu si ingame j'appuie q
                    return
                }
                hpPlayer = newHpHero;
                coins = newCoinsHero;
                stageLevel = newStageLevel;

                while (i < 1 && returnPlayer?.finiORno === 1) {//Dialogue de fin si game gagné
                    getInput("FELICITATIONS vous avez fini . . .")
                    getInput("\x1b[" + "39m" + "============ " + "\x1b[" + "92m" + "Zelda" + "\x1b[" + "93m" + ": Le Chateau d\'Hyrule" + "\x1b[" + "39m" + " ============\n");
                    queFaire = getInputD("Voulez vous rejouer ? (O/N)\n")
                    
                        
                    if (queFaire.toLowerCase() === 'o') {
                        hpPlayer = character.Player.hp;
                        stageLevel = 0;
                        SND = StageNDifficulty();
                        if (SND.quit === 1) {
                            return null
                        }
                        break
                    }
                    if (queFaire.toLowerCase() === 'n') {
                        console.log('Goodbye Hero...');
                        return null
                    }
                    else {
                        while (i < 1) {//boucle si on appuie sur la mauvaise touche
                            queFaire = getInputD("Voulez vous rejouer ? (O/N)\n")
                        
                            
                            if (queFaire.toLowerCase() === 'o') {
                                hpPlayer = character.Player.hp;
                                stageLevel = 0;
                                SND = StageNDifficulty();
                                if (SND.quit === 1) {
                                    return null
                                }
                                break
                            }
                            if (queFaire.toLowerCase() === 'n') {
                                console.log('Goodbye Hero...');
                                return null
                            }
                        }
                    }     
                }
            }
        }
    }catch (error) {
        console.error("Mauvaise utilisation du programme");
        return null
    }
}

Hyrule_Castle()