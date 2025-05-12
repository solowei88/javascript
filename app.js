/*
filter
*/

const operations = [100, -7, 70, -10, 100];

// const pozitiveOperations =[];

// for (const operation of operations) {
//   if (operation > 0){
//     pozitiveOperations.push(operation);
//   }
  
// }
// console.log(pozitiveOperations);

const pozitiveOperations = operations.filter(operation => {
  return operation > 0;
})
console.log(pozitiveOperations);

const pozitiveRUBOperations = operations
.filter(operation => {
  return operation > 0;
})
.map(operation => {
  return operation * 80;
})
console.log(pozitiveRUBOperations);