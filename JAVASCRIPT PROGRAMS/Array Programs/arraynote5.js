//highest expenses

var expenses = [30000, 25000, 27000, 25000, 32000];
var max_exp=0;
for (let exp of expenses){
    if(exp>max_exp){
        max_exp=exp;
    }
}
console.log("maximum expense =",max_exp);