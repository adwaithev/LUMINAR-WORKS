


let add = (num1, num2) => num1 + num2

let sub = (num1, num2) => num1 - num2;

let cube = (num) => num ** 3;



console.log(add(10, 20));
console.log(sub(20, 10));
console.log(cube(3));


//create an arrow function for return num odd or even

let num_check = (num) => num % 2 == 0 ? "even" : "odd";
console.log(num_check(2));



//array methods  

//arr.map()

var arr = [1, 5, 6, 7, 3, 4];
var square = arr.map(num => num ** 2);
console.log(square);



//find cubes
var cubes = arr.map(num => num ** 3);
console.log(cubes);



//array.filter()
var arr=[1,5,6,7,3,4];
//print even numbers
var evens=arr.filter(num=>num%2==0)
console.log(evens);


//array.reduce()
var arr = [1, 5, 6, 7, 3, 4];

var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

var max=arr.reduce((num1,num2)=>num1>num2?num1:num2);
console.log("max",max);

var min=arr.reduce((num1,num2)=>num1<num2?num1:num2);
console.log("min",min);


//foreach()
var arr = [1, 5, 6, 7, 3, 4];
arr.forEach(num=>console.log(num))


