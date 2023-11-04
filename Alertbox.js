window.alert("connected")
const time =new Date().getHours();
let greeting;
if(time<=12){
    greeting="Good Morning";
}
else if(time<=19){
    greeting("Good Evening");
}
else{
    greeting="Good Night";
}
document.getElementById("demo").innerHTML=greeting;