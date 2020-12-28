// Exercise 7 from arrays chapter in Intro to Programming with JavaScript

// Use reduce to compute the sum of the squares of all of the numbers in an array:

// my solution missed initial value of accumulator
/*
let array = [3, 5, 7];

const sumSq = (accumlator, currentValue) => {accumlator + currentValue * currentValue};

console.log(array.reduce(sumSq));
*/


// Book solution

function sumOfSquares(numbers) {
  return numbers.reduce((accumulator, number) => {
    return accumulator + number * number;
  }, 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83