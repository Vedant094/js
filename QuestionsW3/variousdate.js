/*Write a JavaScript program to get the current date.  
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/

let a=new Date();

let day=a.getDate();
let month=a.getMonth()+1;
let year=a.getFullYear();

if(day<10){
    day="0"+day;
}
if(month<10){
    month="0"+month;
}
let b=document.querySelector("button");
b.onclick=()=>{
    alert((month+"-"+day+"-"+year));
}
