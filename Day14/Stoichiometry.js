fs = require('fs');

input = fs.readFileSync('testInput.txt').toString().split("\r\n");

reactionsArray = []
for(a=0; a<input.length; a++){
    reaction = input[a].split(" ");
    reactionsArray.push(reaction)
}

for(b=0; b<reactionsArray.length; b++){
    for(c=0; c<reactionsArray[b].length; c++){
        if(reactionsArray[b][c] == "=>"){
            continue
        } else {
            reactionsArray[b].splice(c, 2, [reactionsArray[b][c], reactionsArray[b][c+1]])
        }
        
    }
}

//need a recursive function that takes an input which it looks for in reactionsAray[a][-1], then returns the other constituents which it then runs the function on
console.log(reactionsArray)
