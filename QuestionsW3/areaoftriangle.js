//calculate the area of triangle who's sides are 5,6,7

let a=5;
let b=6;
let c=7;

//semi perimeter of the triangle

let s=(a+b+c)/2;

let area=Math.sqrt(s*(s-a)*(s-b)*(s-c));

console.log(area);