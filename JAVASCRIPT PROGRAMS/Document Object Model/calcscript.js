let displayNumber = (num) => inpt.value += num;

//let evaluateExpression=()=>inpt.value==""?inpt.value=0:inpt.value=eval(inpt.value);

function evaluateExpression() {
    if (inpt.value == "") {
        inpt.value = 0;
    }
    else {
        try {
            inpt.value = eval(inpt.value)
        }
        catch {
            inpt.value = "error"

        }
    }




}

let clearBox = () => inpt.value = "";







let removeNumber = () => (inpt.value) = inpt.value.slice(0, -1);
//function removeNumber(){
   // inpt.value=inpt.value.slice(0,-1)
//}