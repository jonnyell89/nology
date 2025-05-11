import "./style.css";
import { DogImage } from "./dog";

// HTTP - Hypertext Transfer Protocol
// API - Application Programme Interface
// CRUD - Create, Read, Update, Delete.
// Create - POST or PUT
// Read - GET
// Update - PUT or PATCH
// Delete - DELETE

// Async Programming
// JavaScript is a single thread programming language =>
// Reads sequentially, line by line.

// Synchronous code:
console.log("Hello");
console.log("Good bye");

// When talking to an API or a server or a database => It is not known how long it will take to receive the requested data.
// There is no guarantee that the data will be returned.

// Asynchronous code:
// JavaScript is told not to wait until the end of the process before processing the rest of the code.
// It will resolve the process whenever it is ready to do so.

// const apiCall = (s: string, t: number) => {
//   setTimeout(() => {
//     console.log(s);
//   }, t);
// };

// const myApplicationProcess = () => {
//   console.log("Before apiCall");
//   apiCall("apiCall has returned data", 3000);
//   console.log("After apiCall");
// };

// myApplicationProcess();

// const btn = document.querySelector<HTMLButtonElement>("button");
// const container = document.querySelector<HTMLDivElement>("#imgContainer");

// if (!container || !btn) {
//   throw new Error("One or both HTML elements were not detected.");
// }

// // This function must be asynchronous because it is talking to an API
// // An async function returns a Promise
// const getRandomDogImage = async (): Promise<DogImage> => {
//   const response = await fetch("https://dog.ceo/api/breeds/image/random");
//   // console.log("response: ", response);
//   if (response.status !== 200) {
//     throw new Error("Something went wrong.");
//   }
//   // Data response
//   // .json method converts JSON data from response body to a JavaScript object
//   const data = await response.json();
//   // console.log(data);
//   return { imgURL: data.message };
// };

// console.log(await getRandomDogImage());

// const handleBtnClick = async () => {
//   const dogImage = await getRandomDogImage();
//   const img = document.createElement("img");
//   img.src = dogImage.imgURL;
//   img.alt = "RANDOM DOG";
//   container.innerHTML = "";
//   container.appendChild(img);
// };

// btn.addEventListener("click", handleBtnClick);

// Get data from an API
// Get at least 5 character entries and display the name, image, origin/location, number of episodes.
// All information displayed on application front end.

// Split work (HTML, SCSS, TS Logic)
// Read documentation
// Play with API in Postman
// TS Logic: display one character (log it, then try and display it)
// Try to get all 5 characters: log them, display them
// Promise.all()

type Character = {
  name: string;
  image: string;
  origin: object;
  episode: string[];
};

// fetch()

// const getCharacter = async (ids: number[]): Promise<Character[]> => {
//   const data = await fetch(`https://rickandmortyapi.com/api/character/${ids}`);
//   const character = await data.json();

//   return character.map((item: Character) => {
//     //const episode = item.episode.length
//     return {
//       name: item.name,
//       image: item.image,
//       origin: item.origin,
//       episode: item.episode.length,
//     };
//   });
// };

// Promise.all()

const getCharacter = async (id: number): Promise<Character> => {
  const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character = await data.json();

  // return character.map((item: Character) => {
  // const episode = item.episode.length
  return {
    name: character.name,
    image: character.image,
    origin: character.origin,
    episode: character.episode.length,
  };
};

// const characters = await getCharacter([1, 2, 3, 4, 5]).then((value) => {
//   console.log(value);
// });

// console.log(characters);

const buttonElement = document.querySelector<HTMLButtonElement>("button");
const display = document.querySelector<HTMLDivElement>("#display");

if (!buttonElement || !display) {
  throw new Error("An element has failed to load.");
}

// fetch()

// const handleClick = async () => {
//   const characters = await getCharacter([1, 2, 3, 4, 5]);
//   characters.forEach((char) => {
//     const p = document.createElement("P");
//     p.innerText = char.name;
//     display.appendChild(p);
//   });
//   return characters;
// };

// Promise.all()

const handleClick = async () => {
  const characters = await Promise.all([
    getCharacter(1),
    getCharacter(2),
    getCharacter(3),
    getCharacter(4),
    getCharacter(5),
  ]);

  // const characterOne = await getCharacter(1);
  // const characterTwo = await getCharacter(2);
  // const characterThree = await getCharacter(3);
  // const characterFour = await getCharacter(4);
  // const characterFive = await getCharacter(5);

  // const characters = await Promise.all([
  //   characterOne,
  //   characterTwo,
  //   characterThree,
  //   characterFour,
  //   characterFive,
  // ]);

  // console.log(characters);

  // characters.forEach((char) => {
  //   const p = document.createElement("P");
  //   p.innerText = char.name;
  //   display.appendChild(p);
};
//return characters;
//};

buttonElement.addEventListener("click", handleClick);
