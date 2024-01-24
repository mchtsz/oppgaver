interface Character {
    name: string;
    health: number;
    attack: string;
}

interface Warrior extends Character {
    weapon: string;
}

interface Mage extends Character {
    spell: string;
}

const warrior: Warrior = {
    name: 'Warrior',
    health: 100,
    attack: 'Attacking with sword',
    weapon: 'sword',
};

const mage: Mage = {
    name: 'Mage',
    health: 100,
    attack: 'Casting fireball',
    spell: 'fireball',
};

console.log(warrior);
console.log(mage);