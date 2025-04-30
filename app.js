/*
Управление элементами массива
*/
const users = ['Вася', 'Петя', 'Гриша']
console.log (users);
users [2] = 'Маша'
console.log (users);

users.push('Марина') // добавляет элемент в конец массива
console.log (users);

users.unshift('Ирина')// добавляет элемент в начало массива
console.log (users); 

const element = users.pop();    // удаляет последний элемент массива и присваивает его переменной
console.log (users);
console.log ('Удалённый элемент: '+ element );

const element2 = users.shift();    // удаляет первый элемент массива и присваивает его переменной
console.log (users);
console.log ('Удалённый элемент: '+ element2 );