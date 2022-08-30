// generate 2 random numbers between 0 and 1
let Num0 = Math.random()
let Num1 = Math.random()
//store # of success times and times repeated
let successes = 0
let repeated = 0
//generate random number for the times repeated
let repeatAttempts = 0

if (repeatAttempts < 5555) {
    repeatAttempts = Math.floor(Math.random() * 10001)
}

if (repeated < repeatAttempts) {
    if (Num0^2 + Num1^2 <= 1) {
        successes++
    }
    repeated++
}
let piIsh = 4 * successes / repeated
console.log("Pi is: " + piIsh, "and this required" + repeated, "attempts.")

//Create 2 random numbers between 0 and 1 

//If the sum of each number squared (x2 + y2) is less than or equal to 1:

//Success

//Repeat the above many times

//Pi is approximately 4 multiplied by the number of successes divided by the number of times repeated

//Print the number of repeats (iterations) and the calculated pi to the console.