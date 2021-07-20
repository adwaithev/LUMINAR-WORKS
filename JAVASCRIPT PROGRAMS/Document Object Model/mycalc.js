function displayNumber(num){
    inpt.value+=num;
}


function clearBox(){
    inpt.value="";
}

function evaluateExpression(){
    if(inpt.value==0){
        inpt.value=0;
    }else{
        try{
            inpt.value=eval(inpt.value);
        }
        catch{
            inpt.value="error"
        }
    }
}