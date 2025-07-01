/*
Итерирование по объекту
*/


const cities = {
      msk:{
        temp: 25,
        lt: 200
      },
      spb:{
        temp: 20,
        lt: 100
      }
       
}
let sumTemp = 0;
let citiesCount = Object.keys(cities).length;
// // for (const key in cities){
// //   console.log(key);
// //   sumTemp += cities[key].temp;
// // }

// console.log(sumTemp/citiesCount);

for (const key of Object.keys(cities)){
  console.log(key);
  sumTemp += cities[key].temp;
}
console.log(sumTemp/citiesCount);
