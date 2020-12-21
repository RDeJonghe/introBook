// Exercise 4 from the Intro to Programming with JS book

// 4. Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5;) {
  console.log(i += 1);
}

// It actually logs it to the console. There is some flexibility with for statements. The 3 parts
// of a for statement are optional. Note how in below example the i can be declared outside of the for
// loop. This gives it a global scope and is accessible in other parts of the program


/*
let i;
for (i = 0; i < 5;) {
  console.log(i += 1);
}
*/