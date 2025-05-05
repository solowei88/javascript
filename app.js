/*
Break и continue
*/
const TASKS = ['Задача 1', 'Задача 2', 'Задача 3', 'Задача 4'];

for (i = 0 ; i < TASKS.length; i++){
    if (TASKS[i] === 'Задача 1'){
        continue;                            // пропускает 1 итерацию
    } else if (TASKS[i] === 'Задача 4'){
        break;                               // останавливает выполнение цикла
    }
    console.log(TASKS[i]);
}




