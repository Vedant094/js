function leapyear(year){
    return (year%100==0)?(year%400==0):(year%4==0);
}

console.log(leapyear(2000));
console.log(leapyear(2143));
console.log(leapyear(2022));
console.log(leapyear(2210));
console.log(leapyear(2018));
console.log(leapyear(2016));