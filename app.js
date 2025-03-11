/*
 Упражнение - Проверка прав
*/


const balance = 1000;
const bonusBalance = 10;
const isBanned = false;
const isExist = false;
const isSelling = true;

if ((balance >= 1000 || bonusBalance >= 100) && !isBanned  && !isExist && isSelling){
    console.log ('Покупаем');
} else {
    console.log (' Не покупаем');
}



