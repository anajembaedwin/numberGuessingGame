let user = prompt(`Please enter your username?`)
console.clear()
let greeting = `Welcome ${user}! Would you like to play a Guessing Game?`
let underLine = `-`

// console.log(greeting.length)
underLine = underLine.repeat(greeting.length)
console.log(`${greeting}`)
console.log(`${underLine}`)
console.log()



let Y = "Yes"
let N = "No"
let accept = prompt(`Type ${Y} or ${N} `)
Y = "[Yy]es"
N = "[Nn]o"
const answerY = accept.match(Y)
const answerN = accept.match(N)
console.log()
let guessAttempt = []
let pointsGotten = "0"


//function block to check and Compare range values
function compareGuess(randomizer){

  if (answerY){
    console.log()
    let startRange = prompt(`Enter minimum guess range please: `)
    console.log()
    let stopRange = prompt(`Enter maximum guess range please: `)
    console.log()
    let guess = prompt(`Enter a guess between ${startRange} and ${stopRange}: `)
    
    startRange = Number(startRange)
    stopRange = Number(stopRange)
    guess = Number(guess)
    
    let min = Math.ceil(startRange);
    let max = Math.floor(stopRange);

    randomizer = Math.floor(Math.random() * (max - min + 1)) + min
    randomizer = Number(randomizer)
        
    
      if (guess >=startRange && guess <=stopRange){
        console.log()
        console.log()
        console.log()
        console.log(`Your guess is: ${guess}`)
        console.log()
        console.log(`The actual guess is: ${randomizer}`)
        console.log()
       

        if (randomizer === guess) {
          console.log(`Your guess is correct`)
          console.log()
          guessAttempt.push(guess)
          guessList()
          console.log()
          addPoints()
          console.log()
          console.log(`Let us play again`)
          compareGuess()
        } else {
          console.log(`Your guess is not correct`)
          console.log()
          console.log()
          console.log()
          console.log(`Let us try again`)
          console.log()
          compareGuess()
        }
      } else {
        reAttempt()
      }
    
  } else {
    console.log()
    console.log(`We hate to see you leave, come back and play again.`)
  }
}


//function to run a re-attempt when guess fails
function reAttempt() {
  console.log()
  console.log(`Your guess is invalid, try again please`)
  console.log()
  compareGuess()
}

function guessList() {
  if (guessAttempt.length < 2) {
    console.log(`This is your guess: ${guessAttempt} `)
  } else {
    console.log(`These are your guesses: ${guessAttempt} `)
  }
}

//function to add and update points gotten by player
function addPoints() {
  pointsInNumber = parseInt(pointsGotten, 10)
  // console.log(typeof(pointsInNumber))
  // console.log(pointsInNumber)
  for (i=0; i<guessAttempt.length; i++) {
    pointsInNumber = guessAttempt.length
    
  }
  console.log(`Your guess point is ${pointsInNumber}`)
  console.log()
  console.log()
  if (pointsInNumber = 1) {
    newLevel()
  }
}

function newLevel() {
  console.log()
  let newGreeting = `Welcome to level ${guessAttempt.length + 1}`
  console.log(newGreeting)
  underLine = `-`
  underLine = underLine.repeat(newGreeting.length)
  console.log(underLine)
  pointsInNumber = guessAttempt.length
}
compareGuess()

