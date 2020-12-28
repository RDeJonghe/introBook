// Exercise 5 from Arrays chapter in Intro to Programming with JavaScript book

// Write a findIntegers function that takes an array argument and returns an array that contains only the integers from the input array. Use the filter method in your function.

// You can use Number.isInteger(value) to determine whether a numeric value is an integer. It returns true if the value is an integer, false otherwise.




let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = [];

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
 
