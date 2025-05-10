/*
Возврат функции.
*/




function power(pow){      
    
    return function(num) {
        return num**pow;
    }    
}

const powerOfTwo = power(2); // кладём функцию в константу
console.log(powerOfTwo(3));
console.log(powerOfTwo(4));

const powerOfTree = power(3);
console.log(powerOfTree(3));
console.log(powerOfTree(5));

console.log(power(5)(4));  // передаём аргументы в две функции