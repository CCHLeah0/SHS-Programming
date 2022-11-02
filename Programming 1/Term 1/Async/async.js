// a module is code in a different .js file that someone else wrote
/*
    Types of code:
    1 - Code we wrote
    2- Built in Node/JavaScript
            Math.random()
            Math.floor()
            ect
    3 - Not built in but written by others (module)
            import modules by using "require"
            require('name-of-the-module')
        npm stands for "node package modules"
        npm is the system to get the modules from the internet
*/

// npm install node-fetch@2
let fetch = require('node-fetch')

let websites = [
    'https://titantheatre.com',
    'https://shs.davis.k12.ut.us',
    'https://syracusehigh.org',
    'https://kahoot.it',
    'https://dsd.instructure.com'
]

/*
    promise - data/process that isn't complete
    Promises run asynchronously
    fetch gives a promise
    promise.then() uses a callback to run code when the promise is done
    for loops are synchronous
*/

for(let i = 0; i < websites.length; i++) {
    console.log('start '+ websites[i])
    let promise = fetch(websites[i])
        
    function callback() {
        console.log('done '+ websites[i])
    }

    promise.then(callback)
}

console.log('here')

/*
"await" waits on a promise to finish before moving on
await can only be used in async functions
use the word "async" before "function" to make it async
this is how we turn something asynch into something synchronous
*/
async function fetchWebsite(i) {
    await fetch(websites[i])
}

for (let i = 0; i < websites.length; i++) {
    console.log('async/await start '+websites[i])
    fetchWebsite(i)
    console.log('async/await done ' + websites[i])
}