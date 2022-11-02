// Data Types

/* 
    The type that a variable is
    Boolean
    Number
    String
*/

// Boolean
/*
    false           True
    0               1
    off             on
    no              yes
    no current      current (electricity)
    disconnected    connected
    open            closed 

    bool is an abbreviation for boolean
*/

// dont actually use bool as a variable name
let bool = true
bool = false
console.log(typeof bool)

// Number
/*
    Integer - Whole number.  No demical part/fraction part
    Examples: 7, 42, -42

    Float - Number with a decimal.  The decimal point "floats" inside of an int
    Examples: 74983.5074, 749.835074

    Double - Double precision float number. 

    Binary - 0's and 1's.  It is how data is stored in computers.  Dinary digit "bit"

    // a nibble can display up to 15
    0000 - 0
    0001 - 1
    0010 - 2
    0011 - 3
    0100 - 4
    0101 - 5
    0110 - 6
    0111 - 7
    1000 - 8
    1001 - 9
    1010 - 10
    1011 - 11
    1100 - 12
    1101 - 13
    1110 - 14
    1111 - 15
    
    32 bit
    11111111111111111111111111111111 - 4,294,967,295

    64 bit
    1111111111111111111111111111111111111111111111111111111111111111 - 9,223,372,036,854,775,807
*/
let num = 500.12345
console.log(typeof num)

// how to convert floats/doubles into integers
Math.round(num) // normal rounding
Math.floor(num) // always round down
Math.ceil(num) // always round up

// String

/*
    String - String together characters to create words, sentences, text, ect.

    Char - Abbreviation for character. Single letter, number, symbol
*/

// dont use string for var name
// backslash in a string "escapes" a character.  Escaping means using a character that is usually code as part of the string.
let string = 'I hope you\'re having a nice day'
