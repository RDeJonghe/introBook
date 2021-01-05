// Exercise 9 from the objects chapter of intro book to JS

// What does the following program log to the console? Why?

let foo = {
  a : 'hello',
  b : 'world'
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

// qux = 'yo!';

console.log(foo.a);
console.log(qux);

// I think it reassigns both. In the function it reassigns because of dot notation. Argument 2 is a variable reassingment.
// Wrong, the second one doesn't reassign because it's a primitive value. This I don't fully understand since the variable can be reassigned outside of the function.
// qux = 'yo'; I can just do this outside of the function.
