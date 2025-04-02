// Types of Loops

// for loops
// while loops
// for ... of loops
// do while
// for ... in loops

// What are loops?
// Why do we use loops?

// DRY - Don't Repeat Yourself

// Use ` instead of "" when defining strings with variables inside.

// Remember -> start; stop; step;

// For loops

// A loop is a way to repeat a set of code with a start point, an end point, and a way to join the two?

// [for reserved keyword] (loop start position/condition; finish condition; iterator/iteration) {
//     block of code to execute
//}

// iteration -> a complete loop from start to finish
// iterator -> the variable that tracks the current iteration

// In a loop definition, ++i and i++ are the same because the definition is evaluated before the loop begins.

for (let i = 0; i < 4; ++i) {
  console.log(`First loop, iteration number: ${i}`);
}

for (let i = 0; i < 7; i += 2) {
  console.log(`Second loop, iteration number: ${i}`);
}

for (let i = 6; i < 6; i += 2) {
  console.log(`Third loop, iteration number ${i}`);
}

// Indices always start at 0.
// The string length is always one more than the last string index.
// The last string index is always one less than the string length.
// When finish condition is found to be false

let myString = "resources";
console.log(myString.length);

for (let index = 0; index < myString.length; ++index) {
  // logs all characters in the string.
  console.log(myString.charAt(index));
  // console.log(myString[index]);
}

// To run backwards

for (let index = myString.length - 1; index >= 0; --index) {
  console.log(myString.charAt(index));
}

const num = 10;
let sum = 0;

for (let i = 1; i <= num; i++) {
  sum += 1;
  console.log(sum);
}

// While loops

// Start position is defined outside the while loop
// Finish condition is defined inside the while loop signature
// Iterator is defined inside the while loop statement

let x = 0;
let count = 0;

while (x <= num) {
  count += x;
  x++;
  console.log(count);
}
let randomNum = Math.ceil(Math.random() * 10);
let loopCounter = 0;

while (randomNum !== 5) {
  console.log(`${randomNum} is not 5`);
  loopCounter++;
  randomNum = Math.ceil(Math.random() * 10);
}

console.log(`While loop ran ${loopCounter} times`);

// Do while loops
// Executes the do statement at least once before the while loop is condition is processed.

do {
  count += x;
  x++;
  console.log(count);
} while (x <= 15);
