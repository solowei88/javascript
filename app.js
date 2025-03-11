/*
Логические операторы
*/

const isAdmin = true;
const canWrite = false;

console.log (`Системный файл ${isAdmin && canWrite}`); // и
console.log (`Обычный файл ${isAdmin || canWrite}`); // или
console.log (`Инвертируем права админа ${!isAdmin}`); // не


