var fs = require('fs');

var input = fs.readFileSync('input.txt').toString().split("\r\n");
console.log(input);

var array = [];
for (i=0; i<input.length; i++){
    array.push((Math.floor(input[i]/3)-2));
}
console.log(array);

var total = array.reduce(addingFunction);

function addingFunction(total, value){
    return total + value;
}

console.log(total);