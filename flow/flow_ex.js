// Exercises from the chapter Flow Control in Intro to Programming with JS book

/*
1. What values do the following expressions evaluate to?

  FALSE false || (true && false);
  TRUE true || (1 + 2);
  3 (1 + 2) || true;
  3 true && (1 + 2);
  FALSE false && (1 + 2);
  TRUE (1 + 2) && true;
  FALSE (32 * 4) >= 129;
  FALSE false !== !true;
  FALSE true === 4;
  TRUE false === (847 === '847');
  FALSE false === (847 == '847');
  TRUE (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;


*/

// 2. Write a function, evenOrOdd, that determines whether its argument is an even number. If it is, the function should log 'even' to the console; otherwise, it should log 'odd'. For now, assume that the argument is always an integer.

/*
function evenOrOdd(num) {
  if(num % 2 === 0) {
    console.log('even');
  }
  else{
    console.log('odd')
  }
}
console.log(evenOrOdd(202)); // or call in the console
*/

// CAN ALSO DO LIKE THIS:
/*
function evenOrOdd() {
  let num = prompt('enter a #');
  (num % 2 === 0) ? console.log('even steven') : console.log('odd todd');
}
evenOrOdd();
*/

// 3. Let's improve our previous implementation of evenOrOdd. Add a validation check to ensure that the argument is an integer. If it isn't, the function should issue an error message and return.

/*
function evenOrOdd(num) {
  if(typeof num === 'number' && num % 2 === 0) {
    console.log('even #');
  }
  else if(typeof num === 'number' && num % 2 !== 0) {
    console.log('odd #')
  }
  else{
    console.log('please enter in a number')
  }
}
//console.log(evenOrOdd('what'));
*/

// OR can do like this, example from book

/*
function evenOrOdd(num) {
  if(Number.isInteger(num) && num % 2 === 0) {
    console.log('even #');
  }
  else if(Number.isInteger(num) && num % 2 !== 0) {
    console.log('odd #');
  }
  else{
    console.log('please enter in a number');
  }
}
*/

// 4.
    // It logs Products 2, 3 and 'Product not found!' because there is no break used. It hits on
    // product 2 first and then falls through to 3 and not found.

// 5.
/*
if(foo()) {
  return 'bar';
}
else{
  return qux();
}
*/

// 6.
  // Not empty. The if statement is testing if it's true, it's not testing if it has elements or not
  // So this evaluates to true. If you put in '', false, NaN, undefined, then it will evaluate to false
  // and say empty

// 7.
/*
function makeCaps(str) {
  if(str.length > 10) {
    return str.toUpperCase();
  }
  else{
    return str;
  }
}
console.log(makeCaps('Hello World'));
console.log(makeCaps('goodbye'));
*/

// Or as a ternary statement, solution from book
/*
function longCaps(str) {
  return ((str.length > 10) ? str.toUpperCase() : str);
}
console.log(longCaps('Hello World'));
console.log(longCaps('good bye'));
*/

// 8.

/*
function numberRange(num) {
  if(num >=0 && num <= 50) {
    console.log(`${num} is between 0 and 50`);
    return num;
  }
  else if(num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
    return num;
  }
  else if(num > 100) {
    console.log(`${num} is greater than 100`);
    return num;
  }
  else if(num < 0) {
    console.log(`${num} is less than 0`);
    return num;
  }
}
numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
*/

// OR CAN DO WITH SWITCH 
/*
function numberRange(num) {
  switch (true) {
    case num >= 0 && num <= 50 :
      return `${num} is between 0 and 50`;
      break;
    case num >= 51 && num <= 100 :
      return `${num} is between 51 and 100`;
      break;
    case num > 100 :
      return `${num} is greater than 100`;
      break;
    case num < 0 :
      return `${num} is less than 0`;
      break;
  }
};

console.log(numberRange(25));
console.log(numberRange(75));
console.log(numberRange(125));
console.log(numberRange(-25));
*/





