//0,1,1,2,3,5,8,13,21

var num1 = 0;
var num2 = 1;
var sum = 0;
console.log(num1,"\n", num2);

while (sum <21) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    console.log(sum);

}