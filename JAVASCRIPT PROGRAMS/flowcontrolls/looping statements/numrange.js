var num = 3;

var low = 8;
var upp = 26;


for (i = 1; i < upp; i++) {
    var res = i ** num;
    
    if (res >= low && res <= upp) {
        console.log(res);
    }
    
}