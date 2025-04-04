// Create an arrow function that will generate an array of n random values between 1 and max

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
