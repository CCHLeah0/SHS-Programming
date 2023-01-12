function fnWithCallback(callback, x1, x2) {
  return callback(x1, x2)
}

function addSquares(x1, x2) {
  return x1 ** 2 + x2 ** 2
}

function minusSquareRoots(x1, x2) {
  return Math.sqrt(x1) - Math.sqrt(x2)
}

let number1 = Math.random()
let number2 = Math.random()
let result1 = fnWithCallback(addSquares, number1, number2)
let result2 = fnWithCallback(minusSquareRoots, number1, number2)

console.log(result1)
console.log(result2)