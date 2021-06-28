var employees=[
    [1000,"ajay","developer",20000,2],
    [1001,"ram","developer",22000,2],
    [1002,"ravi","qa",25000,3],
    [1003,"raju","qa",20000,1],
    [1000,"nikil","mrkt",30000,2]
]

//

for(let employee of employees){

console.log(employee);

}

//print employee names only

for(let employee of employees){

    console.log(employee[1]);
    
    }

    //print employee salary only
for(let employee of employees){

    console.log(employee[3]);
    
    }


//print employee details whose designation=developer    
for(let employee of employees){

    if (employee[2]=="developer"){
        console.log(employee);
    }
    
    }


//print employee details whose salary< 22000


for(let employee of employees){

if(employee[3]<22000){
    console.log(employee)
}
    
    }