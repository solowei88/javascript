/*
sort
*/

const users = ['Вася', 'Петя', 'Маша', 'Глаша'];

console.log(users);

users.sort(); // сортировка по алфавиту

console.log(users);

const operations = [100, -300, -100, 50, 480];

console.log(operations);

operations.sort((a, b) => {  // сортировка по убыванию
    if(a < b){
        return 1;
    }
    if(a > b) {
        return -1;
    }
});

console.log(operations);

operations.sort((a, b) => a - b); // сортировка по возростанию

console.log(operations);






