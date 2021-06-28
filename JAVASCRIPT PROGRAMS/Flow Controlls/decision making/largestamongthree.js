//largest among three


var num1=30;
var num2=45;
var num3=20;

if(num1>num2 && num1>num3){
    console.log("largest number is",num1);
}
else if(num2>num1 && num2>num3){
  console.log("largest number is",num2);
}
else{
    console.log("largest number is",num3);
}


//console.log(num1>num2&&num1>num3?num1:num2>num1&&num2>num3?num2:num3)