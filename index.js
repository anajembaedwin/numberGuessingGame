let user = prompt(`What is your name?`)
console.clear()
let greeting = `Welcome ${user}! Would you like to play a Guessing Game?`
let underLine = "-"

// console.log(greeting.length)
underLine = underLine.repeat(greeting.length)
console.log(`${greeting}`)
console.log(`${underLine}`)
console.log()



let Y = "Yes"
let N = "No"
let accept = prompt(`Type ${Y} or ${N} `)
let guessRange = []
let pointsGotten = "0"



//function to check the value of Y and N
function promptUser() {
    if (accept == Y){
    console.log()
    let guess = prompt("Enter a guess between 1 and 2 ")
    console.log()
      if (guess >=1 && guess <=2){
        console.log(`Your guess is ${guess}`)
        console.log()
        guessRange.push(guess)
        console.log(guessRange)
      } else {
        console.clear()
        reAttempt()
      }
    
  } else {
    console.log()
    console.log("We hate to see you leave, come back and play again.")
  }
}

promptUser()

//function to run a re-attempt when guess fails
function reAttempt() {
  console.log()
  console.log(`Your guess is invalid, try again please`)
  console.log()
  promptUser()
}

//function to add and update points gotten by player
function addPoints() {
  pointsInNumber = parseInt(pointsGotten, 10)
  // console.log(typeof(pointsInNumber))
  // console.log(pointsInNumber)
}

addPoints()


