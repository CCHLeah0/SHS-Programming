/*
  Write a program that asks the user for a noun
  Print to the console this sentence, replacing <NOUN> with the user input:
  I went on a bike ride the other day, and I saw a <NOUN>
*/

const util = require('util')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const question = util.promisify(rl.question).bind(rl)


async function midterm() {
  // await question('Question goes here ')
  const noun = await question('Give me a noun: ')

  
  //  console.log('I went on a bike ride the other day, and I saw a' +noun)
  console.log(`I went on a bike ride the other day, and I saw a ${noun}`)
  // This should be the last line
  rl.close()
}

midterm()