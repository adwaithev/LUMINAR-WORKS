

var pattern="ABAC";
var dict={};
for(let char of pattern){
    if(char in dict){
        console.log("first recursive charecter",char)
        break;
    }
    else{
        dict[char]=1;
    }
}