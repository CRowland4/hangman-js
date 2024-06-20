const input = require('sync-input');

const wordChoices = ["python", "java", "swift", "javascript"];


function main() {
  console.log("H A N G M A N\n")
  let gameWord = getRandomElement(wordChoices);
  gameLoop(gameWord);
  console.log("Thanks for playing!");
}


function getRandomElement(elements) {
  let index = Math.floor(Math.random() * elements.length);
  return elements[index];
}


function gameLoop(gameWord) {
  let remainingGuesses = 8;
  let wordProgress = "-".repeat(gameWord.length);

  while (remainingGuesses !== 0) {
    console.log(wordProgress);
    let guess = input("Input a letter: ");

    if (gameWord.includes(guess)) {
      wordProgress = updateWordProgress(gameWord, wordProgress, guess);
    } else {
      console.log("That letter doesn't appear in the word.");
    }

    remainingGuesses--;
    console.log();
  }
}


function updateWordProgress(gameWord, wordProgress, guess) {
  let newProgress = "";

  for (let i = 0; i < gameWord.length; i++) {
    if (gameWord[i] === guess) {
      newProgress += guess;
    } else {
      newProgress += wordProgress[i];
    }
  }

  return newProgress;
}

main();
