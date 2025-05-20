/*
Упражнение - маскировка карты
*/



function mapMasking(num){
    let card = String(num);
    return card.slice(12).padStart(16,'*')
}

console.log(mapMasking(1234567854325678)); // вывод: ************5678




   