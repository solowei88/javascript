/*
Упражнение - Стрелочные функции
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


const power2 = (pow) => (num) => num**pow; // стрелочная функция такая запись тоже правильная const power2 = pow => num => num**pow ;
console.log(power2(2)(3));