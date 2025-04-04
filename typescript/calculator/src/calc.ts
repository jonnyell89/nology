export const calculate = (equation: string): number => {
  // + - / x in the equation
  // grab two numbers from the string
  // operate on the two numbers

  // Find the operator

  const operatorMatch = equation.match(/[+\-x/]/);
  if (!operatorMatch) {
    throw new Error("Invalid equation format.");
  }

  const operator = operatorMatch[0];

  const [num1, num2] = equation.split(operator).map((num) => parseFloat(num));

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Invalid numbers in equations.");
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      throw new Error("Not a valid operation.");
  }
};
