//Create a new button element. Give it a text "click me", background color of red & text color of white.
//Insert the button as the first element inside the body tag.
let a=document.querySelector("body");
let b=document.createElement("button");
b.innerText="click me!";
b.style.backgroundColor="red";
b.style.color="white";
a.prepend(b);

//Create a <p> tag in html ,give it a class and some styling. Now create a new class  in css and try to append this class to <p> element .
//Did you notice ,how you overwrite the class name when you add one?solve this problem using class list.

let p=document.querySelector("p");
p.classList.add("c2");