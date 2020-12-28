// Exercise 3 from Intro to Programming with Javascript Book

// 3. Let's make the problem a little harder. In this problem, we're again interested in even numbers, but this time the numbers are in nested arrays in a single outer array.

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for(let i = 0; i < myArray.length; i++) {
  let row = myArray[i];
  for(let j = 0; j < row.length; j++) {
    if(row[j] % 2 === 0) {
      console.log(row[j]);
    }
  }
}

// not sure how to do with for... of

// book answer with .forEach()

myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
});