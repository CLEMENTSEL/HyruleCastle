"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var randomNames_1 = require("../functions/randomNames");
var a = (0, randomNames_1.getRandomBoss)();
var b = (0, randomNames_1.getRandomPlayer)();
var c = (0, randomNames_1.getRandomEnemy)();
console.log('Boss:', a, ', Player:', b, ' Enemy:', c);
