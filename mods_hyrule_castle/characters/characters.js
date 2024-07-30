"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bosses_1 = require("./Bosses/bosses");
var players_1 = require("./Players/players");
var randomNames_1 = require("../functions/randomNames");
var randomPlayer = (0, randomNames_1.getRandomPlayer)(); //on get un nom d'hero random
var randomBoss = (0, randomNames_1.getRandomBoss)(); // on get un nom de boss random
var Player = (0, players_1.default)(randomPlayer); // on l'attribue
var Boss = (0, bosses_1.default)(randomBoss); // on l'attribue
exports.default = { Player: Player, Boss: Boss, randomPlayer: randomPlayer, randomBoss: randomBoss };
