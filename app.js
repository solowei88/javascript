/*
Упражнение - кошелёк
*/


const wallet = 
    {
        balance: 0,
        operations: [], 

        positive: function (description, sum) {
            this.balance = this.balance + sum;
            const operation = ['операция: ' + description, 'сумма: ' + sum];
        this.operations.push(operation);
        return true;
        },

        negative: function (description, sum) {
            if (this.balance < sum ){
                console.log('Недостаточно средств');
                return false;
            }
            this.balance -= sum;
            const operation = ['операция: ' + description, 'сумма: ' + sum];
            this.operations.push({
                операция: description,
                сумма: sum,
            });
            return true;
            
        },
        
        identificaton: function () {
            return this.operations.length;
        },
            
        
    }
;
wallet.positive('sgs', 65);
console.log(wallet.balance);
wallet.negative('sgsв', 64);

console.log(wallet.balance);
console.log(wallet.operations);
console.log(wallet.identificaton());

