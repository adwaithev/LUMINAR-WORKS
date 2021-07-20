

function checkPrime() {
    var numbers='';
    for (let num = 10; num <= 20; num++) {
        let flag = 0;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                flag++;
                break;
            }
        }
        if (flag == 0) {
             numbers = console.log(num);
           
        }
    }
    result.innerHTML = numbers;

}













