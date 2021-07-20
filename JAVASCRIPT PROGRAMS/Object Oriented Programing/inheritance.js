//parent=>child
//base=>derived
//super=>sub

class Parent{
    phone(){
        console.log("samsung");
    }
}

class child extends Parent{

}

var obj=new child;
obj.phone()