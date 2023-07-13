let backpack = []

backpack.push("pokeball")
backpack.push("potion")
backpack.push("pokedollars")

//backpack.shift()
backpack.splice(0,1)// these both do the same thing

let foundItem ="waterstone"
backpack.push(foundItem)// adds item to the end of the array

backpack.pop()// removes last item from the array 

//console.log(backpack.length)
backpack.push('greatball', 'antidote', 'revive')// add items after a stop to the pokecenter

//let satchel = backpack.splice(3,2)  // has a seperate back for medicine

// console.log(satchel)

// if(backpack.length >= 3){
//     for(let i =0; i < 3; i++){
//         console.log(backpack[i])
    
//     }
// }else {
//     for(let i =0; i < backpack.length; i++){
//         console.log(backpack[i])
    
//     }
// }
let guessMe = 54

while (guessMe < 100) {
    console.log('-------', guessMe)
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25 
        console.log('guessMe is divisible by 4 or 5, we added 25')
    } else if (guessMe % 3 === 0) {
        guessMe -= 27
        console.log('guessMe is divisible by 3, we subtracted 27')
    } else {
        guessMe += 3
        console.log('guessMe hit else so we added 3')
    }
    guessMe += 22
    console.log(`Added 22, guessMe is now: ${guessMe}`)
}
console.log('final value', guessMe)
