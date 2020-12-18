// Exercises for The Basics chapter from Introduction to Programming with JavaScript

// 1.
  console.log('John' + ' ' + 'Doe');

// 2.

  let num = 4936;
  let ones = 4936 % 10;
  console.log(num);
  console.log(ones);

  num = (num - ones) / 10;
  let tens = num % 10;
  console.log(num);
  console.log(tens);

  num = (num - tens) / 10;
  let hund = num % 10;
  console.log(num);
  console.log(hund)

  num = (num - hund) / 10;
  let thous = num % 10;
  console.log(num);
  console.log(thous);

/* 3.

  - String
  - Boolean
  - Number
  - Number
  - Undefined
  - Object */

/* 4.

  It logs '510' instead of 15 because of implicit type coercion. It performs string concatenation and
  combines the string '5' with the number 10 to make a string of '510'. */

// 5. Refactor code so it logs 15 instead of '510'

  console.log(Number('5') + 10);
  
// 6.

  console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// 7.

  // It will say undefined.

// 8.

  let names = [
    'asta',
    'butterscotch',
    'pudding',
    'neptune',
    'darwin'
  ];

// 9.

  let pets = {
    asta : 'dog',
    butterscotch : 'cat',
    pudding : 'cat',
    neptune : 'fish',
    darwin : 'lizard'
  };

// 10.

  // false

// 11.

  // a number 3 (parseInt() stops at any non number, parseFloat() can handle decimals)

// 12.

  // '12' < '9' evaluates to true, compares left to right, 1 < 9
  // This is like the .sort() method, that gives results like this that aren't expected
  // so ascending is 1, 100, 3, 6000, 9. goes by first digit like this




    

  


