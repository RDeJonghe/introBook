// Exercise 10 from the more stuff chapter of intro to programming with javascript

// Challenging Exercise This exercise has nothing to do with this chapter. Instead, it uses concepts you learned earlier in the book. If you can't figure out the answer, don't worry: this question can stump developers with more experience than you have.

// Consider this code:
/* > let x = "5"
> x = x + 1
= "51" */

// Now, consider this code:

/* > let y = "5"
> y++ */

// What gets returned by y++ in the second snippet, and why?

// A little complicated. Y still becomes the number 6 which I anticipated. But y++ is not exactly the same as y += 1 becasue of the return value. So the string '5' is coerced into a number and the variable does get 1 added. But the return value is still 5, so it returns the initital value and the addition happens after.
