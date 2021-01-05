// More Stuff Chapter from intro to programming with JS book.

// What does this code log to the console? Why?

let array1 = [
  1,
  2,
  3
];
let array2 = array1;
array1[1] = 4;
console.log(array2);

// This will log 1, 4, 3 becasue the two arrays point to the same place in memory. Since array2 is set equal to array1 any changes to either will update each other.
