/*
filter
*/

const operations = [[100, 200], [120, 100], [200, 350]];

let result = operations.filter(subArray => subArray[0] < subArray[1]) // Отфильтровываем подмассивы по условию
                      .map(subArray => subArray[1] - subArray[0]); // Создаём новый массив с разницей

console.log(result); // Вывод результата