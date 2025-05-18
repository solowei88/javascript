/*
Упражнение - проверка номера
*/


function isPhoneNumber(num){
    num = num.trim();
    num = num.replace('+7', '8');
    if (!num.startsWith('8')) {
        return false;
    } 
    num = num.replaceAll(')', '');
    num = num.replaceAll('(', '');
    num = num.replaceAll('-', '');
    num = num.replaceAll(' ', '');
    if ( num.length != 11 ){
        return false;
    }
    if (isNaN(Number(num))){
        return false;
    } else {
        return true;
    }
}


 
console.log(isPhoneNumber('+79951435596')); // true
console.log(isPhoneNumber('89951435596'));  // true
console.log(isPhoneNumber('+89951435596')); //false
console.log(isPhoneNumber('89951gfg35596'));//false
console.log(isPhoneNumber('+7995143'));     //false



   