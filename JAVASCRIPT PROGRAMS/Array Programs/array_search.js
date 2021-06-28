var arr = [10, 11, 12, 13, 14, 15];
var element = 14;


for (let num of arr) {
    var flag = 0;
    if (num == element) {

        flag++;
        break;
    }
}
if (flag == 0) {
    console.log("Element not found")
}
else {
    console.log("Element found")
}
//binary search