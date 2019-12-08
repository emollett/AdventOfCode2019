fs = require('fs');

memory = fs.readFileSync('testInput.txt').toString().split(",");

allPermutations = getAllPermutations('01234')

for(i=0; i<allPermutations.length; i++){
    firstInput = allPermutations[i].split("")
    output = readOpcode(memory, firstInput)
    allOutputs = []
    allOutputs.push(output)

}
indexOfLargestOutput = indexOfLargest(allOutputs)
console.log("The largest output is " + allOutputs[indexOfLargestOutput])
console.log("The input that produces the largest output is " + phaseArray[indexOfLArgestOutput])


//i is the instruction pointer - it increases by the number of values in the instruction
function readOpcode(memory, firstInput){
    usedFirstInput = false
    secondInput = 0
    a=0
    i = 0;
    while(i<memory.length){
        paddedParamArray = readParameter(memory[i]);
        opcode = paddedParamArray[3];
        param1 = memory[i+1]
        param2 = memory[i+2]
        param3 = memory[i+3]
        paramMode1 = paddedParamArray[2]
        paramMode2 = paddedParamArray[1]
        paramMode3 = paddedParamArray[0]
        opcode == 1 ? addingFunction(param1, paramMode1, param2, paramMode2, param3, paramMode3)
            : opcode == 2 ? multiplyingFunction(param1, paramMode1, param2, paramMode2, param3, paramMode3)
            : opcode == 3 ? storageFunction(param1, usedFirstInput, a, firstInput, secondInput)
            : opcode == 4 ? outputtingFunction(param1)
            : opcode == 5 ? jumpIfTrueFunction(param1, paramMode1, param2, paramMode2)
            : opcode == 6 ? jumpIfFalseFunction(param1, paramMode1, param2, paramMode2)
            : opcode == 7 ? lessThanFunction(param1, paramMode1, param2, paramMode2, param3)
            : opcode == 8 ? equalsFunction(param1, paramMode1, param2, paramMode2, param3)
            : i = (memory.length +1);
    }
    return memory[0];
}

function readParameter(memory){
    paddedParamArray = memory.toString().padStart(5, '0').split("");
    opcode = parseInt(paddedParamArray[3]) + parseInt(paddedParamArray[4])
    paddedParamArray.splice(3,2,opcode)
    return paddedParamArray
}

function addingFunction(param1, paramMode1, param2, paramMode2, param3, paramMode3){
    //if a is in position mode, it will be at memory[a]. if it is immediate mode, it will be the value of a
    paramMode1 == 0 ? a = parseInt(memory[param1]) : a = parseInt(param1)
    paramMode2 == 0 ? b = parseInt(memory[param2]) : b = parseInt(param2)
    c = parseInt(param3)
    newNumber = a + b;
    memory.splice(c, 1, newNumber);
    i = i+4;
}

function multiplyingFunction(param1, paramMode1, param2, paramMode2, param3, paramMode3){
    paramMode1 == 0 ? a = parseInt(memory[param1]) : a = parseInt(param1)
    paramMode2 == 0 ? b = parseInt(memory[param2]) : b = parseInt(param2)
    c = parseInt(param3)
    newNumber = a * b;
    memory.splice(c, 1, newNumber);
    i=i+4;
}

function storageFunction(param1, usedFirstInput, a, firstInput){
    if(usedFirstInput == false){
        integerInput = firstInput[a]
        usedFirstInput = true
        a++
    } else {
        integerInput = secondInput
        usedFirstInput = false
    }
    integerInput = 5;
    a = parseInt(param1)
    memory.splice(a, 1, integerInput);
    i=i+2
}

function outputtingFunction(param1){
    output = parseInt(memory[param1])
    console.log("The output is " + output) 
    secondInput = output
    i=i+2
}

function jumpIfTrueFunction(param1, paramMode1, param2, paramMode2){
    paramMode1 == 0 ? a = parseInt(memory[param1]) : a = parseInt(param1)
    paramMode2 == 0 ? b = parseInt(memory[param2]) : b = parseInt(param2)
    a != 0 ? i = b : i = i+3
}

function jumpIfFalseFunction(param1, paramMode1, param2, paramMode2){
    paramMode1 == 0 ? a = parseInt(memory[param1]) : a = parseInt(param1)
    paramMode2 == 0 ? b = parseInt(memory[param2]) : b = parseInt(param2)
    a == 0 ? i = b : i = i+3
}

function lessThanFunction(param1, paramMode1, param2, paramMode2, param3){
    paramMode1 == 0 ? a = parseInt(memory[param1]) : a = parseInt(param1)
    paramMode2 == 0 ? b = parseInt(memory[param2]) : b = parseInt(param2)
    a < b ? memory.splice(param3, 1, 1) : memory.splice(param3, 1, 0)
    i=i+4;
}

function equalsFunction(param1, paramMode1, param2, paramMode2, param3){
    paramMode1 == 0 ? a = parseInt(memory[param1]) : a = parseInt(param1)
    paramMode2 == 0 ? b = parseInt(memory[param2]) : b = parseInt(param2)
    a == b ? memory.splice(param3, 1, 1) : memory.splice(param3, 1, 0)
    i=i+4;
}

function getAllPermutations(string) {
    results = [];
  
    if (string.length === 1) {
      results.push(string);
      return results;
    }
  
    for (i = 0; i < string.length; i++) {
      firstChar = string[i];
      charsLeft = string.substring(0, i) + string.substring(i + 1);
      innerPermutations = getAllPermutations(charsLeft);
      for (j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }

    return results;
}

function indexOfLargest(a) {
    return a.indexOf(Math.max.apply(Math, a));
}