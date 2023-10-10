// Function to calculate a letter grade based on a score and total marks
function calculateLetterGrade(score, total) {
    const percentage = (score / total) * 100;
  
    if (percentage >= 90) {
      return 'A';
    } else if (percentage >= 80) {
      return 'B';
    } else if (percentage >= 70) {
      return 'C';
    } else if (percentage >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }
  console.log(calculateLetterGrade(66, 80)); // Output: 'B'
  
  // Function to count the number of vowels in a string
  function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  console.log(countVowels('Hello, World!')); // Output: 3
  
  // Function to find the longest word in a sentence
  function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
  
    for (let word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  console.log(findLongestWord('This is a test sentence')); // Output: 'sentence'

// This is a function that calculates a letter grade based on a given score (grade) and the total possible score (total).
// The function takes two inputs: grade (the score you got) and total (the highest possible score).
function calculateLetterGrade(grade, total) {
    // First, it calculates the percentage of the score you got.
    const percentage = (grade / total) * 100;

    // Then, it determines your letter grade based on the following scale:
    if (percentage >= 90) {
        return 'A';
    } else if (percentage >= 80) {
        return 'B';
    } else if (percentage >= 70) {
        return 'C';
    } else if (percentage >= 60) {
        return 'D';
    } else {
        return 'F'; // If the percentage is lower than 60, you get an 'F' (fail).
    }
}

// Example usage:
// Suppose you got a score of 85 out of a total possible score of 100.
const grade = 85;
const total = 100;

// Now, we use the calculateLetterGrade function to find your letter grade.
const letterGrade = calculateLetterGrade(grade, total);

// Finally, we display your letter grade in the console.
console.log(`Your letter grade is: ${letterGrade}`);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let computerTotal = getRandomNumber(1, 5);
let userTotal = 0;

function isValidInput(userNumber) {
  return userNumber >= 1 && userNumber <= 5;
}

function askForUserInput() {
  rl.question('Enter a number between 1 and 5: ', (userInput) => {
    const userNumber = parseInt(userInput);

    if (isValidInput(userNumber)) {
      addToTotal(userNumber);
    } else {
      console.log('Please enter a valid number between 1 and 5.');
      askForUserInput();
    }
  });
}

function addToTotal(userNumber) {
  userTotal += userNumber;
  const computerNumber = getRandomNumber(1, 5);
  computerTotal += computerNumber;
  console.log(`Computer's number: ${computerNumber}`);
  console.log(`Your current total is: ${userTotal}`);
  
  checkGameStatus();
}

function checkGameStatus() {
  if (userTotal === 21) {
    endGame('Congratulations! You got 21 and won!');
  } else if (userTotal > 21) {
    endGame('Sorry, you went over 21. You lose!');
  } else {
    askForUserInput();
  }
}

function endGame(message) {
  console.log(message);
  rl.close();
}

console.log('Welcome to Blackjack!');
askForUserInput();

  