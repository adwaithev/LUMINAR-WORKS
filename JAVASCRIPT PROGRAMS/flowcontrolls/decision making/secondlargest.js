//second largest number


var num1=47;
var num2=48;
var num3=46;

if (num1>num2 && num2>num3){
console.log("second largest number is ",num2);
}
else if(num2>num1 && num1>num3) {
    console.log("second largest number is",num1);
}
else{
    console.log("second largest number is",num3);
}

//console.log(num1>num2&&num2>num3?num2:num2>num1&&num1>num3?num1:num3);