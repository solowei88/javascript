/*
Упражнение - реализация some
*/

const operations = [100, 200, -120, 300, -200, 350, 'привет'];


function some(arr, element){
    if(arr.find(el => el === element)){
        return true;
    } else {
        return false;
    }
}

console.log(some(operations, 'привет'));


console.log(operations.some(el => el === -120));






