// Exercise 9 from the Arrays chapter of intro to JS book

// 9. Without using a for, while, or do/while loop, write some code that checks whether the number 3 appears inside these arrays. Return true or false depending on each result.

// My first answer using reduce
let numbers1 = [
  1,
  3,
  5,
  7,
  9,
  11
];
let numbers2 = [];
let numbers3 = [
  2,
  4,
  6,
  8
];

const REDUCER = function(accumulator, element) {
  let yesNo = [];
  if (element === 3) {
    accumulator.push(true);
  } else {
    accumulator.push(false);
  }
  return accumulator;
};

console.log(numbers1.reduce(REDUCER, []));
console.log(numbers2.reduce(REDUCER, []));
console.log(numbers3.reduce(REDUCER, []));

// Use .includes()
console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3));
