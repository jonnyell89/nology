import "./style.css";

const URL = "https://rickandmortyapi.com/api/character";
const MAX_CHAR = 826;

type Character = {
  name: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  episodes: number;
};

const randomArrayGenerator = (amount: number, max: number) => {
  // debugger;
  const randomArray: number[] = [];
  for (let i = 0; i < amount; i++) {
    randomArray.push(Math.ceil(Math.random() * max));
  }
  return randomArray;
};

console.log(randomArrayGenerator(5, 826));

const getCharacters = async (
  characterArray: number[]
): Promise<Character[]> => {
  try {
    const response = await fetch(`${URL}/${characterArray}`);
    const data = await response.json();

    // fetch() and .json() are very tightly coupled: once fetch() is done 'then' call .json()
    // const data = await fetch(`${URL}/${characterArray}`).then(
    //   async (response) => {
    //     return await response.json();
    //   }
    // );

    if (!response.ok) {
      throw new Error(
        `API error: API request failed: ${response.status}, ${response.statusText}`
      );
    }

    const cleanData = data.map((char: any) => {
      const { name, image, origin, episode } = char;
      const episodes = episode.length;
      return { name, image, origin, episodes };
    });

    return cleanData;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Fetch failed: ${error.message}`);
    } else {
      console.error("Unknown Error: ", error);
      throw new Error("An unknown error has occurred.");
    }
    return [];
  }
};

// console.log(await getCharacters(randomArrayGenerator(5, MAX_CHAR)));

const characters = await getCharacters(randomArrayGenerator(5, MAX_CHAR));
const charList = document.querySelector<HTMLDivElement>("#display");

const charCardGenerator = (char: Character) => {
  const card = document.createElement(ElementType.CARD);
  // card.classList.add("charCard");
  card.innerHTML = `<p>Name: ${char.name}</p>
  <img src="${char.image}" alt="${char.name}" />
  <p>Origin: ${char.origin.name}</p>
  <p>Episodes: ${char.episodes}</p>`;
  return card;
};

characters.forEach((char) => {
  charList?.appendChild(charCardGenerator(char));
});

console.log(randomArrayGenerator(5, MAX_CHAR));

enum ElementType {
  CARD = "div",
  TEXT = "p",
  IMAGE = "img",
}
