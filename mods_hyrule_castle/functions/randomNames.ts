export const getRandomBoss = () => {
    const words = ['Ganon', 'Gleeoks', 'Volvagia', 'Onox', 'Odolwa','Stallord','Gohma'];
    return words[Math.floor(Math.random() * words.length)];
};

export const getRandomClass = () => {
    const words = ['Hero', 'Warrior', 'Mage', 'Dark Mage', 'Assassin','Priest','Monk','Death Knight','Necromancer'];
    return words[Math.floor(Math.random() * words.length)];
}; 

export const getRandomEnemy = () => {
    const words = ['Dead Hand', 'Lynel', 'Stalfos', 'Darknuts', 'Guardian','Lizalfos','Skulltula','Golden Skulltula','Gibdo','Octorock','Deku Scrub','Bokoblin'];
    return words[Math.floor(Math.random() * words.length)];
}; 

export const getRandomPlayer = () => {
    const words = ['Link', 'Young Link', 'Sheik', 'Impa', 'Hylia'];
    return words[Math.floor(Math.random() * words.length)];
};

export const getRandomRace = () => {
    const words = ['Hylian', 'Sheikah', 'Gerudo', 'Zora', 'Goron','Kokiri','Twili','Minish','Humain','Reptilian','Avian','Monster','Demon','Divine','Undead','Insect','Machine'];
    return words[Math.floor(Math.random() * words.length)];
}; 

export const getRandomSpell = () => {
    const words = ['Fireball', 'Heal', 'Heal II', 'Cheat Heal', 'Heal_100','Cheat Restore','Cheat Fireball'];
    return words[Math.floor(Math.random() * words.length)];
};


export const getRandomTrap = () => {
    const words = ['Pike Wall', 'Secret Code'];
    return words[Math.floor(Math.random() * words.length)];
};


export const getRandomHearts = () => {
    const words = ['\u{1F9E1}','\u{1F49B}','\u{1F499}','\u{1F49C}','\u{1F90E}',];
    return words[Math.floor(Math.random() * words.length)];
};
