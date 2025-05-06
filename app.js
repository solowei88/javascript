/*
Цикл while
*/


const ARR = [1,2,4,5,11,7];

// for (i = 0 ; i < ARR.length ; i++){     
//     if (ARR[i] > 5){
//         break;
//     }
//     console.log(ARR[i]);
       
// }

let i = 0
while (ARR[i] <= 5 && i < ARR.length) {
      console.log(ARR[i]);
      i++;
}


let j = 0
do {
    console.log(j);
    j++;
} while (j < 0);  // do while - одна итерация выполнится в любом случае