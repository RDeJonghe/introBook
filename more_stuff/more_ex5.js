// Exercise 5 from more stuff chapter of intro to programming with JS

// What does the following function do?

function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// It takes the string and splits it up everywhere there is a blank space ' ' and puts it into an array. So a bunch of words would be individually split at each word, and each word would be in an array. It then is going to take that array and reverse the order of the words. So it will put the last word first and reverse the entire thing. Lastly it is going to map a new array and map requires a function. This function is going to take the length property of each string and put that number into a new array in the reversed order that was called. So the ending array from this function is an array of numbers of the length of each word in the original string, but in reversed order.
