// Exercise 4 from Intro to Programming with Javascript book

// Let's try another variation on the even-numbers theme.

// We'll return to the simpler one-dimensional array. In this problem, we want to use the map function to create a new array that contains one element for each element in the original array. If the element is an even value, then the corresponding element in the new array should contain the string 'even'; otherwise, the element in the new array should contain 'odd'.

// If you have trouble using map to accomplish this, try it using a regular for loop instead.

let myArray = [
  1,
  3,
  6,
  11,
  4,
  2,
  4,
  9,
  17,
  16,
  0
];

// Can do with ternary statement
let newArray = myArray.map(function(element) {
  return element % 2 === 0 ? 'even' : 'odd';
});

console.log(newArray);

/*
const ODD_EVEN = [];

myArray.map(function(num) {
  if(num % 2 === 0) {
    ODD_EVEN.push('Even');
  }
  if(num % 2 !== 0) {
    ODD_EVEN.push('Odd');
  }
} );

console.log(ODD_EVEN);
/*

// Now trying it with loop
/*
const EVEN_ODD = [];

for(let el of myArray) {
  if(el % 2 === 0) {
    EVEN_ODD.push('EVEN');
  }
  if(el % 2 !== 0) {
    EVEN_ODD.push('ODD');
  }
}
console.log(EVEN_ODD);

// book solution
let newArray = myArray.map(function(value) {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});
console.log(newArray);
*/
