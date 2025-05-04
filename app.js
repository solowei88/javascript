/*
Упражнение - Обновление списка задач
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
const task = [];
function add(tasks){
    task.push(tasks);
    return task;
}
add('Задача 1');
add('Задача 2');
console.log(add('Задача 3'));

const mas = ['Задача 1', 'Задача 2', 'Задача 3'];
function delTask(task1){
    const search = mas.indexOf(task1);
    if (search !== -1) {
        mas.splice(search, 1);
        return mas;
    }
}
delTask('Задача 6');
delTask('Задача 3');
console.log(mas);

const mas2 = ['Задача 1', 'Задача 2', 'Задача 3'];

function taskPerenos(task2){
    const search2 = mas2.indexOf(task2);
    if (search2 !== -1) {
        mas2.splice(search2, 1);
        mas2.unshift (task2)
        return mas2;
    }
}

taskPerenos('Задача 2');
console.log(mas2);