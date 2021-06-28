var num=121;
var num1=num;


var res="";

while(num!=0){
    let digit=num%10;
    res+=digit;
    num=Math.floor(num/10);
}


//if(num1==res){
  //  console.log("palindrome");
//}
//else{
  //  console.log("not a palindrome");
//}

//ternary Operator
console.log(num1==res?"is palindrome":"not palindrome");