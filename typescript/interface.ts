// definerer Character interface
interface Character {
    name: string;
    health: number;
    attack: string;
}

// lager warrior som får character interface + weapon
interface Warrior extends Character {
    weapon: string;
}

// lager mage som får character interface + spell
interface Mage extends Character {
    spell: string;
}

// lager warrior objekt
const warrior: Warrior = {
    name: 'Warrior',
    health: 100,
    attack: 'Attacking with sword',
    weapon: 'sword',
};

// lager mage objekt
const mage: Mage = {
    name: 'Mage',
    health: 100,
    attack: 'Casting fireball',
    spell: 'fireball',
};

// printer ut warrior og mage objektene
console.log(warrior);
console.log(mage);