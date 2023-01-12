// const means constant
// you cannot change a constant variable to something else
const util = require('util')
const readline = require('readline')

/*
↓↓↓ Ignore this code (for now) ↓↓↓
*/
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const question = util.promisify(rl.question).bind(rl)
/*
  ↑↑↑ Ignore this code (for now) ↑↑↑
*/

// Entire Project 3 redo should be in this function
// await turns a Promise of data into the actual data
// this is a way to create (define) a function that is called an "arrow function"
// => is an arrow
const project3Redo = async () => {
  const name = await question('What is your name? ')
  const color = await question('What is your favorite color? ')

  // Put this here so you don't have to press ctrl + C to end the program
  rl.close()
}

project3Redo()