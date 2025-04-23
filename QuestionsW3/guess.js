let num=Math.ceil(Math.random()*10);

console.log(num);

let gnum=prompt("Guess a number between 1 to 10");

if(num==gnum){
    alert("Good Work");
}
else{
    alert("Numbers do not match");
}