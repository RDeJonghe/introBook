/*
Notes for the Introduction to Programming with JavaScript book.
Notes are organized by chapter, can search by chapter name
  Introduction
  Preparations
  The Basics
  Variables
  Input/Output
  Functions
  Flow Control
  Loops & Iterating
  Arrays
  Objects
  More Stuff

INTRODUCTION
  No notes

PREPARATIONS
  No notes
*/

/*
THE BASICS
  - Every type that is not a primitive type is an object type.

  - Undefined is the absence of a value
  - When a function doesn't have anything specific to return, it will return undefined.
  - console.log('Hello, World!') is an example of that, it consoles but returns undefined.

  - Null is similar to undefined but it is an intentional absence of a value
  - Have to explicitly use null.

  - + - * / % are all called operators
  - % technically not modulo in JS, because of negative numbers. It's a remainder operator

  - NaN signals an illegal operation, think of it as a numeric value that signals an illegal operation
  - There is both Infinity and -Infinity : mostly show up when dividing by 0
  
  - string concatanation '1' + '2' will give string of '12'
  - '1' + 2 is also '12' because of implicit type coercion
  - implicit coercion is JS choosing to do this

  - explicit type coercion we choose to coerce values
  - This is especially needed with + since with strings + means concatenate and with numbers it
  - will resort to implicit coercion
  - Number function coerces a string to a number so Number('1') will coerce it to a number 1
  - can also use parseInt() to coerce a string to a number. parseInt will stop when it finds a
  - value that isn't a number so parseInt('12kdeje') will give 12
  - parseFloat() does the same thing as parseInt() but with decimals
  - coerce numbers to strings with String()

  - expressions = anything JS can evaluate to a value (even if the value is undefined or null)
  - almost everything we write in JS is an expression

  - difference between returning a value and displying it console.log() prints/displays something
  - but doesn't return it. So console.log() returns undefined.
  - example of output and return vallue are different concepts

  - statements - variable declaration is an example of a statement
  - statements - kinda like a command for the JS engine
  - let foo = 42 (let foo is statement, 42 is expression)
  - 'statement' is a term that is used loosely sometimes
  - a single line of code is sometimes referred to as a statement

VARIABLES

  - a variable is a named area of a program's memory space where the program can store data

  - identifiers is a term that can be applied to many different names like variable names, property names,
    function names, etc.

  - some object properties are variables, the ones on the global object are variables

  - you initialize a variable when you give it a value. 

  - declarations always return undefined, even if they have an initial value

  - variables aren't deeply-linked to each other (I think this is because they point to different places
    in memory). So if a variable is changed and other variables have this same value, the other variables
    won't be automatically changed
  
  - Scope of a variable determines where it is available in the program
  - block scope is inside of {} curly braces (but not all curly braces, not object literals for example)
  - block usually refers to executable code between curly braces including curly braces of functions
  - blocks can appear by themselves
    {
      // this is a block
      let foo = 42;
      console.log(foo);
    }
  - blocks are if... else, while, do... while, for, switch, try... catch. Technically functions aren't
    blocks but they can be considered as such for practical purposes
  - block scoped variables are not available outside of the block

  - looks like there is a thing as function scope, not discussed in detail. Just to be aware

INPUT/OUTPUT

    - Computers take input, perform an action, provide output
    - most basic is command line input from keyboard and providing output
    - input/output cycle is at the heart of every computer program
    













*/