const num1 = 5;
const num2 = 4;
const numCompared = 5 > 4;

console.log(num1);
console.log(num2);
console.log(numCompared);

let age = prompt("How old are you?");

if (age < 18) {
  console.log("You are underage");
} else {
  console.log("You are old enough");
}

let maths = prompt("What is the result for 2+2+1?");

switch (maths) {
  case "5":
    console.log("True!");
    break;
  case "3":
  case "4":
    console.log("False!");
    break;
  default:
    console.log("False!");
    break;
}

let days = prompt("How many days does usually 1 month have?");

let answers =
  days < 30
    ? "It's more than that!"
    : days > 30
    ? "It's less than that!"
    : "You're right!";

console.log(answers);
