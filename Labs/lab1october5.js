// Rock, Paper, Scissors Game
// We need to use the readline module to get user input.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let play = true; // This variable decides if we want to keep playing.

// This function helps us get valid user input.
function getUserInput(question, validChoices) {
  return new Promise((resolve) => {
    rl.question(question, (userInput) => {
      userInput = userInput.toLowerCase();
      if (validChoices.includes(userInput)) {
        resolve(userInput);
      } else {
        console.log('Invalid input. Please choose from: ' + validChoices.join(', '));
        resolve(getUserInput(question, validChoices));
      }
    });
  });
}

// This function randomly picks rock, paper, or scissors for the computer.
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

// This function decides who wins a round and updates the scores.
function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return 'tie';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'user';
  } else {
    return 'computer';
  }
}

// This function shows the scores for the current round.
function printRoundScore(userScore, computerScore) {
  console.log(`Current Scores: User: ${userScore}, Computer: ${computerScore}`);
  console.log('---------------------------------------');
  console.log();
}

// This function shows the final scores at the end of the game.
function printFinalScore(userScore, computerScore) {
  console.log(`Final Scores: User: ${userScore}, Computer: ${computerScore}`);
  console.log('---------------------------------------');
}

// The main game loop starts here.
(async () => {
  while (play) {
    let roundsLeft = 5; // Number of rounds to play.
    let userScore = 0; // User's score.
    let computerScore = 0; // Computer's score.

    while (roundsLeft > 0) {
      const validChoices = ['rock', 'paper', 'scissors'];
      const userInput = await getUserInput("Choose Rock, Paper, or Scissors: ", validChoices);
      const computerChoice = getComputerChoice();

      console.log("You chose: ", userInput);
      console.log("Computer chose: ", computerChoice);

      const roundWinner = determineWinner(userInput, computerChoice);

      if (roundWinner === 'tie') {
        console.log("It's a tie!");
      } else if (roundWinner === 'user') {
        userScore++;
        console.log("User wins the round!");
      } else {
        computerScore++;
        console.log("Computer wins the round!");
      }

      printRoundScore(userScore, computerScore);
      roundsLeft--;
    }

    printFinalScore(userScore, computerScore);

    const replay = await getUserInput("Do you want to play again (yes/no)?: ", ['yes', 'no']);
    if (replay !== 'yes') {
      console.log("Thanks for playing :)");
      play = false;
    }
  }

  rl.close();
})();
  