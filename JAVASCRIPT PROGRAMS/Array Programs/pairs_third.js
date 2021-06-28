var arr = [1, 2, 3, 4];

var low = 0;
var upp = arr.length - 1;
var element = 6;



while (low < upp) {
    let total = arr[low] + arr[upp];

    if (element == total) {
        console.log("pairs",arr[low], arr[upp]);
        low++;
    }
    else if (element > total) {
        low++;
    }
    else if (element < total) {
        upp--;
    }

}