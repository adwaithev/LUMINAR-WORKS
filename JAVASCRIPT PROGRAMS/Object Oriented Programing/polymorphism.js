//method overloading



class calculation {
  add() {
    console.log("inside no arg method")
  }
  add(num1) {
    console.log("inside one arg method")
  }
  add(num1, num2) {
    console.log("inside two arg method")
  }
  // add(...args){
  // console.log("inside two arg method")
  //}
}


var calc = new calculation;
calc.add()