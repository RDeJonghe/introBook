// Exercise 6 from the Arrays chapter in Intro to Programming with JavaScript

// 6. Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).

// Note that it is possible to solve this problem without using map. However, our intent is to show how you can combine multiple functions to achieve a desired result.

let arr = [
  'a',
  'abcd',
  'abcde',
  'abc',
  'ab'
];

function oddLengths(array) {
  let leng = [];
  array.map(function(element) {
    return leng.push(element.length);
  });
  return leng.filter(function(element) {
    return element % 2 !== 0;
  });
}

// console.log(oddLengths(arr));

// => [1, 5, 3]

// Answer
/*
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
//console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(strings) {
  let strLength = arr.map((el) => el.length);
  let oddLengths = strLength.filter((el) => el % 2 !== 0);
  return oddLengths;
}

console.log(oddLengths(arr));
*/
