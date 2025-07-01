/*
Optional chaining
*/


const cities = {
  MSK: {
    temp: {
      celsius: 20
    }
  },
  SPB: {
    
  }
};
console.log(cities.SPB?.temp?.celsius);

