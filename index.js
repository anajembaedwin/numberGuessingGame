console.log("Welcome! Would you like to play a Guessing Game?")
console.log("------------------------------------------------")
console.log()

let Y = "Yes"
let N = "No"
let accept = prompt(`Type ${Y} or ${N} `)

//condition to check the value of Y and N
if (accept == Y){
  console.log()
  let guess = prompt("Enter a guess between 1 and 2 ")
  console.log()
  console.log(`Your guess is ${guess}`)
} else {
  console.log()
  console.log("We hate to see you leave, come back and play again.")
}

let guessRange = []
let pointsGotten = []


