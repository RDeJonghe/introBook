// Exercise 2 from the More Stuff Chapter from Intro to Programming with JS

// What do the following error message and stack trace tell you?
/*
$ node exercise2.js
/Users/wolfy/tmp/exercise2.js:4
  console.log(greeting);
              ^

ReferenceError: greeting is not defined
    at hello (/Users/wolfy/tmp/exercise2.js:4:15)
    at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
    at Module._compile (internal/modules/cjs/loader.js:721:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
    at Module.load (internal/modules/cjs/loader.js:620:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
    at Function.Module._load (internal/modules/cjs/loader.js:552:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
    at executeUserCode (internal/bootstrap/node.js:342:17)
    at startExecution (internal/bootstrap/node.js:276:5)
*/

// Stack trace says that the there is an error and that greeting is not defined. The error ocurred at 'hello' on line 4, character 15. So that would be a place to look. Additionally, there was a problem with 'anonymous' since it isn't defined. That problem is on line 13 character 1. So it would also be important to look there.
