class Parent{
    phone(){
        console.log("nokia")
    }
    bike(){
        console.log("passion pro")
    }
}

class child extends Parent{
    phone(){
        console.log("iphone")
    }
    bike(){
        console.log("re350")
    }
}



var obj=new child();
obj.phone()