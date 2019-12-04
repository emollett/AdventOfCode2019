lowerRange = 357253
upperRange = 892942

i = lowerRange
passesFirstTest = [];
while(i<=upperRange){
    array = Array.from(i.toString())
    if(array[0] == array[1] || array[1] == array[2] || array[2] == array[3] || array[3] == array[4] || array[4] == array[5] || array[5] == array[6]){
        passesFirstTest.push(i)
    }
    i++;
}


a = 0
passesSecondTest = [];
while(a<passesFirstTest.length){
    secondArray = Array.from(passesFirstTest[a].toString())
    if(secondArray[0] <= secondArray[1] 
        && secondArray[1] <= secondArray[2] 
        && secondArray[2] <= secondArray[3] 
        && secondArray[3] <= secondArray[4]
        && secondArray[4] <= secondArray[5]){
            passesSecondTest.push(passesFirstTest[a])
        }
    a++;
}

console.log(passesSecondTest.length)