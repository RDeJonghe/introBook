// Exercises from objects chapter Intro to Programming with JavaScript

// Use object literal syntax (e.g., { key: value, ... } notation) to create an object that behaves as an array in a for statement. The object should contain at least 3 elements. You should place your code between the braces in the let statement.

// Note: Our array-like object isn't a perfect mimic of a regular JavaScript array, however. In particular, it doesn't modify the length property when you add or delete elements. It also doesn't support methods like forEach, filter, and push.

let myArray = {
  0 : 'Ryan',
  1 : 'De Jonghe',
  2 : 41,
  length : 3

};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}
console.log(myArray[0]);


let newArray = {
  0 : 'LaDanian',
  1 : 'Tomlinson',
  2 : 'Running Back',
  length : 3
};
console.log(newArray.length);
console.log(newArray[0] + '<>' + newArray[1]);
