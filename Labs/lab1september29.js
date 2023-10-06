// Pseudocode:
// 1. Generate a random number between 1 and 5 for the computer's initial value.
// 2. Initialize a variable to keep track of the user's total.
// 3. Repeat the following steps until the user's total is 21 or above:
//    a. Ask the user for a number between 1 and 5.
//    b. Add the user's number to their total.
//    c. Check if the total is 21 or above.
//       - If the total is 21, the user wins.
//       - If the total is above 21, the user loses.
//       - Otherwise, continue the game.
// 4. End the game.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to get a random number between 1 and 5
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to play the Blackjack game
function playBlackjack() {
  // Computer's initial number
  const computerNumber = getRandomNumber(1, 5);
  let userTotal = 0; // Initialize your total to 0

  console.log('Welcome to Blackjack!');
  console.log(`The computer's starting number is: ${computerNumber}`);

  // Function to ask the user for a number
  function askUserForNumber() {
    rl.question('Enter a number between 1 and 5: ', (userNumber) => {
      userNumber = parseInt(userNumber); // Convert user's input to a number

      // Check if the user entered a valid number between 1 and 5
      if (userNumber >= 1 && userNumber <= 5) {
        userTotal += userNumber; // Add the user's number to their total

        // Check if the user won, lost, or needs to keep playing
        if (userTotal === 21) {
          console.log('Congratulations! You got 21 and won!');
          rl.close(); // End the game
        } else if (userTotal > 21) {
          console.log('Sorry, you went over 21. You lose!');
          rl.close(); // End the game
        } else {
          console.log(`Your current total is: ${userTotal}`);
          askUserForNumber(); // Ask for another number
        }
      } else {
        console.log('Please enter a valid number between 1 and 5.');
        askUserForNumber(); // Ask for a valid number again
      }
    });
  }

  askUserForNumber(); // Start the game by asking for the user's number
}

playBlackjack(); // Start the Blackjack game
