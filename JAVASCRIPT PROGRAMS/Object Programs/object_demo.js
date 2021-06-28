


var expenses = { jan: 1000, feb: 15000, march: 22000, april: 22000, may: 20000 }


console.log(expenses.march);

console.log(expenses["march"]);

//adding a new property:value


//expenses["june"]=25000;
//expenses.june=25000;
//console.log(expenses);


expenses.march += 3000;
console.log(expenses);

//search july

console.log("july" in expenses)


//check for june if not found add june

if ("june" in expenses) {

}
else {
    expenses.june = 26000;
}


console.log(expenses);


if (!("july" in expenses)) {
    expenses.july = 27000;
}
console.log(expenses);