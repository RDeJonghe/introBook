// Exercise 2 from the Loops and Iterating Chapter in Intro to Programming with JS

// 2. Write a function that computes and returns the factorial of a number by using a for loop. The factorial of a positive integer n, signified by n!, is defined as the product of all integers between 1 and n, inclusive:

function multF(num) {
  let total = 1 // this was part i had difficulty with, set to 1. Also exists in function, but not in loop
  for(let i = num; i > 0; i--) { // this part I figured out
    total *= i;
  }
  return total;
}

console.log(multF(8));