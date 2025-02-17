let a=document.querySelector(".c1");

console.log(a);
console.log(a.innerText);

console.log(a.getAttribute("class"));

let ac=document.createElement("button");
ac.innerText="Click Me!!";
console.log(ac);

a.append(ac);//appends at the end of the node inside the domain
//a.prepend(ac);//appends at the top of the node inside the domain
//a.before(ac);//adds before the node outside the domain
//a.after(ac);//adds after the node inside the domain

//To remove the element 
ac.remove();