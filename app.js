/*
reduce
*/

const operations = [100, 200, -120, 100, -200, 350];

let summ = 0;
for (money of operations){
    summ += money;
    console.log(summ)
}

const finalBalanse = operations.reduce((acc, value, i) =>{
    return acc += value;
},0)
console.log(finalBalanse);

const minElement = operations.reduce((acc, value, i) =>{
    if (acc < value){
        return acc ;
    } else {
       return value ; 
    }
    
},0)
console.log(minElement);
