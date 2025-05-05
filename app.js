/*
Цикл в цикле
*/

// for (i = 1 ; i < 5; i++){    
//     console.log(`Цикл 1 - ${i}`);  
//     for (j = 0 ; j < 5; j++){
//         console.log(`Цикл 2 - ${j}`);
//     }
       
// }
const tasks = [[1,'Задача 1'], [2,'Задача 2']];

for (i = 0 ; i < tasks.length ; i++){     
    for (j = 0 ; j < tasks[i].length; j++) {
        console.log(tasks[i][j]);
    }
       
}

