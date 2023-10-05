const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to guess a number between 1 and 10
rl.question("Guess a number between 1 and 10: ", function(userGuess) {
  const userNumber = parseInt(userGuess);

  if (userNumber === randomNumber) {
    console.log("Congratulations! You guessed the correct number!");
  } else if (userNumber > randomNumber) {
    console.log("Your guess is too high. Try again.");
  } else if (userNumber < randomNumber) {
    console.log("Your guess is too low. Try again.");
  } else {
    console.log("Oops! That's not a valid number between 1 and 10. Please try again.");
  }

  rl.close();
});
