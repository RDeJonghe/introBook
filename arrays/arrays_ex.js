// Exercise 1 from the Intro to Programming with JavaScript

let array1 = [1, 2, undefined, 4]
console.log(array1.length);
// length of array 1 is 4. Undefined still has that index

let array2 = [1];
array2.length = 5;
console.log(array2.length);
console.log(array2);
// Array 2 will have a length of 5. It was set to 5, I think the rest of the values will be undefined. Corrected, not "undefined", it is set as empty, but length is 5

let array3 = [];
array3[-1] = [1];
console.log(array3.length);
console.log(array3);
// Here it's setting a negative index to value 1. But the length is zero. However when I look at the array after it is set it looks like it makes it an object with a key value pair, with the value being an array. -1 : [1]

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;
console.log(array4.length);
console.log(array4);
// Here I think the length will be 3 and the last 2 will no longer be part of the array.

let array5 = [];
array5[100] = 3;
console.log(array5.length);
console.log(array5[100]);

// Here I think the array length will be 100 and that value will be 3, the rest will be empty/undefined. Length actually shows as 101. This is because of zero index. [100] is the index number so length is 1 more than that.















