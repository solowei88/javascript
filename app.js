/*
Строки и массивы
*/

const userFullName = 'Пупкин Василий Петрович';
console.log(userFullName.split(' ')); 
const [familyName, firstName, lastName] = userFullName.split(' '); // разделяет строку на переменные
console.log(familyName); 
console.log(firstName);
console.log(lastName);

const arr = ['Ты','знаешь','JS']; 
console.log(arr.join(' ')); // соединяем массив в строку





   