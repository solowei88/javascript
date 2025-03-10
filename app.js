/*
Упражнение - Проверка робота
*/

let res = prompt ('Сколько будет 7 + или - 15');


let message; 
/*
if (res ==='Я не робот') {
    message = 'Успех';
} else if (Number(res) === (7 + 15)){
    message = 'Успех';
} else if (Number(res) === (7 - 15)){
    message = 'Успех';
} else {
    message = 'Вы робот';
}
*/
switch (true) {
    case res === "Я не робот": // Проверка на строку "Я не робот"
        message = 'Успех';
    case Number(res) === 7 + 15: // Проверка на 22
    case Number(res) === 7 - 15: // Проверка на -8
        message = 'Успех';
        break;
    default:
        message = 'Вы робот';
        break;
}


console.log (res);
console.log (` ${message}`);


