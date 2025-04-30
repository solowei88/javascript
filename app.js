/*
Упражнение - Кредит на MacBook
*/
/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/
const AGE = 25;
const WORK = false;
const MONEY = 1900;
const CREDIT = creditUSD(AGE,WORK)

function creditUSD (age, work){
    if (age > 24 && work === true){
        return 500;
    } else if (AGE > 24){
        return 100;
    } else {
        return 0;
    }
    
}


function calculation (money) {
    if (money >= 2000) {
        return true;
    } else if (money + CREDIT >= 2000){
        return true;
    } else {
        return false;
    }
}

console.log (creditUSD(AGE,WORK));
console.log (calculation(MONEY));




