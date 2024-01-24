type User = {
    id: number;
    name: string;
    email: string;
    birthdate: Date;
};

const users: User[] = [
    {
        id: 1,
        name: 'Ola',
        email: 'ola@nordmann.no',
        birthdate: new Date('1990-01-01'),
    },
];

const addUser = (user: User) => {
    users.push(user);
}

/* 
addUser({
    id: 2,
    name: 'Kari',
    email: 'kari@test.com',
    birthdate: new Date('1990-01-01'),
})
*/

const getUser = (id: number) => {
    return users.find(user => user.id === id);
}

console.log(users)