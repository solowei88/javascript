/*
Упражнение - сортировка пользователей
*/


const users = [
    {name: 'Вася', age: 54},
    {name: 'Катя', age: 34},
    {name: 'Аня', age: 44},
    {name: 'Петя', age: 24},    
];

console.log(users.sort((a , b) => a.age - b.age));

