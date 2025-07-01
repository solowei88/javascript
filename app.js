/*
Деструктуризация и rest
*/


let user = {
  name: 'Вася',
  age: 40,
  citi: 'Moskow'
};

const {citi, ...userWithouCiti } = user;
console.log(citi);
console.log(userWithouCiti);

const additionalData = {
  skills: ['Разработка','Дизайн'],
  CreditCard: 2345234523452345
};

user = {
  ...user,
  ...additionalData
}
// user.skills = additionalData.skills;


console.log(user);