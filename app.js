/*
map
*/

const transactionInUSD = [10, -7, 70, -10, 100];

const transactionInRUB =[];

for (const transaction of transactionInUSD) {
    transactionInRUB.push(transaction*80);
}
console.log(transactionInUSD);
console.log(transactionInRUB);

const transactionInRUB2 = transactionInUSD.map((transaction, i) => {
    return transaction * 60;  
}) 

console.log(transactionInRUB2);