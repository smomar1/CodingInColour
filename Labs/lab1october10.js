// 1. Create an array of words to choose from.
// 2. Randomly select a word from the array.
// 3. Initialize variables to keep track of:
//    - The selected word
//    - The player's guessed letters
//    - The number of incorrect guesses
//    - The maximum allowed incorrect guesses (e.g., 6)
// 4. Create a function to display the current state of the word with underscores and guessed letters.
// 5. Create a function to get a single letter guess from the player.
// 6. Create a function to check if the guessed letter is in the word.
// 7. Create a function to update the word display based on correct guesses.
// 8. Create a function to check if the game has been won or lost.
// 9. Main game loop:
//    - Display the current state of the word.
//    - Prompt the player for a guess.
//    - Check if the guess is valid (a single letter that hasn't been guessed before).
//    - Update the guessed letters and check if the letter is in the word.
//    - Update the number of incorrect guesses if needed.
//    - Check if the game has ended (win or lose).
//    - Repeat until the game ends.
// 10. End the game and display the result.
// 11. Allow the player to play again if they wish.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const words = ['javascript', 'hangman', 'programming', 'nodejs', 'openai'];
let selectedWord = '';
let guessedLetters = [];
let incorrectGuesses = 0;
const maxIncorrectGuesses = 6;

function chooseRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
  let display = '';
  for (const letter of selectedWord) {
    if (guessedLetters.includes(letter)) {
      display += letter;
    } else {
      display += '_';
    }
  }
  return display;
}

function getGuess() {
  return new Promise(resolve => {
    rl.question('Guess a letter: ', guess => {
      resolve(guess.toLowerCase());
    });
  });
}

function updateGuessedLetters(letter) {
  if (!guessedLetters.includes(letter)) {
    guessedLetters.push(letter);
  }
}

function checkGuess(letter) {
  if (selectedWord.includes(letter)) {
    updateWordDisplay();
  } else {
    incorrectGuesses++;
    updateWordDisplay();
  }
}

function updateWordDisplay() {
  console.clear(); // Clear the console for a cleaner display.

  console.log(`Word: ${displayWord()}`);
  console.log(`Guessed Letters: ${guessedLetters.join(', ')}`);
  console.log(`Incorrect Guesses: ${incorrectGuesses} / ${maxIncorrectGuesses}`);

  if (incorrectGuesses > 0) {
    console.log(displayHangman(incorrectGuesses));
  }
}

function displayHangman(incorrectGuesses) {
  const hangmanParts = [
    '_____',
    '  |  ',
    '  |  ',
    '  O  ',
    ' /|\\ ',
    ' / \\ '
  ];

  let display = '';
  for (let i = 0; i < incorrectGuesses; i++) {
    display += hangmanParts[i] + '\n';
  }
  return display;
}

function isGameOver() {
    if (displayWord() === selectedWord) {
      console.log(`You win! The word is "${selectedWord}"`);
      return true;
    } else if (incorrectGuesses >= maxIncorrectGuesses) {
      console.log(`You lose! The word was "${selectedWord}"`);
      return true;
    }
    return false;
  }
  
  
async function playHangman() {
  selectedWord = chooseRandomWord();

  console.log('Welcome to Hangman!');

  while (!isGameOver()) {
    const guess = await getGuess();

    if (guess.length !== 1 || !/[a-z]/.test(guess)) {
      console.log('Invalid guess. Please enter a single letter.');
      continue;
    }

    updateGuessedLetters(guess);
    checkGuess(guess);
  }

  rl.close();
}

playHangman();
