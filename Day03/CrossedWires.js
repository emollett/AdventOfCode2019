fs = require('fs');

input = fs.readFileSync('input.txt').toString().split("\r\n");

input.splice(0, 1, input[0].toString().split(","));
input.splice(1, 1, input[1].toString().split(","));
// console.log(input[0])
// console.log(input[1])


//wireVectorsA and wireVectorsB
wireVectorsA = vectorDirections(input[0]);
wireVectorsB = vectorDirections(input[1]);
// console.log(wireVectorsA)
// console.log(wireVectorsB)


coordArrayA = allTheCoordinates(wireVectorsA);
coordArrayB = allTheCoordinates(wireVectorsB);
console.log(coordArrayA);
console.log(coordArrayB);


matchingValues = compareArrays(coordArrayA, coordArrayB);
console.log(matchingValues);

smallestDistance = smallestDistance(matchingValues)
console.log("The distances where they intersect are " + smallestDistance)

function vectorDirections(wire){
    wireVectors = [[0,0]]
    i=0;
    while(i<wire.length){
        wire[i].charAt(0) == "R" ? wireVectors.push([parseInt(wire[i].slice(1)), 0])
        : wire[i].charAt(0) == "L" ? wireVectors.push([-(wire[i].slice(1)), 0])
        : wire[i].charAt(0) == "U" ? wireVectors.push([0, parseInt(wire[i].slice(1))])
        : wireVectors.push([0, -(wire[i].slice(1))])
        i++;
    }
    return wireVectors
}

function allTheCoordinates(wireVectors){
    coordArray = [[0,0]]
    i=0;
    coordA = 0;
    coordB = 0;
    while(i<wireVectors.length){
        a = wireVectors[i][0];
        b = wireVectors[i][1];
        aa=0;
        bb=0;
        if(a>0 && b>0){
            while(aa<a){
                while(bb<b){
                    coordArray.push([coordA, coordB])
                    coordB++;
                    bb++;
                }
                aa++;
                coordA++;
            }
        }
        else if(a>0 && b<0){
            while(aa<a){
                while(bb>b){
                    coordArray.push([coordA, coordB])
                    bb--;
                    coordB--;
                }
                aa++;
                coordA--;
            }
        }
        else if(a<0 && b<0){
            while(aa>a){
                while(bb>b){
                    coordArray.push([coordA, coordB])
                    bb--;
                    coordB--;
                }
                aa--;
                coordA--;
            }
        }
        else if(a<0 && b>0){
            while(aa>a){
                while(bb<b){
                    coordArray.push([coordA, coordB])
                    bb++;
                    coordB++;
                }
                aa--;
                coordA--;
            }
        }
        else if(a==0 && b>0){
            while(bb<b){
                coordArray.push([coordA, coordB])
                bb++;
                coordB++;
            }
        }
        else if(a==0 && b==0){
            console.log("all 0");
        }
        else if(a<0 && b==0){
            while(aa>a){
                coordArray.push([coordA, coordB])
                aa--;
                coordA--;
            }
        }
        else if(a==0 && b<0){
            while(bb>b){
                coordArray.push([coordA, coordB])
                bb--;
                coordB--;
            }
        }
        else if(a>0 && b==0){
            while(aa<a){
                coordArray.push([coordA, coordB])
                aa++;
                coordA++;
            }
        }    
        i++;
    }
    return coordArray;
}

function compareArrays(coordArrayA, coordArrayB){
    var coordObjectA = {};
    for(var i = 0 ; i < coordArrayA.length; i += 1) {
        coordObjectA[coordArrayA[i]] = i;
    }
    x=0
    // console.log(coordObjectA);
    matchingValues=[];
    while(x<=coordArrayB.length){
        var coordB = coordArrayB[x];
        if(coordObjectA.hasOwnProperty(coordB)) {
            matchingValues.push(coordArrayB[x]);
        }
        x++
    }
    return matchingValues;
}

function smallestDistance(matchingValues){
    a=0
    while(a<matchingValues.length){
        x = matchingValues[a][0];
        y = matchingValues[a][1];
        distance = Math.abs(x) + Math.abs(y);
        matchingValues.splice(a, 1, distance);
        a++
    }
    matchingValues.sort(function(a, b){return a-b});
    return matchingValues;
}
