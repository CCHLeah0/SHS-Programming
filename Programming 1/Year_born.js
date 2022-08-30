// this now just assumes you havn't had your birthday
let currentYear = 2022
let statedAge = 17
let birthdayThisYear = false

// if age is out of realistic range say yeet
if(statedAge > 122.4493 || statedAge < 0) {
    console.log('YEET')
} else {
    let age = currentYear - statedAge
    if (birthdayThisYear === false) {
        age--
    }
    console.log(age)
}