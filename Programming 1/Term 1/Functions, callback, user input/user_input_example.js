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

function printGreeting(answer) {
 console.log('Hello ' + answer + ', it is nice to meet you.')
}

userInput.question('What is your name? ', printGreeting)