// Exercise 6 from more stuff chapter of intro to programming with JS

// Write a function that searches an array of strings for every element that matches the regular expression given by its argument. The function should return all matching elements in an array.

// Example:
let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear'
];
let monks = [
  'Ajaan Wi Chien',
  'Ajaan Chua',
  'Ajann Pu'
];

/*
function matchMaker(array, regex) {
  let matched = [];
  for (let i = 0; i < array.length; i++) {
    if (regex.test(array[i])) {
      matched.push(array[i]);
    }
  }
  return matched;
}
console.log(matchMaker(words, /lab/));
*/

/*
function findMatch(array, regex) {
  let matched = [];
  for (let el of array) {
    if (regex.test(el)) {
      matched.push(el);
    }
  }
  return matched;
}
console.log(findMatch(monks, /Ch/));
*/
// With for... of loop
/*
function matchMaker(array, regex) {
  let matched = [];
  for (let el of array) {
    if (regex.test(el)) {
      matched.push(el);
    }
  }
  return matched;
}


console.log(matchMaker(words, /lab/));
*/
/*
function match(array, pattern) {
  let matches = [];
  for (let i = 0; i < array.length; i++) {
    if (pattern.test(array[i])) {
      matches.push(array[i]);
    }
  }
  return matches;
}
console.log(match(words, /ment/));
*/

// Book solution
/*
function allMatches(words, pattern) {
  let matches = [];
  for (let index = 0; index < words.length; index += 1) {
    if (pattern.test(words[index])) {
      matches.push(words[index]);
    }
  }

  return matches;
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
*/

// Book solution:
/* Seems to be an error with this
function allMatches(words, pattern) {
  return words.filter((word) => pattern.test(word));
}
console.log(allMatches(words, 'lab'));
*/
