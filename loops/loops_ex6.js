// Exercise 6 from the Intro to Programming with JavaScript book

// 6. Reimplement the factorial function from exercise 2 using recursion. Once again, you may
//    assume that the argument is always a positive integer.

/*
function multF(num) {
  let total = 1 // this was part i had difficulty with, set to 1. Also exists in function, but not in loop
  for(let i = num; i > 0; i--) { // this part I figured out
    total *= i;
  }
  return total;
}

console.log(multF(8));
*/

function factorial(number) {
  console.log(number);
  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(factorial(4));