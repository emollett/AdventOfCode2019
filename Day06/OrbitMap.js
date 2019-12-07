fs = require('fs');

input = fs.readFileSync('input.txt').toString().split("\r\n");

i=0
while(i<input.length){
    input.splice(i, 1, input[i].toString().split(")"));
    i++
}

allTheOrbitChainArrays = []
for(a=0 ; a<input.length; a++){
    orbited = input[a][0].toString()
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
    allTheOrbitChainArrays.push(orbitChainArray.length)
}

totalOrbits = allTheOrbitChainArrays.reduce(addingFunction);

function addingFunction(total, value){
    return total + value;
}

console.log(totalOrbits)
