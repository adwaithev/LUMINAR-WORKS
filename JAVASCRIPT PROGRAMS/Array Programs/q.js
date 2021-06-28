var products = [
    [100, "ricepowder", 30, 10],
    [101, "oreo", 35, 100],
    [102, "darkfantacy", 40, 50],
    [103, "fifty", 20, 5],
    [104, "horlicks", 200, 5],
    [105, "complan", 190, 0],
    [106, "boost", 250, 10],
    [107, "item1", 5, 10],

]

// print number of product in this shop  7




// print number of product in stock 
var flag = 0;
for (let product of products) {

    if (product[3] > 0) {
        flag++;
    }
}
console.log("number of product in stock" + '  ' + flag);

// print costly product


let high=0;
for(let item of products){
    if(item[2]>high){
        high=item[2];
    }
}
console.log("costly product",high);



// print low_cost product
let low=300;
for(let item of products){
    if (item[2]<low){
        low=item[2];
    }
}
console.log("low cost product" + '   ' + low)

// is there any item available under rs 10 ? true

for (let product of products) {
    if (product[2] < 10) {
        console.log("true");
        break;
    }
}

// print deatils of boost

for (let product of products) {
    if (product[1] == "boost") {
        console.log(product);
    }
}
