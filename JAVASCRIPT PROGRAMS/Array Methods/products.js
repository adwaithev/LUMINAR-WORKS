var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
]

//print product names only

var product_names=products.map(item=>item.name);
console.log(product_names);


//print all product names in uppercase

var p_name=products.map (item=>item.name.toUpperCase());
console.log(p_name);


//print all products whose mrp<50;

var below_fifty=products.filter(item=>item.mrp<50);
console.log(below_fifty);


//print out of stock items
//avl_qty==0;
var out_of_stock=products.filter(item=>item.aval_qty==0);
console.log(out_of_stock);

//stock<10
var stock=products.filter(item=>item.aval_qty<10);
console.log(stock);

//print product available in rane of 50-100

var product_range=products.filter(item=>item.mrp>50&&item.mrp<100);
console.log(product_range);

//print names starting with b
var names_with_b=products.filter(item=>item.name[0]=="b")
console.log(names_with_b);


//if mrp>55 add offer 5% mrp<50 offer 0%

var offer=products.filter(item=>item.mrp>55?item["offer"]="5%":item["offer"]="0%");
console.log(offer);







//costly product

var costly_prdct=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2);
console.log("costly_prdct",costly_prdct)

//low cost products

var low_cost=products.reduce((item1,item2)=>item1.mrp<item2.mrp?item1:item2);
console.log("low cost product",low_cost);


//args

let add=(...args)=>args.reduce((num1,num2)=>num1+num2);

console.log("result sum is",add(10,12,90,24));

//.find()

var product_details=products.find(item=>item.name==="carrot");
console.log(product_details);


//.some()
var is_available=products.some(item=>item.mrp>30&&item.mrp<50);
console.log(is_available);


