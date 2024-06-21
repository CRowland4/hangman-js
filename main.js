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
  let previousGuesses = [];

  while (remainingGuesses !== 0) {
    console.log(wordProgress);
    if (!wordProgress.includes("-")) {
      console.log(`You guessed the word ${wordProgress}!`);
      console.log("You survived!");
      return
    }

    let guess = input("Input a letter: ");
    if (guess.length !== 1) {
      console.log("Please, input a single letter.");
    } else if (!/[a-z]/.test(guess)) {
      console.log("Please, enter a lowercase letter from the English alphabet.");
    } else if (previousGuesses.includes(guess)) {
      console.log("You've already guessed this letter.");
    } else if (!gameWord.includes(guess)) {
      console.log("That letter doesn't appear in the word.");
      previousGuesses.push(guess);
      remainingGuesses--;
    } else if (gameWord.includes(guess)) {
      previousGuesses.push(guess);
      wordProgress = updateWordProgress(gameWord, wordProgress, guess);
    }
  }
  console.log("You lost!");
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
