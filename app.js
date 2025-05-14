/*
reduce Упражнение - среднее значение
*/

const operations = [100, 200, -120, 100, -200, 350];



const avg = operations.reduce((acc, value, i) =>{
    acc += value;
    return acc / (i + 1);    
},0)
console.log(avg);



