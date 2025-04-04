import "./style.css";

// Selecting HTML elements through the DOM

// querySelector() returns the first Element within the document that matches the specified CSS selector, or group of CSS selectors.
const firstDiv = document.querySelector<HTMLDivElement>("#firstDiv");
const secondDiv = document.querySelector<HTMLDivElement>("#secondDiv");
const firstPara = document.querySelector<HTMLParagraphElement>("#firstPara");
const btn = document.querySelector<HTMLButtonElement>("button");

// Examples
const myList = document.querySelector<HTMLUListElement>("List");
const myInput = document.querySelector<HTMLInputElement>("Input");

// querySelectorAll() returns a static NodeList of matching elements.
const allParas = document.querySelectorAll<HTMLParagraphElement>(".para");

// Returns an empty list (since no `.list-items` exist in HTML).
const allListItems = document.querySelectorAll<HTMLLIElement>(".listItems");

// Manipulating HTML

if (firstPara === null) {
  throw new Error(`This element could not be found on the HTML document.`);
}

if (!firstPara || !firstDiv) {
  throw new Error(`This element could not be found on the HTML document.`);
}

firstPara.innerText = "HELLO";

secondDiv.textContent = "This is my second div.";
secondDiv.innerText = "This is my second div.";

firstPara.style.background = "red";
firstPara.style.fontFamily = "Times";

// allParas
allParas.forEach((para) => {
  para.style.border = "2px solid yellow";
});

// Define a constant for the number of list items
const LI_TOTAL: number = 10;

// Append list items
for (let i = 0; i < LI_TOTAL; ++i) {
  const listItem = document.createElement("li");
  listItem.textContent = `Item ${i + 1}`;
  myList.appendChild(listItem);
}

// Event listeners
const handleButtonClick = () => {
  console.log("Button was clicked");
  const userText = prompt("Enter text here:");
  if (userText) paraOne.textContent += ` ${userText}`;
};

// Fixed event listener type (use lowercase "click")
btn?.addEventListener("click", handleButtonClick);

const handleParaHover = (event: Event) => {
  const para = event.currentTarget as HTMLParagraphElement;
  para.style.color = "blue";
  para.classList.add("text--underline");
};

// Apply hover effects to all paragraphs
allParas.forEach((para) => {
  para.addEventListener("mouseover", handleParaHover);
  para.addEventListener("mouseleave", () => {
    para.style.color = "white";
    para.classList.remove("text--underline");
  });
});
