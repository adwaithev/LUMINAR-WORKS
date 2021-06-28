//count of amount greater than 25000


var expenses = [30000, 25000, 27000, 25000, 25000];
var count = 0;
for (let exp of expenses) {
    if (exp > 25000) {
        count++;
    }
}
console.log(count);
