// .push and .pop do not need to iterate over the array.
// .shift and .unshift do need to iterate over the array.

// The .filter() method filters out values from an array and returns a new array without modifying the original array.
// More specifically, the .filter() method creates a new array with elements that pass the test provided by the callback function.

// Manual implementation of the .filter() method.
const filter = (myArr, func) => {
  const newArr = [];
  for (let i = 0; i < myArr.length; ++i) {
    const currentItem = myArr[i];
    // Returns a boolean value.
    const toFilter = func(currentItem);
    if (toFilter) {
      newArr.push(currentItem);
    }
  }
  return newArr;
};

// Single line functions implicitly return their value.

// If num is odd, the expression evaluates to 1 which is truthy, so isOdd is true.
// If num is even, the expression evaluates to 0 which is falsy, so isOdd is false.
const isOdd = (num) => num % 2;

// If num is even, the expression evaluates to 0 which is falsy, but the expression is then negated, so isEven becomes true.
// If num is odd, the expression evaluates to 1 which is truthy, but the expression is the negated, so isEven becomes false.
const isEven = (num) => !(num % 2);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  "Filter odd values using manual filter() implementation:",
  filter(nums, isOdd)
);
console.log(
  "Filter even values using manual filter() implementation:",
  filter(nums, isEven)
);

console.log(
  "Filter odd values using built-in .filter() method:",
  nums.filter((n) => n % 2)
);
console.log(
  "Filter even values using built-in .filter() method:",
  nums.filter((n) => !(n % 2))
);

console.log("--------------------");

// Multi line functions with curly braces explicitly return their value.
// .filter() loops through each element of nums.
// The callback function receives three arguments:
// num -> The current element in the array.
// index -> The index of the current element.
// arr -> The entire original array.
const evenNumbers = nums.filter((num, index, arr) => {
  console.log(`${index} in ${arr}`);
  // The condition for elements in the returned array.
  return num % 2 === 0;
});

console.log(evenNumbers);

// The .map method modifies all values from an array and returns a new array without modifying the original array.
// More specifically, the .map() method creates a new array by applying a function to each element of the original array.

const map = (myArr, func) => {
  const newArr = [];
  for (let i = 0; i < myArr.length; ++i) {
    const currentItem = myArr[i];
    const newValue = func(currentItem);
    newArr.push(newValue);
  }
  return newArr;
};

const increment = (num) => num + 1;
console.log("Increment using map implementation:", map(nums, increment));

const square = (num) => num ** 2;
console.log("Square using map implementation:", map(nums, square));

console.log("Using built-in .map() method:", nums.map(increment));

// .filter() selects elements that pass a condition and creates a new array.
// .map() transforms each element using a function and creates a new array.

// To modify values from the original array and then filter them.
// Step 1: .map((num) => num * 2) -> multiples every number in the array by 2.
// Step 2: .filter((num) => num > 1000) -> keeps only numbers greater than 10.

const myFunc = (arr) => arr.map((num) => num * 2).filter((num) => num > 10);

// The .join(separator) method

// The .every() method -> &&

const allGreaterThanThousand = nums.every((n) => n > 1000);
console.log("Nums:", nums, allGreaterThanThousand);

// The .some() method -> ||

const someGreaterThanThousand = nums.some((n) => n > 1000);
console.log("Nums:", nums, someGreaterThanThousand);

// The .concat() method

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nums.concat(numbersArray));

// The .reduce() method

const reduce = (arr, func, acc) => {
  for (let i = 0; i < arr.length; ++i) {
    acc = func(acc, arr[i]);
  }
  return acc;
};

console.log(
  "Using reduce implementation:",
  // arr -> nums
  // func -> (acc, n) => acc + n
  // acc -> 0
  reduce(nums, (acc, n) => acc + n, 0)
);

console.log(
  "Using built-in .reduce() method:",
  nums.reduce((acc, currentValue, index, array) => {
    return acc + currentValue;
  })
);

export const totalScoresArr = (scoresArr) => {
  return scoresArr.reduce((acc, num) => {
    return acc + num * 2;
  });
};

console.log(totalScoresArr([1, 2, 3, 4]));
