fs = require('fs');

input = fs.readFileSync('input.txt').toString().split("\r\n");

pack=[]
for(i=0; i<10007; i++){
    pack.push(i)
}

// console.log(input)

for(j=0; j<input.length; j++){
    // console.log(input[j])
    if(input[j].toString().includes("stack")){
        pack.reverse()
        // console.log(pack)
    }
    else if(input[j].toString().includes("cut")){
        instruction = input[j].split(" ")
        number = parseInt(instruction[instruction.length-1])
        cut(pack, number)
        // console.log(pack)
    } else {
        instruction = input[j].split(" ")
        increment = parseInt(instruction[instruction.length-1])
        dealIncrement(pack, increment)
        // console.log(pack)
    }
}
console.log(pack)
console.log(pack.indexOf(2019))

function dealIncrement(pack, increment){
    // console.log(increment)
    newPack = [...pack]
    pointer = 0
    for(k=0; k<newPack.length; k++){
        pack.splice(pointer, 1, newPack[k])
        if(pointer<=pack.length-increment){
            pointer = pointer + increment
        } else {
            pointer = increment - (pack.length - pointer)
        }
    }
    // console.log(pack)
}

function cut(pack, number){
    if(number > 0){
        cutCards = pack.slice(0, number)
        pack.splice(0, number)
        for(k=0; k<cutCards.length; k++){
            pack.push(cutCards[k])
        }
    }else if(number < 0){
        cutCards = pack.slice(number)
        pack.splice(number)
        for(k=cutCards.length-1; k>=0; k--){
            pack.unshift(cutCards[k])
        }
    }
}