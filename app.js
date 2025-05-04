/*
Rest оператор
*/

const data = [1, 2, 3, 4, 5, 6,];

const [one, two, ...remainder] = data;


console.log(one, two); // две переменные
console.log(remainder); // остальной массив

