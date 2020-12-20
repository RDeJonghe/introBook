// Functions exercises from Intro to Programming with JavaScript

/*
1.
  It logs 1 to the console. Executing foo only has an affect within the foo code block becasue of scope.
  They are two different variables. One has global scope, the other local. They just have the same name.
*/

// 2.
/*
  function greet() {
    let first = prompt('What is your first name?');
    let last = prompt('What is your last name?');
    return `${first} ${last}`;
  }
  
  console.log(`Hello ${greet()}!`);
  */

// 3. 
/*
  function mult() {
    let num1 = prompt('Enter a number to multiply');
    let num2 = prompt('Enter another number to multiply');
    let result = num1 * num2;
    return `${num1} * ${num2} = ${result}`;
  }

  console.log(mult());
*/

// 4. 
    //It doesn't log anything becasue the return terminates execution of the program before it gets
    // to the console.log()
/*
  function scream(words) {
  words = words + '!!!!';  Note this syntax don't need 'let' because variable is already declared as parameter
  return;
  console.log(words);
}

scream('Yipeee');
*/

// 5.
    // Nothing becasue the console.log method is never called.
