//alert("Are you sure you want to continue??")
/*console.dir(document.body);
console.log(document.body);
console.log(document.body.childNodes);

//console.dir(window.document.body); 
//console.dir(window);
let a=document.getElementById("V");
console.log(a);
console.log(a.tagName);
let b=document.getElementById("C1");
console.log(b);
console.log(b.innerText);
let c=document.getElementsByClassName("E");
console.log(c);
console.log(c.innerHTMl);

let d=document.getElementsByTagName("p");
console.log(d);
d.innerText="Hello";

let e=document.querySelector("p");
console.log(e);
//returns the first element of the nodelist
e.innerText="hello";

let f=document.querySelectorAll("p");
console.log(f);
//returns the nodelist of all the tags in the program with the same tag.*/

let box=document.querySelector(".box");
console.log(box);
let clss=box.getAttribute("class");
console.log(clss);

let par=document.querySelector(".para");
console.log(par);
par.setAttribute("class","paragraph");
let name=par.getAttribute("name");
console.log(name);