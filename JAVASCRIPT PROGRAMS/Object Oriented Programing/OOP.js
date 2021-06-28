



class student {
    constructor(rol, name, course, total) {
        this.rol = rol;
        this.name = name;
        this.course = course;
        this.total = total;
    }
    printStudent() {
        console.log(this.rol, this.name, this.course, this.total);
    }
}


var student1=new student(10,"sajay","mean",50);

console.log(student1);

var student2=new student(15,"Ajay","mean",54);

console.log(student2);

