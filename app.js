/*
Упражнение - Цикл в обратном порядке
*/
const ARR = ['!', 'js', 'люблю', 'Я'];
const RESULT_ARRAY = [];
for (i = ARR.length - 1 ; i >= 0; i--){    
    RESULT_ARRAY.push(ARR[i])    
}
const ARR3 = RESULT_ARRAY.join(" ");
console.log(ARR3);

console.log(ARR.reverse().join(" ")); //то же самое через методы reverse().join(" ")




