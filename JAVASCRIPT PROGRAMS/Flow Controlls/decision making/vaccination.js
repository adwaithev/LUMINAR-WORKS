//read age and health_issues=true/false
//age>65 -eligible for vaccination
//age between 18-65 and health_issues=true; --eligible for vaccination
//else not eligible


var age=65;
var health_issues=true;



if (age>65){
    console.log("Eligible for Vacination");
}
else if(age>18 && age<=65 && health_issues ){
console.log("Eligible for vacination");
}
else{
    console.log("Not eligible for vaccination");
}