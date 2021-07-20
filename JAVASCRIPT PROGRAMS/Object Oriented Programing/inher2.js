//multilevel inheritence

class Parent
{
    m1(){
        console.log("inside m1 method");
    }
}
class Child extends Parent
{
    m2(){
        console.log("inside m2 method");
    }
}
class subchild extends Child
{
    m3(){
        console.log("inside m3 method");
    }
}

var obj=new subchild()
obj.m3();
obj.m2();
obj.m1();

var obj2=new Child()
obj2.m2();
obj2.m1();
//obj2.m3(); //error

var obj3=new Parent()
obj3.m1();//only this