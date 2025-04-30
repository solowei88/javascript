/*
Условия в функциях
*/

function canAccessWebsite(age) {
    if (age < 18) {
        return false;
    } else {
        return true;
    }
    
}

const canAccessWebsite2 = age => age < 18 ? false : true ;

console.log (canAccessWebsite(10));
console.log (canAccessWebsite(20));

console.log (canAccessWebsite2(10));
console.log (canAccessWebsite2(20));




