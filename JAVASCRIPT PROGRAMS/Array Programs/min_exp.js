//minimum expenses

var expenses = [30000, 25000, 27000, 25000, 32000];

var min_exp=expenses[0];
for(let exp of expenses){
    if(exp<min_exp){
        min_exp=exp;
    }
}
console.log(min_exp);

