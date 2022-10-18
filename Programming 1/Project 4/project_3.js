/*
  ↓↓↓ Ignore this code (for now) ↓↓↓ 
*/
const readline = require('readline')
const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
/*
  ↑↑↑ Ignore this code (for now) ↑↑↑
*/
let finalAns = "Hello, "

// ask user for name and add next part of sentance
function handleName(answer) {
  finalAns = finalAns + answer + ". Your favorite color is "
  userInput.question('What is your favorite color? ', handleColor)
}
userInput.question('What is your name? ', handleName)

// ask user favorite color and add consistant next part of sentance
function handleColor(answer) {
  finalAns = finalAns + answer + " and"

  userInput.question("Do you like programming?", handleCode)
}

// ask user if they like programming, write next part of sentance based on their answer, print it and end
function handleCode(answer){
  if (answer == "yes") {
    console.log(finalAns, "you like programming.")
  } else if (answer == "no") {
    console.log(finalAns, "you don't like programming.")
  } else {
    console.log(finalAns, "I don't know if you like programming.")
  }

  // use this once, at the end of your program
  // calling userInput.question() after this will give an error
  userInput.close()
}



