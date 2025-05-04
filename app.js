/*
Деструктуризация
*/

const userData = ['Anton', 18, 'Moskoy'];

// const userName = userData[0];
// const userAge = userData[1];
// const userCiti = userData[2];

const[userName, _, userCiti] = userData; // получаем переменные из массива
// (если нам не нужен какой-то элемент, обьявляем переменную с нижним подчёркиванием)
console.log(userName, userCiti)

