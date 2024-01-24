// defines user with a type
type User = {
    id: number;
    name: string;
    email: string;
    birthdate: Date;
};

// Array of users
const users: User[] = [
    {
        id: 1,
        name: 'Ola',
        email: 'ola@nordmann.no',
        birthdate: new Date('1990-01-01'),
    },
];

// function for adding a user to the users array
const addUser = (user: User) => {
    users.push(user);
}

// Example:
/* 
addUser({
    id: 2,
    name: 'Kari',
    email: 'kari@test.com',
    birthdate: new Date('1990-01-01'),
})
*/

// function for getting users from array
const getUser = (id: number) => {
    return users.find(user => user.id === id);
}