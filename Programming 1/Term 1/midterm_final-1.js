const util = require('util')
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const question = util.promisify(rl.question).bind(rl)

async function trainReport() {
  // Create variables here ↓
  car_num = 0
  train_sum = 0

  // A while loop is a type of loop that keeps repeating as long as the expression in the parentheses is true
  // This loop will keep repeating until the user inputs "end"
  while (true) {
    const input = await question('What is the weight? ')
     // This ends the loop
    if (input == 'end') {
      break
    }

    // Keeps from counting accidental hitting of return key as a train car
    if (input == "") {
      // test 2
    } else {
    // Convert user input to a number
    const weight = Number(input)

    // Do calculations here ↓
    car_num ++
    train_sum = train_sum + weight
    }

  }

// Print the report here ↓
  console.log(`Total Weight: ${train_sum}.`)
  console.log( `The train had ${car_num} cars.`)

// This should be the last line of the function
  rl.close()
}

trainReport()