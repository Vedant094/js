let a = document.querySelector(".C1");
let body =document.querySelector("body");
let currMode="LIGHT";
a.onclick = () =>{
    if(currMode==="LIGHT"){
        currMode="PINK";
        body.style.backgroundColor="black";
        a.innerText="PINK";
    }
    else{
        currMode="LIGHT";
        body.style.backgroundColor="pink";
        a.innerText="DARK";
    }
}