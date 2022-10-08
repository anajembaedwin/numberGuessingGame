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



//function block to check the value of Y and N
function CompareValues(){

  if (answerY){
    
    let startRange = prompt(`Enter minimum guess range please: `)
    console.log()
    let stopRange = prompt(`Enter maximum guess range please: `)
    console.log()
    let guess = prompt(`Enter a guess between ${startRange} and ${stopRange} `)
    console.log()

    //arrow function to get range of values and create a random variable
      const randomGuess = (startRange, stopRange) => {
        startRange = Math.ceil(startRange);
        stopRange = Math.floor(stopRange);
        return Math.floor(Math.random() * (stopRange - startRange + 1) + startRange); // The maximum is inclusive and the minimum is inclusive
      }
    
    randomGuess()
    
    
    
      if (guess >=startRange && guess <=stopRange){
        console.log()
        console.log()
        console.log()
        console.log(`Your guess is ${guess}`)
        console.log()
        console.log(`The actual guess is ${randomGuess(startRange, stopRange)}`)
        console.log()
        guessAttempt.push(guess)
        console.log(`This(ese) is(are) your guess(es): ` + guessAttempt)
        console.log()

        if (randomGuess(startRange, stopRange) == guess) {
          console.log(`Your guess is correct`)
          console.log()
          addPoints()
          console.log()
          CompareValues()
        } else {
          console.log(`Your guess is not correct`)
          console.log()
          console.log()
          console.log(`Let us try again`)
          console.log()
          CompareValues()
        }
      } else {
        console.clear()
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
  CompareValues()
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
}


CompareValues()

