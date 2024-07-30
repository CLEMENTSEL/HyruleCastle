export interface characters{

    name: string,
    hp: number,
    atk: number,
    potion: number
    
}

export interface players {

    id: number,
    name: string,
    hp: number,
    mp: number,
    str: number,
    int: number,
    def: number,
    res: number,
    spd: number,
    luck: number,
    race: number,
    class: number,
    rarity: number
    
}

export interface enemies{

    id: number,
    name: string,
    hp: number,
    mp: number,
    str: number,
    int: number,
    def: number,
    res: number,
    spd: number,
    luck: number,
    race: number,
    class: number,
    rarity: number
    
}

export interface bosses{

    id: number,
    name: string,
    hp: number,
    mp: number,
    str: number,
    int: number,
    def: number,
    res: number,
    spd: number,
    luck: number,
    race: number,
    class: number,
    rarity: number
    
}

export interface classes{

    id: number,
    name: string,
    strengths: [number],
    weaknesses?: [number],
    attack_type: string,
    alignment: string,
    rarity: number
    
}

export interface races{

    id: number,
    name: string,
    strength?: string,
    weakness?: [number],
    rarity?: string
    
}

export interface spells{

    id: number,
    name: string,
    cost?: string,
    dmg?: string,
    effect: string,
    cooldown?: string,
    race?: string,
    class?: string,
    rarity: number
    
}

export interface traps{

    id: number, 
    name: string, 
    requirement: string, 
    rarity: number
    
}
