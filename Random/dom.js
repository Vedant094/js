let a=document.getElementById("heading");
console.log(a);
let b=document.getElementById("heading2");
console.log(b);

let c=document.getElementsByClassName("heading-class");
console.log(c);//returns the elemetns with same class name(collection)

let d=document.getElementsByTagName("p");
console.log(d);//returns the array of all the elements with the similar tag name(collection)  

let e=document.querySelector("p");
console.log(e);//First Element

let f=document.querySelectorAll("p");
console.log(f);//Node list of all the elements

console.log(e.innerHTML);   

let g=document.querySelector("body");
console.log(g);
console.log(g.innerText);

let h=document.querySelector("h1");

console.log(h);
console.log(h.innerText);