/*
 Упражнение - Проверка прав
*/
/*
function logName (name, surname) {
    console.log (`My name is ${name} ${surname}`);
}

logName ('Alexey', 'Ernst');
logName (1, 3);
*/
function countDepositSum (depositUSD, month, rate) {
    let sum = depositUSD * (1 + rate / 12) ** month;
    
    return sum;
}
/* вариант 2 
function countDepositSum (depositUSD, month, rate) {
    return depositUSD * (1 + rate / 12) ** month;

}
*/

const output1 = countDepositSum (1000,24,0.12);

console.log (`My name is ${output1}`);

const output2 = countDepositSum (1000,36,0.12);

console.log (`My name is ${output2}`);


    




