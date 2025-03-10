/*
Упражнение - Размещение депозита
*/

let deposit = 12000;
let result = deposit * (1 + 0.07 / 12) ** 24;


if (result > 13500) {
    console.log(`Может купить и у него останется ${result - 13500}$`);
} else {
    console.log('Не хватает денег');
}



