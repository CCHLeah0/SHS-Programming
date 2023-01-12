// <found online>
// program to shuffle the deck of cards 
// declare card elements
const suits = ["Spades", "Diamonds", "Club", "Heart"];
const values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
]; // values

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

console.log('The first five cards are:');

// display 5 results
for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}

// random numbers
function randomIntFromInterval(min, max) { // min and max included 
    // always input 
    return Math.floor(Math.random() * (max - min) + min)
} //randomIntFromInterval
// </found online>

const rndInt = randomIntFromInterval(0, 51)
console.log(rndInt)

// dealer?
let dealer = new Object()

let player = new Object(hand)

function hit(dealer, player) {
    if (playerHit = True) {
        //give player a random card from remaining deck
    }
} // Hit
