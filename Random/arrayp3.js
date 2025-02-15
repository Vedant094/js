let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// Remove the first company from the array
// Remove Uber and Add Ola in its  place
// Add Amazon at the end
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amazon");
console.log(companies);
