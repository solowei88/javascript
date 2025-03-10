/*
Switch
*/

const role = 'Admin';


if (role === 'Admin') {
    console.log('Admin');
} else if (role === 'Manager'){
    console.log('Manager');
} else if (role === 'Seo'){
    console.log('Seo');
} else {
    console.log('не угадал');
}

switch (role) {
    case('Admin'):
        console.log('Admin');
        break;
    case('Manager'):
        console.log('Manager');
        break;
    case('Seo'):
        console.log('Seo');
        break;
    default:
        console.log('Мы тебя не знаем');
}

switch (role) {
    case('Admin'):
        console.log('Admin');
    case('Manager'):
        console.log('Не руководитель');
        break;
    case('Seo'):
        console.log('Seo');
        console.log('Руководитель');
        break;
    default:
        console.log('Мы тебя не знаем');
}


const num = 2;

switch (true) {
    case(num > 0):
        console.log('Положительное число');
        break;
    case(num < 0):
        console.log('Отрицательное число');
        break;
    default:
        console.log('Ноль');
}
