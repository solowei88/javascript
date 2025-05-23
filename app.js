/*
Упражнение - преобразование объектов
*/


const users = [
    {
        name: 'Вася',
        surname: 'Пупкин', 
        age: 54,
        skills: ['Разработка', 'DevOps']
    },
    {
        name: 'Катя', 
        surname: 'Пупкина',
        age: 34,
        skills: ['Разработка', 'DevOps']
    },
     
];

console.log(users.map(user => ({
    fullName: `${user.name} ${user.surname}`, 
    skillNum: `${user.skills.length}`
})));

