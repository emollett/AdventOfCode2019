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

// partOne()
detectpart2Asteroids()

//part 2 - from the location (17, 23) pick off each other asteroid whilst swinging clockwise
// work out the angle of each of the other points in relation to the monitor, and its distance, and its location
// order by angle then by distance. 
//make a temporary array where you remove any with the same angle - count how many, then do the same with the ones you removed

function detectpart2Asteroids(){
    numberDetected = []
    monitoringAsteroid = [11, 13]
    tempAsteroidCoordinates = [...asteroidCoordinates]
    tempAsteroidCoordinates.splice(tempAsteroidCoordinates.indexOf(monitoringAsteroid),1)
    console.log(tempAsteroidCoordinates.length)
    let megaArray = []
    for(a=0; a<tempAsteroidCoordinates.length; a++){
        direction = [tempAsteroidCoordinates[a][0]-monitoringAsteroid[0], tempAsteroidCoordinates[a][1]-monitoringAsteroid[1]]
        distance = Math.sqrt(Math.pow(direction[0], 2) + Math.pow(direction[1], 2))
        angle = Math.atan2(direction[1], direction[0])* 180 / Math.PI
        megaArray.push([tempAsteroidCoordinates[a], distance, angle])
    }
    // console.log(megaArray)
    //now order by degress then distance
    var sortedArray = megaArray.sort(function(a, b) {
        if (a[2] == b[2]) {
          return a[1] - b[1];
        }
        return b[2] - a[2];
      });

    console.log(sortedArray)
}

function detectAsteroids(){
    numberDetected = []
    for(e=0; e<asteroidCoordinates.length; e++){
        monitoringAsteroid = asteroidCoordinates.slice(e,e+1)
        tempAsteroidCoordinates = [...asteroidCoordinates]
        tempAsteroidCoordinates.splice(e,1)
    
        getDirection(tempAsteroidCoordinates)
        getAngle(directions)

        dedupedAngles = Array.from(new Set(angles))
        numberDetected.push(dedupedAngles.length)
    }
    return numberDetected
}

function partOne(){
    numbersDetected = detectAsteroids()
    highestNumberDetected = [...numbersDetected]
    highestNumberDetected.sort(function(a, b){return b-a});
    console.log(highestNumberDetected[0])
    index = numbersDetected.indexOf(highestNumberDetected[0])
    console.log(asteroidCoordinates[index])
}

function getDirection(tempAsteroidCoordinates){
    directions = []
    for(c=0; c<tempAsteroidCoordinates.length; c++){
        directions.push([tempAsteroidCoordinates[c][0]-monitoringAsteroid[0][0], tempAsteroidCoordinates[c][1]-monitoringAsteroid[0][1]])
    }
}

function getAngle(directions){
    angles = []
    for(d=0; d<directions.length; d++){
        angles.push(Math.atan2(directions[d][1], directions[d][0]))
    }
}

