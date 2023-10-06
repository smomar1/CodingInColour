const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const minNumber = 1;
const maxNumber = 100;
const targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let attempts = 0;

function checkGuess(guess) {
  const difference = Math.abs(targetNumber - guess);

  if (difference === 0) {
    console.log(`Congratulations! You guessed the correct number (${targetNumber}) in ${attempts} attempts.`);
    rl.close();
  } else if (difference <= 10) {
    console.log('Warm');
  } else {
    console.log('Cold');
  }
}

function takeGuess() {
  rl.question(`Guess a number between ${minNumber} and ${maxNumber}: `, (input) => {
    const guess = parseInt(input);

    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
      console.log('Invalid input. Please enter a valid number between 1 and 100.');
    } else {
      attempts++;
      checkGuess(guess);

      if (attempts < 10) {
        takeGuess(); // Continue taking guesses
      } else {
        console.log(`Sorry, you've reached the maximum number of attempts. The correct number was ${targetNumber}.`);
        rl.close();
      }
    }
  });
}

console.log('Welcome to the Number Guesser Game!');
console.log('Try to guess the correct number between 1 and 100.');
takeGuess();
