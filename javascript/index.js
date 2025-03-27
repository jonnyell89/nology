// Types
// Variables
// Operators
// Booleans
// Control Flow

// ECMA - European Computer Manufacturing Association
// ECMAScript - overhauled as ES6(2015)

console.log("Hello");

// 1. Primitive Data Types
// The smallest building blocks, such as strings, numbers, etc.

// Strings - A collection of characters, defined in the ASCII Table.
// Numbers - (max: 2 ^ 52 - 1 => BigInt)
// Boolean - true or false, with a numerical value of 1 and 0.#
// Undefined - A variable with no assigned value.
// Null - A placeholder with a value of nothing, not zero.
// NaN - Not a Number, such as "hello" * 10 = NaN.

// typeof

console.log(typeof 15);
console.log(typeof true);
console.log(typeof NaN);
console.log(typeof "hello");

// Concatenation

console.log("good" + " " + "morning");
console.log(typeof "good" + " " + "morning"); // Concatenating
console.log("balloon" - 6);
console.log("balloon" - "n"); // Casting

// 2. Variables
// A container with a descriptive name that stores data in memory.
// Declaration key words, such as var, let and const.
// Specific words reserved by the language that perform a specific purpose.

// const - Constant => A constant does not change.
const firstName = "Jonny";
console.log(firstName);

// A const variable requires a value and cannot be left undefined.

// Without the const key word, the following will cause an error.
// firstName = "Jonny"; Uncaught TypeError: Assignment to constant variable.

// let - Let => A let does change.
let age = 35;
console.log(age);

age = 100;
console.log(age);

// var - Variable => A variable can be changed, but use const and let by default.
var myVariable;
console.log(myVariable);

// 3. Operators

// + => Add
// - => Subtract
// * => Multiply
// / => Divide
// ** => raise to the power of
// ++ => increment
// -- => decrement
// % => modulo

// the container = what is in the container
let value = 27;
value = value * 3;
console.log(value);

// Operators applied to the left of the value are applied before the value is logged.
// Operators applied to the right of the value are applied after the value is logged.
value++; // Increments the value by 1
console.log(value); // 82
console.log(value++); // 82
console.log(++value); // 84

// Modulo operations return the remainder.
console.log(10 % 2);
console.log(10 % 3);

// DRY - Don't Repeat Yourself
console.log((value = value + 2));
console.log((value += 2));
console.log((value -= 2));
console.log((value *= 2));
console.log((value /= 2));

// Concatenation and Template Literals

const myName = "Jonny";
const lastName = "Ellis";

// const fullName = "Jonny" + " " + "Ellis";
//console.log(fullName);

// const fullName = myName + " " + lastName;
// console.log(fullName);

const myFullName = "My full name is ${myName} ${lastName}";
console.log(myFullName);

// 4. Boolean & Boolean Expressions
// true or false

// Comparison Operators

console.log("Greater than:", 5 > 3); // True
console.log("Greater than:", 5 > 7); // False
console.log("Less than:", 5 < 3); // False
console.log("Less than:", 3 > 5); // False
console.log("Greater than or equal:", 3 >= 5); // False
console.log("Less than or equal:", 3 >= 3); // True

console.log("Equal to:", 7 == 7); // True
console.log("Equal to:", 7 == "7"); // True

console.log("Equal to:", 7 === 7); // True
console.log("Equal to:", 7 === "7"); // False

console.log("Not equal to:", 7 != "7"); // False
console.log("Not equal to:", 7 !== "7"); // True

// Multiple Expressions

// AND - &&
// OR - ||

// Both sides of the expression must evaluate to true for && to return true.
console.log("AND", 3 < 5 && 6 < 8); // true && true => true
console.log("AND", 3 < 5 && 6 < 1); // true && false => false

// One side of the expression must evaluate to true for || to return true.
console.log("OR", 3 < 5 || 6 < 8); // true && true => true
console.log("OR", 3 === 5 || 6 < 8); // false && true => true

// Falsy Values

// 0
// "" => An empty string.
// undefined
// null
// NaN
// false

// Truthy Values

// Everything else is Truthy, including negative values.

let x = 5;

console.log(x || 5 < 6); // 5
console.log(null || 5 < 6); // true
console.log(null && 5 < 6); // null
console.log(!x || !myName || 7 !== "7"); // true

// !!!!((10 % 7) % 3) // false
// (892783 != "89278" + 3) == 0; // true
// true || false + true; // true
// false + true || true; // 1
// true * false && false + true; // 0
// 10 && 123 && -1 && 3; // 3
// 10 && 123 && 0 && 3; // 0
