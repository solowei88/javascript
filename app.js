/*
Преобразование строки 
*/

const userName = 'Вася aka Terminator Пупкин'

const userName1 = userName.slice(0, userName.indexOf(' '));

console.log(userName1);

const userName2 = userName.slice(userName.lastIndexOf(' ') + 1);

console.log(userName2);

const fullUserName = `${userName1} ${userName2}`;

console.log(fullUserName); 


   