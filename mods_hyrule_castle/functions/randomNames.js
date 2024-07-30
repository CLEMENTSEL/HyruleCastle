"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomHearts = exports.getRandomTrap = exports.getRandomSpell = exports.getRandomRace = exports.getRandomPlayer = exports.getRandomEnemy = exports.getRandomClass = exports.getRandomBoss = void 0;
var getRandomBoss = function () {
    var words = ['Ganon', 'Gleeoks', 'Volvagia', 'Onox', 'Odolwa', 'Stallord', 'Gohma'];
    return words[Math.floor(Math.random() * words.length)];
};
exports.getRandomBoss = getRandomBoss;
var getRandomClass = function () {
    var words = ['Hero', 'Warrior', 'Mage', 'Dark Mage', 'Assassin', 'Priest', 'Monk', 'Death Knight', 'Necromancer'];
    return words[Math.floor(Math.random() * words.length)];
};
exports.getRandomClass = getRandomClass;
var getRandomEnemy = function () {
    var words = ['Dead Hand', 'Lynel', 'Stalfos', 'Darknuts', 'Guardian', 'Lizalfos', 'Skulltula', 'Golden Skulltula', 'Gibdo', 'Octorock', 'Deku Scrub', 'Bokoblin'];
    return words[Math.floor(Math.random() * words.length)];
};
exports.getRandomEnemy = getRandomEnemy;
var getRandomPlayer = function () {
    var words = ['Link', 'Young Link', 'Sheik', 'Impa', 'Hylia'];
    return words[Math.floor(Math.random() * words.length)];
};
exports.getRandomPlayer = getRandomPlayer;
var getRandomRace = function () {
    var words = ['Hylian', 'Sheikah', 'Gerudo', 'Zora', 'Goron', 'Kokiri', 'Twili', 'Minish', 'Humain', 'Reptilian', 'Avian', 'Monster', 'Demon', 'Divine', 'Undead', 'Insect', 'Machine'];
    return words[Math.floor(Math.random() * words.length)];
};
exports.getRandomRace = getRandomRace;
var getRandomSpell = function () {
    var words = ['Fireball', 'Heal', 'Heal II', 'Cheat Heal', 'Heal_100', 'Cheat Restore', 'Cheat Fireball'];
    return words[Math.floor(Math.random() * words.length)];
};
exports.getRandomSpell = getRandomSpell;
var getRandomTrap = function () {
    var words = ['Pike Wall', 'Secret Code'];
    return words[Math.floor(Math.random() * words.length)];
};
exports.getRandomTrap = getRandomTrap;
var getRandomHearts = function () {
    var words = ["\uD83E\uDDE1", "\uD83D\uDC9B", "\uD83D\uDC99", "\uD83D\uDC9C", "\uD83E\uDD0E",];
    return words[Math.floor(Math.random() * words.length)];
};
exports.getRandomHearts = getRandomHearts;
