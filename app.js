/*
Циклы for of и for in
*/


const ARR = [1,2,4,5,11,7,'Циклы'];

for (let element of ARR) {
    console.log(element);  //вывадит элементы массива
}


for (let index in ARR) {
    console.log(index);   //вывадит индексы элементов массива
}