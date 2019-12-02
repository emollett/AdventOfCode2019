fs = require('fs');

//gets the numbers from the provided input file, and splits them into an array stripping out the returns
input = fs.readFileSync('input.txt').toString().split(",");


//before running the program, replace position 1 with the value 12 and replace position 2 with the value 2
input.splice(1, 1, 12);
input.splice(2, 1, 2);

i = 0;
while(i<input.length){
    input[i] == 1 ? addingFunction(input[i+1], input[i+2], input[i+3])
        : input[i] == 2 ? multiplyingFunction(input[i+1], input[i+2], input[i+3])
        : i = (input.length +1);
}
console.log("end input " + input);
console.log("end position 0 " + input[0]);

function addingFunction(a, b, c){
    newNumber = parseInt(input[a]) + parseInt(input[b]);
    input.splice(parseInt(c), 1, newNumber);
    i = i+4;
}

function multiplyingFunction(a, b, c){
    newNumber = parseInt(input[a]) * parseInt(input[b]);
    input.splice(parseInt(c), 1, newNumber);
    i=i+4;
}