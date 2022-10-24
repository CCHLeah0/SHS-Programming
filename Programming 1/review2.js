/*
IDE - Integrated Development Environment
  Code editor
  Visual Studio Code
  Develop (write), compile* and run programs
  * in Javascript, we dont compile

Interpreted / Compiled
  Compile - The computer turns a programming language into CPU instructions it can understand

  Interpreted language - There is software that turns a language into CPU instructions in real time (line by line)
    JavaScript (Node.js)
    Python

  Compiled language - Language that is turned into CPU instructions ahead of time
    Java
    C
    C#
    C++

High level / Low level
  High level language - easy for human to understand, generally less efficient
  JavaScript
  Python
  Java

  Low level language - hard for human to understand, closer to hardware and can be more efficient (closer to pure CPU instructions)
  C++
  C#
  C
  Assembly

Programming Style (clean code)
  White space - Spaces, indents, empty lines
    Indent - Can be 2 spaces or 4 spaces, as long as you are consistant (unless Python, then 4 spaces only)
      Indent after {
      Unindent before }
      } should line up with the beginning of the line of the {

    Example:
    if (num < 5) {
        console.log(`Current status: DEFCON ${num}`)
    }

  Identifiers - Naming for something
    Variables - Something that holds/saves data
    Functions - List of instructions. Code that performs a certain task

    Identifiers should use good style - it doesn't matter which so long as you are consistant
      camelCase - Starts with lowercase, Capitalize the first letter of each word. No _
      underscore_case -  everything is lowercase, _ in between words
      skewer-case - (not for JS) everything is lowercase - in between words

Data types
  Primitive - simple type of data in a language
    Boolean
    Number
    String

    Complex/non-primative
    Array
    Function

    const myFunction = () +> {
        //stuff
    }

Creating a variable (aka declaring a variable)
  let - ou can reassign the variable
  const - constant, you cannot reassign the variable

Operators and Operands
  Operator - Something that does something to Operands
    + -  / ** (arithmatic operators)
    < > == >= <= (comparison operators)
    = (assignment operator)
  
  Operand
    Variables
    Literals
      'hello'
      35
      true

Expressions - Code that evaluates to some value
  Using operators and operands together

  2 * 2
  name == 'bacon'
  firstNum / secondNum
  calculatePi(1000) * radius
*/