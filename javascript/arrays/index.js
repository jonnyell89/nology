// Arrays and Loops

// Arrays are used to store multiple values in a single variable.
// Arrays can store any data type.
// Think of an array as a list of things that live inside square brackets.
// They save us writing out several variables separately, we can collect them together in one place.

// Remember that the 1st element is at position 0, the 2nd element is at position 1, and so on.
const petsArr = ["Cats", "Dogs", "Rabbits", "Gerbils", "Hamsters"];
console.table(petsArr);
console.log(petsArr);

console.log(petsArr[0]);
console.log(petsArr[1]);
console.log(petsArr[2]);
console.log(petsArr[3]);
console.log(petsArr[4]);

const gerbilsIndex = 3;
console.log(petsArr[gerbilsIndex]);

// Declaring an array in JavaScript, the same as Python.
const myArray = [];

// Declaring an array with an initial capacity.
// new is keyword, Array() is constructor, .fill() is method.
const withCapacity = new Array(5).fill(0);

console.log(withCapacity);

// const matrix = new Array(5).fill(Array.apply(5).fill(0));
// console.log(matrix);

const students = ["Ed", "Ash", "Mo"];
console.log(students);
console.log(students.length);
console.log(students[2]); // Mo
console.log(students[3]); // undefined

// How to add and remove items from an array?

// The .push method adds an item to the end of an array, and returns the new length of the array.
// In this case, newLength holds the length and the method pushes the new item to the students array.
const newLength = students.push("Megan");
console.log(newLength);

students.push("Jude", "Indi");
console.log(students);

// The .unshift method adds an item to the start of an array, and moves all of the existing items along.
students.unshift("Nicole");
console.log(students);

// The .shift method removes the first item from the array and returns it.
const firstElement = students.shift();
console.log(firstElement);
console.log(students);

// The .pop method removes the last item from the array and returns it.
const lastElement = students.pop();
console.log(lastElement);
console.log(students);

// In JavaScript, an array is mutable and can contain a mix of data types.
// Use indexing to replace an item at a specific position in an array.
const myNums = [1, 2, 3, 4, 5];
console.log(myNums.length);
console.log(myNums[2]);
myNums[2] = "Jonny";
console.log(myNums);
console.log(myNums[2]);

// The .includes method checks if an array contains a specific item.
console.log(myNums.includes(5));

// The .indexOf method returns the index position of a specific item.
console.log(students.indexOf("Megan"));

// Returns -1 if the item is not present in the array.
console.log(students.indexOf("Indi"));

// Returns 1 if the item is in the same place as the index input.
console.log(students.indexOf("Ash", 1));
// Returns -1 if the item is not in the same place as the index input.
console.log(students.indexOf("Ash", -1));

// Define a function that returns the sum of the items in the input array.
const values = [111, 222, 333, 444, "string", true, NaN, 555];

const addNums = (numsArray) => {
  let sum = 0;
  for (let index = 0; index <= numsArray.length; index++) {
    // if (typeof numsArray[index] === "number" && !isNaN(numsArray[index])) {
    if (!isNaN(numsArray[index])) {
      sum += numsArray[index];
    } else continue;
  }
  return sum;
};

console.log(addNums(values));

// Mutating methods modify the original array.
// Cloning arrays

const myOriginalArray = [1, 2, 3];
const myFakeCopy = myOriginalArray;

console.log(myOriginalArray); // [1, 2, 3]
console.log(myFakeCopy); // [1, 2, 3]

myFakeCopy.push(4);

console.log(myOriginalArray); // [1, 2, 3, 4]
console.log(myFakeCopy); // [1, 2, 3, 4]

// myOriginalArray and myFakeCopy both point to the same thing.
// myFakeCopy is a shortcut to myOriginalArray rather than a copy.

const myRealCopy = [...myOriginalArray];

myRealCopy.push(100);

console.log(myRealCopy); // [1, 2, 3, 100]
console.log(myOriginalArray); // [1, 2, 3, 4]
console.log(myFakeCopy); // [1, 2, 3, 4]
