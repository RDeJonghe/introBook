// 1. greeter.js

const NAME = 'Victor';
let greet1 = 'Good Morning';
let greet2 = 'Good Afternoon';
let greet3 = 'Good Evening';

console.log(`${greet1}, ${NAME}.`);
console.log(`${greet2}, ${NAME}.`);
console.log(`${greet3}, ${NAME}.`);


// 2. age.js

let age = 41;
const IN_10 = age + 10;
const IN_20 = age + 20;
const IN_30 = age + 30;
const IN_40 = age + 40;

console.log('You are ' + age + ' years old.');
console.log('In 10 years, you will be ' + IN_10 + ' years old.');
console.log('In 20 years, you will be ' + IN_20 + ' years old.');
console.log('In 30 years, you will be ' + IN_30 + ' years old.');
console.log('In 40 years, you will be ' + IN_40 + ' years old.');

// 3.
/*
  {
    let foo = 'bar';
  }
  console.log(foo); */
  // This doesn't work because of scope. The scope of the variable foo is block, and it can only
  // be accessed within that block. The console.log() can't access it. It's like foo doesn't exist
  // outside of the block

// 4.
  /* The code doesn't run because of a constant variable, the constant variable cannot be reassigned.
  The code attempts to reassign the constant variable and this can't be done
  */

// 5. 
  /* The code will log bar. This is because of scope. First foo is declared outside of any blocks,
  so it is available everywhere (I think this is called global scope). Then foo is assigned again inside of
  a block. The assignment is only relevant inside of the block, so that is blocked scoped. When the
  variable is consoled outside of the block, it will show the global scope value. Note that inside of the
  block foo is actually assigned again, it's not just reassigned without let. So this "shadows" or "hides"
  the original assignment
  */

// 6.
  /* Does not produce an error because of scope. The initial const is not changed. The second const
  is scoped within a block. The second const just uses the same name and "shadows" or "hides" the first
  const.

  const FOO = 'bar';
  {
    const FOO = 'qux';
  }
  console.log(FOO);   
*/


 

