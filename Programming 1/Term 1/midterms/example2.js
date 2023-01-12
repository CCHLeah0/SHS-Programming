/*
  Write a loop that asks for user input 5 times
  Convert the user input to number
  At the end of the program, print the sum of the numbers
*/

const util = require('util')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const question = util.promisify(rl.question).bind(rl)


async function midterm() {
  // Convert user input to a number
  sum = 0
  for (let i = 0; i < 5; i++) {
    const number = Number(await question('Give me a number: '))
    sum = sum + number
  }
  // This should be the last line
  rl.close()

}

midterm()

