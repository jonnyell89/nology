import data from "./data.json";

// Complex Data

// What are arrays of objects?
// Why do we use arrays of objects?
// How can we access data inside of an array of objects?
// How can we iterate through a collection of objects?

type Coach = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const coaches: Coach[] = [
  {
    id: 1,
    firstName: "Remi",
    lastName: "Hoeppe",
    age: 35,
    location: "London",
  },
  {
    id: 2,
    firstName: "Sam",
    lastName: "Joyce",
    age: 28,
    location: "Manchester",
  },
];

const overThirty = coaches.filter((coach) => coach.age >= 30);
console.log(overThirty); // 0: {id: 1, firstName: "Remi", lastName: "Hoeppe", age: 35, location: "London"}

console.log(coaches.find((coach) => coach.id === 1));
console.log(
  "Formatting full name:",
  coaches.map((coach) => {
    return `${coach.firstName} ${coach.lastName}`;
  })
);

// Using the JSON data, create a function to return a string to print the delivery address details for each user:
// 1: Full name
// 2: Blank line
// 3: Street
// 4: Number Unit
// 5: City
// 6: Zip Code

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
};

const formatAddresses = (users: User[]) => {
  const labelArray: string[] = [];
  users.forEach((user) => {
    labelArray.push(`
      ${user.name}\n
      ${user.address.street}\n
      ${user.address.suite}\n
      ${user.address.city}\n
      ${user.address.zipcode}
      `);
  });
  return labelArray;
};

console.log(formatAddresses(data));

// From console/src/main.ts

import "./style.css";
import data from "./data.json";
// In file with function: prefix function definition with export
// In file to export to: import { shippingLabelGenerator } from "./main.ts"

// npm run dev

// // The keys inside a JSON format will always be strings.
// // The values inside a JSON format will usually be strings or booleans?
// console.log(data);

// // Using the JSON data, create a function to return a string to print the delivery address details for each user:
// // 1: Full name
// // 2: Blank line
// // 3: Street
// // 4: Number Unit
// // 5: City
// // 6: Zip Code

type Client = {
  name: string;
  address: Address;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
};

// const shippingLabelGenerator = (client: Client): string => {
//   return `${client.name}\n\n${client.address.street}\n${client.address.suite}\n${client.address.city}\n${client.address.zipcode}`;
// };

// const batchLabelGenerator = (clientList: Client[]): string[] => {
//   return clientList.map((client) => shippingLabelGenerator(client));
//   // return clientList.map(shippingLabelGenerator);
// };

// console.log(shippingLabelGenerator(data[0]));

// console.log(batchLabelGenerator(data));

// for in used to iterate over an object
const client: Client = data[1];

for (const key in client) {
  console.log("key:", key);
  console.log("value:", client[key as keyof Client]);
}
