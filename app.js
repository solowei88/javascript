/*
Методы объектов
*/


const user = 
    {
        name: 'Вася',
        surname: 'Пупкин', 
        age: 54,
        getFullName: function () {
            console.log(this);
            return this.name + ' ' + this.surname;
        }
    }
;

console.log(user.getFullName());

