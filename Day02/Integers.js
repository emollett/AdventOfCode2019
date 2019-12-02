fs = require('fs');

for(noun=0; noun<100; noun++){
    for(verb=0; verb<100; verb++){
        input = fs.readFileSync('input.txt').toString().split(",");
        input.splice(1, 1, noun);
        input.splice(2, 1, verb);

        output = computer(input);

        if (output == 19690720){
            totalAnswer = (100*noun) + verb;
            console.log(noun, verb);
            console.log(totalAnswer);
        }
    }
}

function computer(input){
    i = 0;
    while(i<input.length){
        input[i] == 1 ? addingFunction(input[i+1], input[i+2], input[i+3])
            : input[i] == 2 ? multiplyingFunction(input[i+1], input[i+2], input[i+3])
            : i = (input.length +1);
    }
    return input[0];
}

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