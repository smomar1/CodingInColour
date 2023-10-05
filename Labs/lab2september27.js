// Generate a random number between 1 and 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

// Initialize variables
let attempts = 3; // You have 3 attempts
let isGameOver = false; // The game is not over yet

// Play the game until it's over
while (!isGameOver) {
  // Ask the user to guess a number and store it in a variable
  const userGuess = parseInt(prompt(`Guess a number between 1 and 10 (${attempts} attempts left):`));

  // Check if the user's input is not a valid number between 1 and 10
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    alert('Please enter a valid number between 1 and 10.');
  } else if (userGuess === randomNumber) {
    // If the user's guess is correct, show a congratulatory message and end the game
    alert(`Congratulations! You guessed the correct number (${randomNumber}).`);
    isGameOver = true; // The game is over
  } else {
    // If the guess is wrong, reduce the number of attempts
    attempts--;

    // Check if the user has run out of attempts
    if (attempts === 0) {
      alert(`Game over! The correct number was ${randomNumber}.`);
      isGameOver = true; // The game is over
    } else {
      // Provide a hint (too low or too high) and show the remaining attempts
      const message = userGuess < randomNumber ? 'Too low!' : 'Too high!';
      alert(`${message} You have ${attempts} attempts left.`);
    }
  }
}

// Play the game until it's over
while (!isGameOver) {
    guessNumber();
}