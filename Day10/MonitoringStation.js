fs = require('fs');

input = fs.readFileSync('input.txt').toString().split("\r\n");

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
numbersDetected = detectAsteroids()
// console.log(numbersDetected)
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
        // console.log(monitoringAsteroid)
        // console.log(tempAsteroidCoordinates)
    
        directions = []
        for(c=0; c<tempAsteroidCoordinates.length; c++){
            // console.log(tempAsteroidCoordinates[c][1])
            // console.log(Number(monitoringAsteroid[0][0]))
            directions.push([tempAsteroidCoordinates[c][0]-monitoringAsteroid[0][0], tempAsteroidCoordinates[c][1]-monitoringAsteroid[0][1]])
        }
        // console.log(directions)
        values = []
        for(d=0; d<directions.length; d++){
            //current issue is here -> -1/-2 is the same as 1/2 - need to give directionality
            values.push(Math.atan2(directions[d][1], directions[d][0]))
        }
        // console.log(values)
        //there is another issue here, with sets -0 is the same as 0, I need them not to be
        dedupedValues = Array.from(new Set(values))
        // console.log(dedupedValues)
        numberDetected.push(dedupedValues.length)
    }
    return numberDetected

}