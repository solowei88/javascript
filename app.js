/*
Принцип DRY
*/

/*
Дан список задач
const tasks = ['Задача 1'];
Сделать функции:
 - Добавление задачи в конец
 - Удаление задачи по названию
 - Перенос задачи в начало списка по названию
 Всегда меняем исходный массив
*/
// const tasks = ['Задача 1'];
// tasks.push('Задача 2');
// tasks.push('Задача 3');
// tasks.push('Задача 4');
// tasks.push('Задача 5');
// console.log(tasks);

// const task1 = tasks.indexOf('Задача 1')
// console.log(task1);
// if (task1 !== -1){
//     tasks.splice(task1, 1);
// }
// console.log(tasks);

// const task3 = 'Задача 4'
// const taskPerenos = tasks.indexOf(task3)

// if (task3 !== -1){
//     tasks.splice(taskPerenos, 1);
//     tasks.unshift (task3)
// }

// console.log(tasks);
const tasks= ['Задача 1', 'Задача 2', 'Задача 3'];
function add(task){
    tasks.push(task);    
}
add('Задача 4');
add('Задача 5');
console.log(tasks);

function Remove(task){
    const search = tasks.indexOf(task);
    if (search === -1) {
        return;
    }
    return tasks.splice(search, 1);
}
Remove('Задача 6');
Remove('Задача 3');
console.log(tasks);



function Prioritize(task){
    const result = Remove(task);
    if (!result){
        return;
    }
    return tasks.unshift(result[0]);
}

Prioritize('Задача 2');
console.log(tasks);