// Exercise 7 from arrays chapter in Intro to Programming with JavaScript

// Use reduce to compute the sum of the squares of all of the numbers in an array:

// my solution missed initial value of accumulator
/*
let array = [3, 5, 7];

const sumSq = (accumlator, currentValue) => {accumlator + currentValue * currentValue};

console.log(array.reduce(sumSq));
*/

// Have to provide the reducer functions - make it and then call and use it.
// Hint the book example uses a return within a return.
// don't forget syntax to set reducer, last thing in the .reduce() parenthesis

let array = [
  3,
  5,
  7
];

let myNums = [
  2,
  4,
  6
];

// MDN DOCUMENTATION WAY OF WRITING IT. This way is a simpler function, note how .reduce is called on the array. And how the simpler variable function is passed in as an argument with the accumlator value.

const REDUCER = function(accumlator, element) {
  return accumlator + element * element;
};

console.log(array.reduce(REDUCER, 0));
console.log(myNums.reduce(REDUCER, 0));
// Book solution way of doing this is by making a function that has an internal reduce inside of it and just calling that single function.
function sumOfSquares(array) {
  return array.reduce(function(accumulator, element) {
    return accumulator + element * element;
  }, 0);
}
console.log(sumOfSquares(array));
console.log(sumOfSquares(myNums));
// Book solution
/*
function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

let array = [
  3,
  5,
  7
];
console.log(sumOfSquares(array)); // => 83
*/
