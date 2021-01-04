// Exercise 8 from Arrays chapter in Intro to Programming with JavaScript

// Write a function similar to the oddLengths function from Exercise 6, but don't use map or filter. Instead, try to use the reduce method.

let arr = [
  'a',
  'abcd',
  'abcde',
  'abc',
  'ab'
];

// Answer with a REDUCER set and then put in.
/*
const REDUCER = function(accumulator, element) {
  let leng = element.length;
  if (leng % 2 !== 0) {
    accumulator.push(leng);
  }
  return accumulator;
};

console.log(arr.reduce(REDUCER, []));
*/

// Answer:
/*
function oddLengths(array) {
  return array.reduce(function(accumulator, element) {
    let leng = element.length;
    if (leng % 2 !== 0) {
      accumulator.push(leng);
    }
    return accumulator;
  }, []);
}

console.log(oddLengths(arr)); // => [1, 5, 3]
*/
