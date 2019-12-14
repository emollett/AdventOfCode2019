fs = require('fs');

input = fs.readFileSync('testInput.txt').toString().split("\r\n");

i=0
while(i<input.length){
    input.splice(i, 1, input[i].toString().split(""));
    i++
}

let asteroidCoordinates = []

for(a=0; a<input.length; a++){
    for(b=0; b<input[a].length; b++){
        if(input[a][b] == '#'){
            asteroidCoordinates.push([b, a])
        }
    }
}

numbersDetected = detectAsteroids()
highestNumberDetected = [...numbersDetected]
highestNumberDetected.sort(function(a, b){return b-a});
console.log(highestNumberDetected[0])
index = numbersDetected.indexOf(highestNumberDetected[0])
// console.log(index)
console.log(asteroidCoordinates[index])

function detectAsteroids(){
    numberDetected = []
    for(e=0; e<asteroidCoordinates.length; e++){
        monitoringAsteroid = asteroidCoordinates.slice(e,e+1)
        tempAsteroidCoordinates = [...asteroidCoordinates]
        tempAsteroidCoordinates.splice(e,1)
    
        directions = []
        for(c=0; c<tempAsteroidCoordinates.length; c++){
            directions.push([tempAsteroidCoordinates[c][0]-monitoringAsteroid[0][0], tempAsteroidCoordinates[c][1]-monitoringAsteroid[0][1]])
        }

        values = []
        for(d=0; d<directions.length; d++){
            values.push(Math.atan2(directions[d][1], directions[d][0]))
        }

        dedupedValues = Array.from(new Set(values))
        numberDetected.push(dedupedValues.length)
    }
    return numberDetected
}