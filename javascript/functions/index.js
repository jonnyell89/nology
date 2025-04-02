// JavaScript Functions

console.log(myFunctionES5()); // ES5 functions are hoisted, meaning that they are executable before definition.
console.log(sumTwoNums(1, 2));
// console.log(myFunctionES6(1, 2)); // ES6 functions are not hoisted, meaning that they return a ReferenceError.

// Self-contained, executable and reusable blocks of code.
// DRY - Don't repeat yourself

// ES5 syntax, pre 2015.

function myFunctionES5() {
  console.log("Hello, my name is Jonny.");
  // return 1;
}

myFunctionES5();

// It is important to link the 'undefined' return value with a missing return value in the function block of code.

const functionValue = myFunctionES5();
console.log(functionValue); // Returns undefined

// Function definition will have parameters
// Function invocation will have arguments, or 'inputs'.

function introduceYourself(firstName, lastName) {
  return `Hello, my name is ${firstName} ${lastName}.`;
}

console.log(introduceYourself("Jonny", "Ellis"));

// With default arguments

function introduceYourselfDefault(firstName = "Jonny", lastName = "Ellis") {
  return `Hello, my name is ${firstName} ${lastName}.`;
}

// Undefined skips the argument, "Elliott" overrides the default parameter.
console.log(introduceYourselfDefault(undefined, "Elliott"));

function sumTwoNums(numOne, numTwo) {
  console.log(numOne, numTwo);
  return numOne + numTwo;
}

sumTwoNums();
sumTwoNums(1, 2);

// ES6 syntax, post 2015.
// Always use const to declare

const myFunctionES6 = (paramOne, paramTwo) => {
  return paramOne + paramTwo;
};

console.log("--------------------");

// Function Scope

// You can look from the inside out, but you can't look from the outside in.
// GLOBAL SCOPE <<< LOCAL SCOPE

// GLOBAL SCOPE
const myOuterVar = "This is my outer variable";

if (true) {
  // LOCAL SCOPE - has access to the GLOBAL SCOPE
  const myInnerVar = "This is my inner variable";
  console.log(myOuterVar);
  console.log(myInnerVar);
}

// console.log(myInnerVar);

const scopeOne = (scopeOnePara) => {
  // Access to the GLOBAL SCOPE and scopeOne
  const myNumber = 123;
  console.log("In scopeOne: ", myVariable, myNumber, scopeOnePara);
  const scopeTwo = (scopeTwoPara) => {
    // Access to the GLOBAL SCOPE, scopeOne and scopeTwo.
    const myString = "myString";
    console.log(
      "In scopeTwo: ",
      myVariable,
      myNumber,
      scopeOnePara,
      myString,
      scopeTwoPara
    );
    const scopeThree = (scopeThreePara) => {
      // Access to the GLOBAL SCOPE, scopeOne, scopeTwo and scopeThree.
      const myBool = true;
      console.log(
        "In scopeThree: ",
        myVariable,
        myNumber,
        scopeOnePara,
        myString,
        scopeTwoPara,
        myBool,
        scopeThreePara
      );
    };
  };
};

// A for loop is a mechanism that repeats a process.

// Continue

const sumOfN = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumOfN());

const sumOfEvenN = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    // Negate the falsy value of zero
    if (!(i % 2)) {
      sum += i;
    } else continue;
  }
  return sum;
};

console.log(sumOfEvenN(10));

const sumOfOddN = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (!(i % 2)) continue;
    sum += i;
  }
  return sum;
};

console.log(sumOfOddN(10));
