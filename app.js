/*
Функции высшего порядка. Callback.
*/




function positive(a, b){
    const res = a + b ;
    return res;       
}

function negative(a, b){
    const res = a - b ;
    return res;       
}

function umnojenie(a, b){
    const res = a * b ;
    return res;       
}

function delenie(a, b){
    const res = a / b ;
    return res;       
}

function callback(a, b, fn){ //функция высшего порядка (принимает другую функцию)
    console.log(fn.name);
    const res = fn(a,b);
    return res;       
}

console.log(callback(2, 3, delenie));
console.log(callback(2, 3, umnojenie));
console.log(callback(2, 3, negative));
console.log(callback(2, 3, positive));