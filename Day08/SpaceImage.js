fs = require('fs');

input = fs.readFileSync('input.txt').toString().split("");

imageWidth = 25
imageHeight = 6
pixelsInLayer = imageWidth*imageHeight

layerArray = []
for(i=0; i<input.length; i++){
    layer = []
    for(a=0; a<pixelsInLayer; a++){
        pixel = input.pop()
        layer.unshift(pixel)
    }
    layerArray.unshift(layer)
}

imageLine=[]
for(i=0; i<pixelsInLayer; i++){
    for(a=0; a<layerArray.length; a++){
        if(layerArray[a][i] == 0){
            imageLine.push(0)
            break
        } else if(layerArray[a][i] == 1){
            imageLine.push(1) 
            break
        }
    }
}
console.log(imageLine)

imageAssembled=[]
for(i=0; i<imageLine.length; i++){
    line=[]
    for(a=0; a<imageWidth; a++){
        pixel = imageLine.pop()
        line.unshift(pixel)
    }
    imageAssembled.unshift(line)
}
console.log(imageAssembled)

zeroArray = []
oneArray = []
twoArray = []
for(i=0; i<layerArray.length; i++){
    zero = 0
    one = 0
    two = 0
    for(a=0; a<pixelsInLayer; a++){
        layerArray[i][a] == 0 ? zero ++
        : layerArray[i][a] == 1 ? one ++
        : layerArray[i][a] == 2 ? two ++ 
        : console.log("none here")
    }
    zeroArray.push(zero)
    oneArray.push(one)
    twoArray.push(two)
}

indexOfLeastZeros = indexOfSmallest(zeroArray)
console.log("The number of ones in the layer with least zeros is " + oneArray[indexOfLeastZeros])
console.log("The number of twos in the layer with least zeros is " + twoArray[indexOfLeastZeros])
console.log("QA answer " + (oneArray[indexOfLeastZeros] * twoArray[indexOfLeastZeros]))

function indexOfSmallest(a) {
    return a.indexOf(Math.min.apply(Math, a));
   }