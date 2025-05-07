/*
Упражнение - Расчёт итогового баланса
*/


const operations = [1000,-700,300,-500,10000];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

function summaBolshe0(summa){
    if (summa < 0){
        return false;
    }
    return true;
        
}
console.log(summaBolshe0(sum3));
function summa(arr){
    for (let element of arr) {
        sum1 = sum1 + element;
        if (!summaBolshe0()){
            break;
        }
    }
    console.log(`Сумма: `+ sum1);
}

summa(operations);

function srednyDohod(arr){
    let i = 0;
    for (let element of arr) {
        if (element >= 0 ){
            sum2 = sum2 + element; 
            i++;   
        }
        
    }
    console.log(`Средний доход: `+ sum2 / i);
}
    
srednyDohod(operations);  

function srednyRashod(arr){
    let g = 0;
    for (let element of arr) {
        if (element <= 0 ){
            sum3 = sum3 - element; 
            g++;   
        }
        
    }
    console.log(`Средний расход: `+ sum3 / g);
}
    
srednyRashod(operations);

