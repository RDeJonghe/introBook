/*
Notes for the Introduction to Programming with JavaScript book.

- npm is used with node in input/output and functions. Shows up in exercises here. See about installing npm

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

FUNCTIONS

    - allow you to execute code multiple times
    - parameters are between (), arguments are the values that are put in there
    - In JS function names and parameter names are both considered variables
    - Parameters are local variables becasue they only exist within the code block of the function

    - invocation and invoke is the same as calling and call. Both used to say call a function
    - Functions can return values with the return statement
    - by default (without return keyword) functions will return undefined
    - the caller is the code that calls the function

    - predicates = functions that return boolean true/false

    - can create nested function - but not a lot of info in the book on this. Not sure of use.
    - global scoped variables are discouraged, can lead to bugs, limit scope of variables.

    - methods are functions
    - method invocation is the syntax with . and then method name and () so .toUpperCase() is method invocation
    - can also make your own methods and call them with that syntax

    - Mutating the Caller - when a method permanently alters the object that invokes the method, 
    - Another way to say mutating is destructive
    - Functions can also be written so they mutate the argument.
    - So Functions and Methods can permanently change the caller, but not always

    - immutable: primitive values (values never change), operations on these always return new values
    - mutable: arrays and objects, operations on these may return a new value or may mutate the data, can go either way depending
    - on use.

    - JS is both pass by reference and pass by value
      - pass by value when dealing with primitive values
      - pass by reference when dealing with arrays and objects

    - function composition: JavaScript lets us use a function call as an argument to another function
    - good example, can use functions inside as arguments
        function add(a, b) {
            return a + b;
          }

        function subtract(a, b) {
            return a - b;
          }


        function times(num1, num2) {
            return num1 * num2;
          }

        console.log(times(add(20, 45), subtract(80, 10)));
    
    - With function declarations (the standard way of setting them up with the funciton key word) you can call the function
      before it is declared. (I think this is called hoisting)
    
    - function expression is when a function is saved to a variable (I think this is also called anonymous function)
    - function expressions cannot be hoisted, it has to appear in the program first, then it can be called

    - ALL JS functions are objects

    - function declaration = the function keyword is first, this is the standard way of writing it
    - function expression = does not have the function keyword first

    - The Call Stack
      - help JS keep track of function execution
      - it works like a stack of books, you can put a new book on top, or remove topmost book
      - the call stack puts information about current function on top of the stack, then removes it when function returns
      - call stack has one initial item, called a stack frame (this is also sometimes called the "main" function), this is used
        to keep track of what part of main program it is working on
      - Stack is a "last in, first out structure"
      
FLOW CONTROL
  
  - For if statements you can omit curly braces if it has a single statement/expression
  - but this is generally bad practice since the {} make code easy to understand
  - example is if(x === 3) console.log('x is three')

  - expressions or values that an operator uses are called its operands
  - so 4 < 5 left operand is 4, right operand is 5

  - short circuit evaluation: &&, || these use short circuit evaluation
  - once a determination is made and it can be true/false, JS short circuits it, doesn't need
  - to check rest of expression if it's already able to determine true/false

  - Operator precedence:
    1. () parenthesis always go first  
    2. <=, <, >, >= - Comparison
    3. ==, != - Equality
    4. && - Logical AND
    5. || - Logical OR

  - ternary expressions
  - we can treat a ternary expression as a value (it doesn't do a return, it has a value)
  - we can assign a ternary expression to a variable, and also pass it in as an argument

  - switch statements
  - fall throughs are when you don't want to use break, and you want it to fall through to the next case

LOOPS AND ITERATING

  - loops execute the code block as long as the condition remains truthy
  - increment and decrement operators ++ --
    - these can also go in front ++ num, or -- num, not just after. This has a minor affect on the order
    - of how it's done
    - generally use += and -= instead, better practice.
    - only place ++ -- really is used is in a for loop to ++ the index
    - for (var index = 0; index < 5; ++index) look here how it is ++index, instead of index++, order makes a difference I think

  - Loop over arrays is very common, go over each element and perform a task/action
  - have to be able to access and manipulate array elements with loops

  - continue keyword
  - allows you to skip certain elements in an array
  - think that it continues and skips over it.
  - a negated if conditional can work the same as continue keyword
  - these two below are the same in function
      1.    
        let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
        let upperNames = [];

        for (let index = 0; index < names.length; index += 1) {
          if (names[index] === 'Naveed') {
            continue;
          }
        
          let upperCaseName = names[index].toUpperCase();
          upperNames.push(upperCaseName);
        }
        console.log(upperNames); // => ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']
      2.
        let names = ['Chris', 'Kevin', 'Naveed', 'Pete', 'Victor'];
        let upperNames = [];

        for (let index = 0; index < names.length; index += 1) {
          if (names[index] !== 'Naveed') {
            let upperCaseName = names[index].toUpperCase();
            upperNames.push(upperCaseName);
          }
        }
        console.log(upperNames); // ['CHRIS', 'KEVIN', 'PETE', 'VICTOR']
  
  - with continue and an if statement, you don't need to put the {} after the if, you can
  - just write continue

  - for each method for arrays
  - JS has first class functions, this means they are values. They can be moved around, assigned as variables
  - pass as arguments to other functions, use them as return values in other functions
  - most JavaScript programmers prefer to use array looping abstractions like forEach to loop over arrays.

  - Recursion
  - recursive functions are functions that call themselves
  - recursion is close enough to loops that we can say recursion is another way to create loops
  - Every recursive function has a baseline condition that marks the end of the recursion
  - Every recursive function has some code that recursively calls the function with a new argument
  - Recursion = happen again
  - The 'recursion' is the code that calls the function again

ARRAYS

  - Arrays can have anything in them including other arrays and objects
  - Arrays are indexed lists because each element has an index number
  - How to access last element of an array if you don't know how many elements it has:
      - myArray[myArray.length - 1]
  - Can also add to the end of the array using .length
      - myArrray[myArray.length] = 'Hello'; this adds it to the end, .length is always one more than the index
  - Object.freeze()
      - If you want the elements of the array to also be const, you can use the Object.freeze method:
      - This makes it so you can't change the elements of an array
      - Object.freeze() only goes one level deep, for sub arrays you have to freeze those also
      - const names = Object.freeze(['Sally', 'Sue', 'Sam', Object.freeze(['Mark', 'Joe', 'John'])]);
  - .concat() similar to .push but doesn't mutate original array
      - can use this to save the new array to a variable, it combines original array with arguments passed to it

  - .forEach() & .map() these are similar to loops, used to iterate over an array
  - arrays are objects
  - Array.isArray() you can use to see if it's an array. typeof will say object since arrays are objects
  - Since arrays are objects you can actually put properties on them

OBJECTS


MORE STUFF
  - Some variables are pointers and point to a spot in memory, other variables hold the actual value
  - pointers aka references can also say variable references spot in memory. Same meaning in JS
  
  - Primitive values
  - Variables that have primitive values store those actual values at the memory location
  - Variables are independent when they contain primitive values, you can change the value of one variable and it won't affect any other variable, even if they were set to be equal earlier.

  - Objects
  - Have two pointers to get to value
  - for objects the variable is stored with a reference number for the values of the object
  - with arrays if you set a variable to equal another array variable, they will point to the same spot in memory, so if one is changed they will both be changed.
    - this is called aliasing (alias) since the two variables have different names but are really just aliases for the same spot in memory.
  
  - Javascript variables hold primitive values or pointers (in the case fo objects and arrays)
  - Note that some operations mutate objects but others don't. Example .push mutates, .map does not

  - Method Chaining
  - you can call a method on the return value of another method
  - Basically this is when you put a lot of things together with dot notation. .toUppercase().split(' ').reverse()
  - Can change the syntax and put a new dot notation on the next line, it is still chained together

  - Regex = Regular Expression
  - A regex looks like a string written between a pair of forward-slash characters instead of quotes, e.g., /bob/
  - A regex can, in a single-line, solve problems that may require dozens of lines using other techniques. If you encounter a string matching problem that needs more than a simple substring search using the indexOf or includes method, remember to look into using regex. However, don't get carried away: don't use regex because you can; use them when they yield simpler and more understandable solutions.

  - Math Object
  - Math object has many methods that you can use

  - Dates
  - Date constructor creates objects that represent a time and date. The objects provide methods that let you work with those values

  - Exceptions
  - Many errors in JavaScript are 'silent', not an impassable error
  - exceptions are the bigger problems, these are the errors that need to be dealt with
  - keywords try, catch are used to handle exceptions
  



  
  














*/