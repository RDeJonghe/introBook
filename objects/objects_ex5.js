// Exercises from Objects chapter of Intro to Programming with JavaScript

// 5. Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

console.log(myObj);
console.log(myObj.foo);