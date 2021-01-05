// Exercise 5 from Arrays chapter in Intro to Programming with JavaScript book

// Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

// You can use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise.

let things = [
  1,
  'a',
  '1',
  3,
  NaN,
  3.1415,
  -4,
  null,
  false
];

// Saved to a new array
let int = [];

function findIntegers(array) {
  return array.filter(function(element) {
    if (Number.isInteger(element)) {
      return int.push(element);
    }
  });
}
findIntegers(things);
console.log(int);

// Good solution here, but try to do it and save it to a new array instead of just console logging it.
/*
function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}

console.log(findIntegers(things));
*/

// A solution but not the most concise
/*
function findIntegers(array) {
  return array.filter(function(element) {
    if (Number.isInteger(element) === true) {
      return element;
    }
  });
}

let integers = findIntegers(things);
console.log(integers);
*/

// My initial solution: kind of works, but NaN is actually a number so that is in the new array. Also decimals aren't integers so that is wrong.
/*
findIntegers = function(variable) {
  for(let el of variable) {
    if(typeof el === 'number') {
      integers.push(el);
    }
  }
}
findIntegers(things);
console.log(integers);
*/

// Solution that works.
/*
findIntegers = function(variable) {
  for(let el of variable) {
    if(Number.isInteger(el) === true) {
      integers.push(el);
    }
  }
}
findIntegers(things);
console.log(integers);


// book solution:
function findIntegers(array) {
  return array.filter(function(element) {
    return Number.isInteger(element);
  });
}
 */
