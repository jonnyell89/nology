// TypeScript introduces the concept of type-safety.
// When writing TypeScript code, the data types remain the same once they are defined.

// npm create vite@latest my-vue-app -- --template vanilla-ts

const favouriteNumber: number = 5;
const isRetired: boolean = false;
let messageStr: string = "hello";

const namesArr: string[] = ["Charlie", "Dan"];
const numbersArr: number[] = [2, 4, 6, 8];

console.log(namesArr, numbersArr);

// Any type in an array.
const differentTypes: any[] = [1, "something", true];

// Multiple types in an array.
const unionArr: (number | string)[] = [1, 2, "3", 4];

const emptyArr: number[] = [];
// emptyArr[0] = "hello"; // Type 'string' is not assignable to type 'number'.ts(2322)

// For Loops
for (let i: number = 0; i < numbersArr.length; ++i) {
  console.log(numbersArr[i]);
}

const myArr: unknown[] = [true, -1, "A", null, "B"];

// Type inference
// Filter happens first, then casting.
const strArr1 = myArr.filter((el) => typeof el === "string") as string[];

// Return type is cast first, then filter.
const strArr2 = <string[]>myArr.filter((el) => typeof el === "string");

// Functions
function lowerCaseWord(word: string) {
  return word.toLowerCase();
}

console.log(lowerCaseWord("HELLO"));
// console.log(lowerCaseWord(1));

const generateRandomValue = (n: number, max: number): number[] => {
  const getRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max + 1);
  };

  const arr: number[] = [];

  for (let i: number = 0; i < n; i++) {
    arr.push(getRandomNumber(max));
  }

  return arr;
};

console.log(generateRandomValue(10, 3));

const randomNumArr = (n: number, max: number) => {
  const arr: number[] = [];

  for (let i: number = 0; i < n; i++) {
    arr.push(Math.ceil(Math.random() * max));
  }
  return arr;
};

console.log(randomNumArr(10, 3));
