function calculatePi(repeats) {
    let success = 0
    for (let i = 0; i < repeats; i++) {
    // what goes here?
    num0 = Math.random()
    num1 = Math.random()
    if (num0**2 + num1**2 <= 1) {
        success++
    }
}

return (success * 4) / repeats
}

let pi = calculatePi(1000000)
console.log(pi)