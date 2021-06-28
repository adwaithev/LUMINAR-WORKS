


function add(...args){
    let total=0;
    for(let num of args){
        total+=num;
        
    }
    return total;
}
console.log(add(10,20,30,40));