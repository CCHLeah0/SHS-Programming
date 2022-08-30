// generate 2 random numbers between 0 and 1
let Num0 = Math.random()
let Num1 = Math.random()
//store # of success times and times repeated
let successes = 0
let repeated = 0
// store random number
let repeatAttempts = 0

//generate a random number between 5000 and 1000000000
if (repeatAttempts < 5000) {
    repeatAttempts = Math.floor(Math.random() * 1000000001)
}

if (repeated < repeatAttempts) {
    if (Num0** + Num1**) {
        successes++
    }
    repeated++
}
let piIsh = 4 * successes / repeated
console.log("We calculated pi as: " + piIsh, "and this required " + repeated, " iterations.")

//Create 2 random numbers between 0 and 1 
//If the sum of each number squared (x2 + y2) is less than or equal to 1:
//Success
//Repeat the above many times
//Pi is approximately 4 multiplied by the number of successes divided by the number of times repeated
// [repeated also means iterations]
//Print the number of repeats (iterations) and the calculated pi to the console.

// Math.pow(5, 2) == 5^2