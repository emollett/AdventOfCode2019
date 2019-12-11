fs = require('fs');

input = fs.readFileSync('testInput.txt').toString().split("\r\n");

i=0
while(i<input.length){
    input.splice(i, 1, input[i].toString().split(""));
    i++
}

// console.log(input)
let asteroidCoordinates = []

//if == # calc the location of the other #'s, then go through those to get rid of duplicates
for(a=0; a<input.length; a++){
    for(b=0; b<input[a].length; b++){
        if(input[a][b] == '#'){
            asteroidCoordinates.push([b, a])
        }
    }
}

// console.log(asteroidCoordinates)
detectAsteroids()

function detectAsteroids(){
    numberDetected = []
    for(e=0; e<asteroidCoordinates.length; e++){
        monitoringAsteroid = asteroidCoordinates.slice(e,e+1)
        tempAsteroidCoordinates = asteroidCoordinates.splice(e,1)
        console.log(asteroidCoordinates)
    
        directions = []
        for(c=0; c<tempAsteroidCoordinates.length; c++){
            // console.log(tempAsteroidCoordinates[c][0])
            // console.log(Number(monitoringAsteroid[0][0]))
            directions.push([tempAsteroidCoordinates[c][0]-monitoringAsteroid[0][0], tempAsteroidCoordinates[c][1]-monitoringAsteroid[0][0]])
        }
        // console.log(directions)
        values = []
        for(d=0; d<directions.length; d++){
            values.push(directions[d][0]/directions[d][1])
        }
        // console.log(values)
        dedupedValues = Array.from(new Set(values))
        // console.log(dedupedValues)
        numberDetected.push(dedupedValues.length)
    }
    // console.log(numberDetected)
}