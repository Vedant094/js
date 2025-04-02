let a = document.querySelector(".C1");
let body =document.querySelector("body");
let currMode="YELLOW";
a.onclick = () =>{
    if(currMode==="YELLOW"){
        currMode="PINK";
        body.style.backgroundColor="black";
        a.innerText="YELLOW";
    }
    else{
        currMode="YELLOW";
        body.style.backgroundColor="yellow";
        a.innerText="DARK";
    }
}