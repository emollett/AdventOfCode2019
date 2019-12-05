fs = require('fs');

// for(noun=0; noun<100; noun++){
//     for(verb=0; verb<100; verb++){
//         memory = fs.readFileSync('input.txt').toString().split(",");
//         //the inputs are the values provided for the noun and verb
//         memory.splice(1, 1, noun);
//         memory.splice(2, 1, verb);

//         output = readOpcode(memory);

//         if (output == 19690720){
//             totalAnswer = (100*noun) + verb;
//             console.log(noun, verb);
//             console.log(totalAnswer);
//         }
//     }
// }

memory = fs.readFileSync('testInput.txt').toString().split(",");
console.log(readParameter(memory));

//i is the instruction pointer - it increases by the number of values in the instruction
function readParameter(memory){
    paddedParamArray = memory[0].toString().padStart(5, '0').split("");
    console.log(paddedParamArray)
    opcode = parseInt(paddedParamArray[3]) + parseInt(paddedParamArray[4])
    firstParamMode = parseInt(paddedParamArray[2])
    secondParamMode = parseInt(paddedParamArray[1])
    thirdParamMode = parseInt(paddedParamArray[0])
    return opcode
}

//i is the instruction pointer - it increases by the number of values in the instruction
function readOpcode(memory){
    i = 0;
    while(i<memory.length){
        memory[i] == 1 ? addingFunction(memory[i+1], memory[i+2], memory[i+3])
            : memory[i] == 2 ? multiplyingFunction(memory[i+1], memory[i+2], memory[i+3])
            : memory[i] == 3 ? storageFunction(memory[i+1])
            : memory[i] == 4 ? outputtingFunction(memory[i+1])
            : i = (memory.length +1);
    }
    return memory[0];
}

function addingFunction(a, b, c){
    newNumber = parseInt(memory[a]) + parseInt(memory[b]);
    memory.splice(parseInt(c), 1, newNumber);
    i = i+4;
}

function multiplyingFunction(a, b, c){
    newNumber = parseInt(memory[a]) * parseInt(memory[b]);
    memory.splice(parseInt(c), 1, newNumber);
    i=i+4;
}

function storageFunction(a){
    //do something to get an input, and save that to integerInput
    memory.splice(parseInt(a), 1, integerInput);
    i=i+2
}

function outputtingFunction(a){
    output = memory[i+1];
    console.log(output) 
    i=i+2
}