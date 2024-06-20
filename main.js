const input = require('sync-input');

console.log("H A N G M A N")
let guess = input("Guess the word: ")

if (guess === "python") {
  console.log("You survived!");
} else {
  console.log("You lost!");
}