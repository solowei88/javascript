/*
Slice, splice, concat, reverse
*/

const roles = ['user', 'admin', 'manager', 'superuser'];
const res = roles.slice(2);     //берёт элементы, но не вырезает из массива
console.log (roles);
console.log (res);

const res2 = roles.slice(0, 3);  //берёт элементы, но не вырезает из массива
console.log (roles);
console.log (res2);

const res3 = roles.slice(-1);    //берёт последний элемент, но не вырезает из массива
console.log (roles);
console.log (res3);

const res4 = roles.slice(1,-1);  //берёт элементы, но не вырезает из массива
console.log (roles);
console.log (res4);

//const res5 = roles.splice(2);     //вырезает элементы из массива
//console.log (roles);
//console.log (res5);
//console.log (roles);

// const res6 = roles.splice(2, 2); //вырезает элементы из массива
// console.log (roles);
// console.log (res6);
// console.log (roles);

console.log (roles);
const res8 = roles.reverse(); // Меняет элементы массива задом на перёд
console.log (roles);

const NEW_ROLES = ['sysadmin','developer']
const res9 = roles.concat(NEW_ROLES)  //Соединяет массивы

console.log (res9);
