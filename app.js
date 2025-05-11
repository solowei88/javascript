/*
forEach
*/

const score = [1, 5, 7, 9];

// for (const [i, el] of score.entries()) {
//     console.log(`Раунд: ${i}, ${el}`);
// }

score.forEach((el, i) => {
    console.log(`Раунд: ${i} - ${el}`);
  });