fs = require('fs');

function addingFunction(total, value){
    return total + value;
}

//gets the numbers from the provided input file, and splits them into an array stripping out the returns
input = fs.readFileSync('input.txt').toString().split("\r\n");

totalMass = [];

for (i=0; i<input.length; i++){
    fuelMass = Math.floor(input[i]/3)-2;
    additionalFuelMass = [fuelMass];
    while(fuelMass > 5){
        fuelMass = Math.floor(fuelMass/3)-2;
        additionalFuelMass.push(fuelMass);
    };
    moduleMass = additionalFuelMass.reduce(addingFunction);

    totalMass.push(moduleMass);
}

var total = totalMass.reduce(addingFunction);

console.log(total)