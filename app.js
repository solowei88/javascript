/*
Упражнение - склад
*/


const werehouse = {
  goods: [],
  findGoodById: function (id){
    return this.goods.find(g => g.id === id);
  },
  addGood: function (good){
    this.goods.push(good);
  },
  getWeightKg: function () {
    return this.goods.reduce((acc, el) => 
      acc += el.weight?.kg ? el.weight.kg : 0, 0)
  },    
};
 
const car = {
  id: 1,
  weight: {
    kg:1000
  },
  brand: 'Ford'
}

const chair = {
  id: 2,
  weight: {
    kg:2
  },
}

const paper = {
  id: 3,
  color: 'red' 
}

werehouse.addGood(car);
werehouse.addGood(chair);
werehouse.addGood(paper);


console.log(werehouse.goods);
console.log(werehouse.findGoodById(1));
console.log(werehouse.getWeightKg());

