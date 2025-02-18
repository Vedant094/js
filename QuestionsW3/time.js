/*Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/
let a = new Date();

//To get the current day..

let day=a.getDay();


let daylist=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

console.log("Today is : "+daylist[day] +".");

let c=document.querySelector("p");
let b=document.querySelector("button");
b.onclick=()=>{
    c.innerText="Today is : "+daylist[day] +".";
}
let hours=a.getHours();
let minutes=a.getMinutes();
let seconds=a.getSeconds();
  
let f=(hours>=12)?"PM":"AM";

hours=(hours>=12)?hours-12:hours;

 if(hours===0 && f==="PM"){
    if(minutes===0 && seconds==0){
        hours=12;
        f="NOON";
    }
    else{
        hours=12;
        f='PM';
    }
 }

 if(hours===0 && f==="AM"){
    if(minutes==0 && seconds==0){
        hours=12;
        f="MIDNIGHT";
    }
    else{
        hours=12;
        f="AM";
    }
 }
let k=document.querySelector(".C1");
let h=document.querySelector(".B1");
h.onclick=()=>{
    k.innerText="Current Time: " + hours +":"+ minutes +":"+ seconds + f;
}
 



