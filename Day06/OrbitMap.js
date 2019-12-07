fs = require('fs');

input = fs.readFileSync('input.txt').toString().split("\r\n");

i=0
while(i<input.length){
    input.splice(i, 1, input[i].toString().split(")"));
    i++
}

allTheOrbitChainArrays = allTheOrbits(input)
totalOrbits = allTheOrbitChainArrays.reduce(addingFunction);
console.log(totalOrbits)

fullSantaChain = singleOrbitChain(input, "SAN")
fullMyChain = singleOrbitChain(input, "YOU")
totalHops = orbitChecker(fullSantaChain, fullMyChain)
console.log(totalHops)

function orbitChecker(santaChain, myChain){
    for(a=0; a<myChain.length; a++){
        for(b=0; b<santaChain.length; b++){
            if(myChain[a] == santaChain[b]){
                myHops = (a)
                santaHops = (b)
                return (myHops + santaHops)
            }
        }
    }
}

function singleOrbitChain(input, name){
    for(a=0 ; a<input.length; a++){
        if(input[a][1] == name){
            sanIndex = a
        }
    }
    orbited = input[sanIndex][0].toString()
    singleOrbitChainArray = createOrbitChainArray(input, orbited)
    return singleOrbitChainArray
}

function allTheOrbits(input){
    allTheOrbitChainArrays = []
    for(a=0 ; a<input.length; a++){
        orbited = input[a][0].toString()
        orbitChainArray = createOrbitChainArray(input, orbited)
        allTheOrbitChainArrays.push(orbitChainArray.length)
    }
    return allTheOrbitChainArrays
}

function createOrbitChainArray(input, orbited, orbitChainArray){
    orbitChainArray = []
    orbitChainArray.push(orbited)
    b=0;
    while(b<input.length){
        orbiter = input[b][1].toString()
        if(orbited == orbiter){
            orbited = input[b][0].toString()
            orbitChainArray.push(orbited)
            b=-1
        }
        b++
    }
    return orbitChainArray
}

function addingFunction(total, value){
    return total + value;
}


