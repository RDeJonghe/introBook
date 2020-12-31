// Objects chapter of Intro to Programming with JavaScript Book

// 8.  Add a qux property with value 3 to the myObj object we created in the previous exercise. Now, examine the following code snippets:

let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

console.log(myObj);

// Without running this code, can you determine whether these two snippets produce the same output? Why?
// They produce the same output because they both iterate over the keys. WRONG.
// ANSWER: They both iterate over the keys but .forEach() only iterates over the properties that belong to myObj and not the inherited properties from the prototype. For... in iterates over all the properties.

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}


