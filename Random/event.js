/*let btn1=document.querySelector("#btn1");
/*btn1.onclick=()=>{
    console.log("button was clicked!");
    btn1.innerText="do not click!";
}
 btn1.addEventListener("click",()=>{
    console.log("Button was clicked!!")
 })

 btn1.addEventListener("click",()=>{
    console.log("Button was cliked by Vedant!")
 })

 letbtn2=document.querySelector("#btn2");
 btn2.addEventListener("dblclick",()=>{
    console.log("Button was clicked twice!!")
 })*/

let btn1=document.querySelector("#btn1");
let b=document.querySelector("body");
let currmode="DARK";

btn1.addEventListener("click",()=>{
    if(currmode==="DARK"){
        currmode="PINK";
        b.style.backgroundColor="pink";
        btn1.innerText="DARK";
    }
    else{
        currmode="DARK";
        b.style.backgroundColor="black";
        btn1.innerText="PINK";
    }
});