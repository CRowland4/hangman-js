const input = require('sync-input');

const wordChoices = ["python", "java", "swift", "javascript"];

function getRandomElement(elements) {
  index = Math.floor(Math.random() * elements.length);
  return elements[index];
}

function playGame() {
  console.log("H A N G M A N")

  let gameWord = getRandomElement(wordChoices);
  let guess = input("Guess the word: ")

  if (guess === gameWord) {
    console.log("You survived!");
  } else {
    console.log("You lost!");
  }
}

playGame()
