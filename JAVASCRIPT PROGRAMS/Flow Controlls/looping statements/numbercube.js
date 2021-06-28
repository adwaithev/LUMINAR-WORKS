var num = 123;


var res = 0;



while (num != 0) {
    let digit = num % 10;
    res = res + (digit ** 3);
    num = Math.floor(num / 10);

}
console.log(res);
