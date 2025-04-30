/*
Поиск элемента
*/

const roles = ['user', 'admin', 'mansger',];
const elIndex = roles.indexOf('admin'); // ищем индекс елемента и присваиваем его переменной
console.log (elIndex);

const elIndex2 = roles.indexOf('superuser'); // ищем индекс елемента и присваиваем его переменной. -1, если не находим
console.log (elIndex2);

if (roles.indexOf('admin') >= 0) { // проверяем есть ли элемент в массиве
    console.log ('Доступ есть');
}

console.log (roles.includes('admin')); // проверяем есть ли элемент в массиве другим способом
console.log (roles.includes('superuser')); // проверяем есть ли элемент в массиве другим способом

if (roles.includes('admin')) { // проверяем есть ли элемент в массиве
    console.log ('Доступ есть');
} 