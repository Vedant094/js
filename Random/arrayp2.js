let prices=[250,645,300,900,50];
console.log(prices);
for(let i=0;i<prices.length;i++){
    let p=(1/10)*prices[i];
    prices[i]=prices[i]-p;
    p=0;
}
console.log(prices);