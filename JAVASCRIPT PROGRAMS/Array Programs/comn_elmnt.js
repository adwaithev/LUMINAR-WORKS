var arr1 = [10, 20, 30, 40];

var arr2 = [10, 11, 12, 20];



var count=0;
for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            console.log(arr1[i]);
            count++;
        }
    }
}
console.log(count);
