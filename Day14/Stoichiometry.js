fs = require('fs');

input = fs.readFileSync('testInput.txt').toString().split("\r\n");

// console.log(input)

reactionsArray = []
for(a=0; a<input.length; a++){
    reaction = input[a].split(/,*\s/);
    reactionsArray.push(reaction)
}
// console.log(reactionsArray)

for(b=0; b<reactionsArray.length; b++){
    for(c=0; c<reactionsArray[b].length; c++){
        if(reactionsArray[b][c] == "=>"){
            continue
        } else {
            reactionsArray[b].splice(c, 2, [reactionsArray[b][c], reactionsArray[b][c+1]])
        }
        
    }
}

// console.log(reactionsArray)

calculateORE()

function calculateORE(){
    ingredients = []
    let product = "FUEL"
    //find the recipe that has the product as -1
    findLocationOfProduct(product);

    // get the ingredients - everything up to =>
    for(j=0; reactionsArray[locationOfProduct].length; j++){
        if(reactionsArray[locationOfProduct][j] == "=>"){
            break
        }
        ingredients.push(reactionsArray[locationOfProduct][j])
    }

    // console.log(ingredients)
    
    for(k=0; ingredients.length; k++){
        let product = ingredients[k][1]
        findLocationOfProduct(product)
    }

    
    //if one of the ingredients is ORE do something
    //if it isn't, this function needs to be run again
}

function findLocationOfProduct(product){
    console.log("The product is " + product)
    for(i=0; i<reactionsArray.length; i++){
        if(reactionsArray[i][reactionsArray[i].length-1][1] == product){
            locationOfProduct = i
        }
    }
    console.log("The product is at location " + locationOfProduct)
    return locationOfProduct
}