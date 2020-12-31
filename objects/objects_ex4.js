// Exercises from Objects chapter of Intro to Progamming with JavaScript


// 4.  Create an array from the keys of the object obj below, with all of the keys converted to uppercase. Your implementation must not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3
};

// let arr = Object.keys(obj);
// let upArr = [];

// for (let el of arr) {
//   upArr.push(el.toUpperCase());
// }
// console.log(arr);
// console.log(upArr);
// console.log(obj);

// Also solved with .map()

let keysArr = Object.keys(obj);
let uppArr = keysArr.map((el) => el.toUpperCase());
// Why does above work but below shows undefined?
/*
let uppArr = keysArr.map(function(el) {
  el.toUpperCase();
});
*/


console.log(obj);
console.log(keysArr);
console.log(uppArr);


// Can also solve with .forEach()
/*
let uppArr = [];
let keysArr = Object.keys(obj);
keysArr.forEach(function toUpp(el) {
  uppArr.push(el.toUpperCase());
}
);
console.log(uppArr);
console.log(keysArr);
console.log(obj);
*/



