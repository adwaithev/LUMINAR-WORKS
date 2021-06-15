//gcd of 14 1nd 63

var i = 0;
var num1 = 14;
var num2 = 63;
var factor = "0";


while (i <= num1) {
    if (num1 % i == 0 && num2 % i == 0) {
       factor = i;
    }
    i++;
}
console.log(factor);



