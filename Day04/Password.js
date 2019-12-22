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

passesThirdTest = [];
for(b=0; b<passesSecondTest.length; b++){
    thirdArray = Array.from(passesSecondTest[b].toString())
    //aaaaab
    if(thirdArray[0] == thirdArray[1] 
        && thirdArray[1] == thirdArray[2]
        && thirdArray[2] == thirdArray[3]
        && thirdArray[3] == thirdArray[4]
        && thirdArray[4] != thirdArray[5]){
            // console.log(thirdArray + " GONE aaaaab")
        } 
    //baaaaa
    else if(thirdArray[1] == thirdArray[2] 
        && thirdArray[2] == thirdArray[3]
        && thirdArray[3] == thirdArray[4]
        && thirdArray[4] == thirdArray[5]
        && thirdArray[0] != thirdArray[1]){
            // console.log(thirdArray + " GONE baaaaa")
        } 
    //aaaabc
    else if(thirdArray[0] == thirdArray[1] 
        && thirdArray[1] == thirdArray[2]
        && thirdArray[2] == thirdArray[3]
        && thirdArray[4] != thirdArray[5]){
            // console.log(thirdArray + " GONE aaaabc")
        } 
    //baaaac
    else if(thirdArray[1] == thirdArray[2] 
        && thirdArray[2] == thirdArray[3]
        && thirdArray[3] == thirdArray[4]){
            // console.log(thirdArray + " GONE baaaac")
        } 
    //bcaaaa
    else if(thirdArray[2] == thirdArray[3] 
        && thirdArray[3] == thirdArray[4]
        && thirdArray[4] == thirdArray[5]
        && thirdArray[0] != thirdArray[1]){
            // console.log(thirdArray + " GONE bcaaaa")
        } 
    //aaabcd
    else if(thirdArray[0] == thirdArray[1]
        && thirdArray[1] == thirdArray[2]
        && thirdArray[3] != thirdArray[4]
        && thirdArray[4] != thirdArray[5]
        && thirdArray[2] != thirdArray[3]){
            // console.log(thirdArray + " GONE aaabcd")
        } 
    //baaacd
    else if(thirdArray[1] == thirdArray[2]
        && thirdArray[2] == thirdArray[3]
        && thirdArray[4] != thirdArray[5]){
            // console.log(thirdArray + " GONE baaacd")
        } 
    //bcaaad
    else if(thirdArray[2] == thirdArray[3]
        && thirdArray[3] == thirdArray[4]
        && thirdArray[0] != thirdArray[1]){
            // console.log(thirdArray + " GONE bcaaad")
        }
    //bcdaaa
    else if(thirdArray[3] == thirdArray[4]
        && thirdArray[4] == thirdArray[5]
        && thirdArray[0] != thirdArray[1]
        && thirdArray[1] != thirdArray[2]
        && thirdArray[2] != thirdArray[3]){
            // console.log(thirdArray + " GONE bcdaaa")
        }
    //aaabbb
    else if(thirdArray[0] == thirdArray[1]
        && thirdArray[1]==thirdArray[2]
        && thirdArray[2] != thirdArray[3]
        && thirdArray[3] == thirdArray[4]
        && thirdArray[4] == thirdArray[5]){
            // console.log(thirdArray + " GONE aaabbb")
        }
    else {
        console.log(thirdArray + " IN")
        passesThirdTest.push(thirdArray)
    }
}
// console.log(passesThirdTest)
console.log(passesThirdTest.length)