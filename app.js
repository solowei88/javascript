/*
Упражнение - Функция разбора URL
Нужно разделить URL на протокол, доменное имя и на остальной путь внутри сайта.
*/

const url = 'https://www.fl.ru/freelancers/messengers/';

function parsingURL(url){
    const[protokol, _, dom, ...path] = url.split("/");
    if(protokol === 'http:' || protokol === 'https:'){
        if (!dom.includes(".")){
            return;
        }
        console.log(`Протокол: ${protokol.split(':')[0]}`);
        console.log(`Домен: ${dom}`);
        console.log(`Адрес: ${path.join('/')}`);   
    }
    
}

parsingURL(url);
parsingURL('https://www.youtube.com/');




