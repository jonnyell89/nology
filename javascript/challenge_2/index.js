const parent1 = "blue";
const parent2 = "green";
let combination = parent1 + " " + parent2;

switch (combination) {
  case "brown brown":
    console.log("If Brown plus Brown: Brown 75%, Green 18.75%, Blue 6.25%");
    break;
  case "green brown":
  case "brown green":
    console.log("If Brown plus Brown: Brown 50%, Green 37.5%, Blue 12.5%");
    break;
  case "blue brown":
  case "brown blue":
    console.log("If Brown plus Brown: Brown 50%, Green 0%, Blue 50%");
    break;
  case "green green":
    console.log("If Brown plus Brown: Brown <1%, Green 75%, Blue 25%");
    break;
  case "green blue":
  case "blue green":
    console.log("If Brown plus Brown: Brown 0%, Green 50%, Blue 50%");
    break;
  case "blue blue":
    console.log("If Brown plus Brown: Brown 0%, Green 1%, Blue 99%");
    break;
  default:
    console.log("Invalid input");
}

// const parentsOne = "green";
// const parentsTwo = "blue";
// let combination = parentsOne + " " + parentsTwo;
// switch (combination) {
//   case "brown brown":
//     console.log(
//       "Your eye colours are brown and brown, the chances of your child having blue eyes is 6.25%, brown is 75% and green is 18.75%"
//     );
//     break;
//   case "brown blue":
//   case "blue brown":
//     console.log(
//       "Your eye colours are brown and blue, the chances of your child having blue eyes is 50%, brown is 50% and green is 0%"
//     );
//     break;
//   case "brown green":
//   case "green brown":
//     console.log(
//       "Your eye colours are brown and green, the chances of your child having blue eyes is 12.5%, brown is 50% and green is 37.5%"
//     );
//     break;
//   case "green green":
//     console.log(
//       "Your eye colours are green and green, the chances of your child having blue eyes is 25%, brown is <1% and green is 75%"
//     );
//     break;
//   case "green blue":
//   case "blue green":
//     console.log(
//       "Your eye colours are blue and green, the chances of your child having blue eyes is 50%, brown is 0% and green is 50%"
//     );
//     break;
//   case "blue blue":
//     console.log(
//       "Your eye colours are blue and blue, the chances of your child having blue eyes is 99%, brown is 0% and green is 1%"
//     );
//     break;
//   default:
//     console.log("invalid input!");
// }
