var fs = require('fs');

var input = fs.readFileSync('input.txt').toString().split("\r\n");

var array = [];
for (i=0; i<input.length; i++){
    var firstMass = (Math.floor(input[i]/3))-2;
    console.log("First is " + firstMass);
    var totalMass = [firstMass];
    while(firstMass > 5){
        firstMass = (Math.floor(firstMass/3))-2;
        totalMass.push(firstMass);
    };
    console.log(totalMass);
    moduleMass = totalMass.reduce(addingFunction);

    array.push(moduleMass);
}
console.log(array);

var total = array.reduce(addingFunction);

function addingFunction(total, value){
    return total + value;
}

console.log(total);