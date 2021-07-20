function checkAge(){
    let ag=age.value
    //alert(age);
    let html_data='';

    if (ag>18){
       html_data=`<div style="background-color: darkgreen;">"Eligible"</div>`
    }
    else{
        html_data=`<div style="background-color: crimson;">"Not Eligible"</div>`
    }
   result.innerHTML=html_data;
   
}