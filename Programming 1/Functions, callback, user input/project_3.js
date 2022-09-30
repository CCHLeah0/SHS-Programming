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

function handleColor(answer) {
  console.log(answer)


}

function handleName(answer) {
  console.log('Hello ' + answer + ', it is nice to meet you.')

  userInput.question('What is your favorite color? ', handleColor)
}
userInput.question('What is your name? ', handleName)

  // use this once, at the end of your program
  // calling userInput.question() after this will give an error
  userInput.close()