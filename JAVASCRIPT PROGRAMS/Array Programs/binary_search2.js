var arr=[10,7,11,8,12,9]
arr.sort((num1,num2)=>num1-num2);

var element=18;
var flag=0;
var low=0;
var upp=arr.length-1;

while(low<=upp){
    let mid=Math.floor((low+upp)/2);
    if(element>arr[mid]){
    low=mid+1;
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element==arr[mid]){
        flag++;
        break;

    }

}
console.log(flag==0?"not found":"found");