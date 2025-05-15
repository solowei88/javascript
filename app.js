/*
flat и flatMap
*/

const prices = [[100, 200], [120, 300], [350,[250, 300]]];

const res = prices.flat(10);
const res2 = prices.flatMap(el => el.concat(444));


console.log(res);
console.log(res2);






