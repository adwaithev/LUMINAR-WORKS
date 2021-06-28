var product={
    item_code:1000,
    mrp:30000,
    name:"f14",
    in_stock:15
}

// item price

console.log(product.mrp);

// itenm anme

console.log(product.name);

// update 2000 rs offer
    
product.mrp-=2000;
console.log(product);

// chk for offer is present if not add offer:20% 

if(!("offer" in product)){
    product.offer="25%";
}
console.log(product);
// 25 
product.in_stock=25;

console.log(product);
