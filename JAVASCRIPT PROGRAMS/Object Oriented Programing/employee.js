class employees {
    constructor(id, name, desig, salary, exp) {
        this.id = id;
        this.name = name;
        this.desig = desig;
        this.salary = salary;
        this.exp = exp;
    }

}


var emp1 = new employees(1, "ajay", "developer", 10000, 5);

var emp2 = new employees(2, "joseph", "developer", 20000, 8);
var emp3 = new employees(3, "alex", "qa", 25000, 4);
var emp4 = new employees(4, "vijay", "manager", 30000, 2);
var emp5 = new employees(5, "alex", "dev", 40000, 6);

var arr = [];
arr.push(emp1, emp2, emp3, emp4, emp5,);
//console.log(arr);
 

//print highest salarieed employee
var emp_name=arr.reduce((item1,item2)=>item1.salary>item2.salary?item1.name:item2.name);
console.log(emp_name);

//sort employess according to exp
var srt_array=arr.sort((item1,item2)=>item1.exp-item2.exp);
console.log(srt_array);

//check is there any employee working as qa
var check_emp=arr.find(item=>item.desig=="qa");
console.log(check_emp);








