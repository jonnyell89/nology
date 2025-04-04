import "./style.scss";
import { calculate } from "./calc";

// Setting global variables
let hasOperatorBeenClicked: boolean = false; // To avoid multiple operator
let lastOperator: string | null = null; // To track the last operator to be clicked
let result: number = null;

// Capturing elements to interact with.

const display = document.querySelector<HTMLInputElement>("#display");
const equal = document.querySelector<HTMLButtonElement>("#equal");
const buttons = document.querySelectorAll<HTMLButtonElement>(".calc__btn");

if (!display || !equal) {
  throw new Error("Some elements were not found.");
}

const registerClick = (event: Event) => {
  const target = event.currentTarget as HTMLButtonElement;

  // When AC is pressed:

  if (target.innerText === "AC") {
    display.value = "0";
    return;
  }

  if (target.innerText === "DEL") {
    display.value = display.value.slice(0, -1);
    if (display.value === "") display.value = "0";
    return;
  }

  // When operators are pressed:

  if (target.innerText.match(/[+\-x/]/)) {
    // Avoid multiple operators.
    if (hasOperatorBeenClicked) {
      display.value = display.value.slice(0, -1) + target.innerText;
    } else {
      display.value += target.innerText;
    }

    hasOperatorBeenClicked = true;
    lastOperator = target.innerText;
    return;
  }

  // When decimal point is pressed:
  if (target.innerText === ".") {
    // Avoid multiple decimal points.
    if (
      display.value
        .split(/[+\-x/]/)
        .pop()
        ?.includes(".")
    )
      return;
  }

  // When DEL is pressed:

  if (target.innerText === "=") {
  } else {
    display.value += target.innerText;
  }

  display.value += target.innerText;
};

buttons.forEach((btn) => btn.addEventListener("click", registerClick));

const handleEqualClick = () => {
  // result = calculate(display.value);

  const currentDisplay = display.value;
  const result = calculate(currentDisplay).toString();
  display.value = result;
};

equal.addEventListener("click", handleEqualClick);
