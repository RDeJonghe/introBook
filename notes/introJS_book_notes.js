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

  









*/