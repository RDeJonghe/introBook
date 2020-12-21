// Exercises for the Loops & Iterating Chapter from Intro to Programming with JavaScript

// 1. Modify the age.js program you wrote in the exercises for the Input/Output chapter. The updated code should use a for loop to display the future ages.

let age = Number(prompt('How old are you?'));

console.log(`You are ${age} years old.`);
 
for(let future = 10; future <= 40; future += 10) {
  console.log(`In ${future} years you will be ${age + future}`);
}

