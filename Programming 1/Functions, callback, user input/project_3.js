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

let usrName =  prompt("What is your name?", "User Name")
let usrFavColor = prompt("What is your favorite color?", "ROY G BIV")
let usrLikeCode = prompt("Do you like programming?", "yes/no")

if (usrLikeCode == "yes") {
    console.log("Hello, ", usrName, "Your favorite color is ", usrFavColor, ", and you like programming.")
} else if (userLikeCode == "no") {
    console.log("Hello, ", usrName, "Your favorite color is ", usrFavColor, ", and you don't like programming.")
} else {
    console.log("Hello, ", usrName, "Your favorite color is ", usrFavColor, ", and I don't know if you like programming.")
}