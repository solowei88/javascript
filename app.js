/*
Тернарные операторы
*/

const bmwX3Price = 100000;
const fordFocusPrice = 10000;
const budget = 20000;

let message; 
if (budget > bmwX3Price) {
    message ='bmw';
} else if (budget > fordFocusPrice){
    message = 'Ford Focus';
} else {
    message = 'Велосипед';
}

console.log (`Я хочу купить ${message}`);

console.log (`Я хочу купить ${budget > bmwX3Price ? message : 'Велосипед'}`);
console.log (`Я хочу купить ${budget > bmwX3Price ? message : budget > fordFocusPrice ? message : message}`);

