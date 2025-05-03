/*
Из строки в массив и обратно
*/

const roles = ['user', 'admin', 'manager', 'superuser'];
const url = 'auth/user/login';
const res = url.split('/') ; //преобразует строку в массив
console.log(res);

console.log(roles.join('-')) ;//преобразует массив в строку