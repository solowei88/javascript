/*
find и findIndex
*/

const operations = [100, 200, -120, 300, -200, 350];
// for (el of operations){
//     if(el > 200){
//         console.log(el);
//         break;
//     }
// }

const elGT200 = operations.find(el => el > 100);
console.log(elGT200);

const elGT200Index = operations.findIndex(el => el > 100);
console.log(elGT200Index);




