/*
Обращение к элементам
*/


const userArrey = ['Вася','Пупкин', 24];

const user = {
    name: 'Вася', 
    surname:'Пупкин',
    age: 24,
    skills: [
        'Программирование', 'готовка'
    ],
    eduBasic: 'школа',
    eduPro: 'Институт'
};
console.log(user);
console.log(user.name);
console.log(user.skills[0]);
console.log(user.age);

console.log(user['skills']);
console.log(user['age']);

const level = 'Pro';
console.log(user['edu' + level]);

// const res = prompt('Ведите свойство: ');
// console.log(res);
// console.log(user[res]);

user['city'] = 'Москва';
console.log(user.city);

user.age = 30;
console.log(user.age);

user.style = 'хороший';
console.log(user.style);