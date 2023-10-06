const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let balance = 100; // Initial account balance

function displayBalance() {
  console.log(`Your account balance: $${balance.toFixed(2)}`);
}

function depositOrWithdraw() {
  rl.question('Enter the amount you want to deposit or withdraw (positive for deposit, negative for withdraw, 0 to exit): ', (input) => {
    const amount = parseFloat(input);

    if (isNaN(amount)) {
      console.log('Invalid input. Please enter a valid number.');
      depositOrWithdraw();
    } else if (amount === 0) {
      console.log('Thank you. Have a nice day!');
      rl.close();
    } else {
      updateBalance(amount);
      displayBalance();
      depositOrWithdraw();
    }
  });
}

function updateBalance(amount) {
  balance += amount;
}

console.log('Welcome to the ATM simulator!');
displayBalance();
depositOrWithdraw();