// Exercise 2 from Intro to Progamming with JavaScript book

// 2. Log all of the even values from myArray to the console.

let myArray = [
  1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0
];

for(let el of myArray) {
  let num = el;
  if(num % 2 === 0) {
    console.log(el);
  }
}

// Book solution, another way to do same thing.
/* for (let i = 0; i < myArray.length; i += 1) {
  let value = myArray[i];
  if (value % 2 === 0) {
    console.log(value);
  }
} */

// Another book solution:
/* myArray.forEach(function(value) {
  if (value % 2 === 0) {
    console.log(value);
  }
}); */