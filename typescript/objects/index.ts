// What are objects?
// How to create objects?
// How to access and modify existing objects?
// How can using a type alias help keep objects consistent?

// Objects store related information in a single variable.

// Use 'object literal' notation to create basic objects.

// Comma separated

// Use key: value pairs to store properties.

// A key describes the value associated with the object.

// A value is the data that is associated with the key.

// The value can be of any data type.

// Use const variables because the type of object doesn't change, just the content of the object.

// Each key: value pair relationship is called a property.

// Objects store related information in a single variable.
// Use 'object literal' notation to create basic objects.
// Each key: value pair relationship is called a property.

const person: any = {
  // [key]: [value],
  // a value can have ANY type BY DEFAULT
  name: "Remi",
  age: 35,
  isBritish: false,
  ukBased: true,
  pastCities: ["Sydney", "Paris"],
  citizenship: {
    aus: true,
    fr: true,
    gb: false,
  },
  1: true,
};

// Accessing data inside objects using dot notation:

// Accessing first level nesting in an object:
console.log(person.name); // "Remi"

// Accessing second level nesting in an object:
console.log(person.pastCities[1]); // "Paris"

// Accessing third level nesting in an object:
console.log(person.citizenship.gb); // false

console.log(
  "cities:",
  person.pastCities.map((cities: string) => {
    return `I have lived in ${cities}`;
  })
);

// Objects are not iterable:
console.log(person.citizenship.map((element) => element));

// Accessing data inside objects using bracket notation:

console.log(person["name"]); // "Remi"

// .json stands for JavaScript object notation

// To create types of objects:
// Use PacsalCase naming convention for types:
type Citizen = {
  name: string | string[];
  age: number;
  isBritish: boolean;
  hasAddress?: Address[];
};

// Use ? to indicate that a property can be undefined.

type Address = {
  postcode: string;
  city: string;
  country: string;
};

// An object of type Citizen must have all of the properties defined in the definition.
const pablo: Citizen = {
  name: "Pablo",
  age: 22,
  isBritish: true,
};

console.log(pablo); // {name: "Pablo", age: 22, isBritish: true}

console.log(Date.now()); // Unix timestamp since Jan 01, 1970.

// Copying objects

const myArray: number[] = [1, 2, 3, 4, 5];
const myArrayCopy = [...myArray]; // Spread operator ... copies everything from the original array into the target array.

type Cat = {
  name: string;
  breed: string;
  age: number;
};

const garfield: Cat = {
  name: "Garfield",
  breed: "Stray",
  age: 27,
};

const myNewCat: Cat = {
  name: garfield.name,
  breed: garfield.breed,
  age: garfield.age,
};

console.log(myNewCat.name); // "Garfield"

const bob = { ...garfield } as CatUpdate;

type CatUpdate = {
  name: string;
  breed: string;
  age: number;
  isAnnoying: boolean;
};

// Adding new properties

// It is possible to reassign properties to new values if they 'fit the given type of the aliases'?
bob.isAnnoying = false;

const myObject = {
  value: "string",
};

// In JavaScript, if a key: value pair is accessed that doesn't exist, JavaScript creates it.
// It is like the key: value assignment operator in Python.
// myObject.otherValue = 1; JavaScript
// myObject[otherValue] = 1 Python

// Object destructuring

// Global Scope:

// const catName = garfield.name;

// The properties of the Garfield object:
// const { name, breed, age, ...otherProperties } = garfield;

// console.log(name, breed, age) // Garfield Stray 27

// const { name, id, forms, sprites, ...trash } = response;
// const newThing = {name, id, forms, sprites}
// send newThing to DB

// Objects are not iterable, in TypeScript.
// How to access object KEYs and/or VALUES?

const allKeys = Object.keys(garfield);
console.log(allKeys); // Returns an array of KEYS

const allValues = Object.values(garfield);
console.log(allValues); // Returns an array of VALUES

const allEntries = Object.entries(allValues);
console.log(allEntries); // Returns an array of [KEY: VALUE] pairs.

console.log(allEntries[2][1]); // [Accesses the specific Key: Value array][Accesses the specific Value]

// To check if an object has properties:
const hasName = garfield.hasOwnProperty("name");
console.log(hasName); // true
