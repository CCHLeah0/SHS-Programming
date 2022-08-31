// store blank variables for 2 numbers between 0 and 1; an number between 5000000
let num0 = 0
let num1 = 0
let manyTimes = 0
//store # of success times and times repeated
let successes = 0
let repeated = 0


//generate a random number between 5,000,000 and 1,000,000,000
if (manyTimes <= 5000000) {
    manyTimes = Math.floor(Math.random() * 1000000001)
}

// todo: add new randomly generated numbers every iteration
for (Num0 = Math.random(); Num1 = Math.random(); repeated < manyTimes)  {
    repeated++
    if (Num0**2 + Num1**2 <= 1) {
        successes++
    }
}
let piIsh = 4 * successes / repeated
console.log("We calculated pi as: " + piIsh, "and this required " + repeated, " iterations.")

/*Create 2 random numbers between 0 and 1 
If the sum of each number squared (x2 + y2) is less than or equal to 1:
Success
Repeat the above many times
Pi is approximately 4 multiplied by the number of successes divided by the number of times repeated
 [repeated also means iterations]
Print the number of repeats (iterations) and the calculated pi to the console.
 Math.pow(5, 2) == 5^2 */