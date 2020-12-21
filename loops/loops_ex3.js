// Exercise 3 from Intro to Progamming with JS book

// 3. The following code causes an infinite loop (a loop that never stops iterating). Why?
/*
The while statement will always set the counter to 1 each time the loop runs. So it is always
beginning at 1. It will add 1 to it, to make 2, but it will reset to 1. The stopping condition
is that counter > 2. This will never happen, it gets to 2 but is never greater. This could be solved
by making the stopping condition counter >= 2.
*/

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter >= 2) { // change to >= fixes the infinite loop
    break;
  }
}