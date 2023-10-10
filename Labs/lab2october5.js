// Banking System
class BankAccount {
    constructor(accountHolderName, balance) {
      this.accountHolderName = accountHolderName;
      this.balance = balance;
    }
  
    deposit(amount) {
      this.balance += amount;
      return `Deposited $${amount}. New balance is $${this.balance}`;
    }
  
    withdraw(amount) {
      if (amount <= this.balance) {
        this.balance -= amount;
        return `Withdrawn $${amount}. New balance is $${this.balance}`;
      } else {
        return `Insufficient funds. Current balance is $${this.balance}`;
      }
    }
  
    getBalance() {
      return `Current balance is $${this.balance}`;
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountHolderName, balance, minimumBalance) {
      super(accountHolderName, balance);
      this.minimumBalance = minimumBalance;
    }
  
    withdraw(amount) {
      if (this.balance - amount >= this.minimumBalance) {
        this.balance -= amount;
        return `Withdrawn $${amount}. New balance is $${this.balance}`;
      } else {
        return `Withdrawal failed. Minimum balance of $${this.minimumBalance} must be maintained.`;
      }
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(accountHolderName, balance, overdraftLimit) {
      super(accountHolderName, balance);
      this.overdraftLimit = overdraftLimit;
    }
  
    withdraw(amount) {
      const availableBalance = this.balance + this.overdraftLimit;
      if (amount <= availableBalance) {
        this.balance -= amount;
        return `Withdrawn $${amount}. New balance is $${this.balance}`;
      } else {
        return `Withdrawal failed. Exceeds overdraft limit of $${this.overdraftLimit}.`;
      }
    }
  }
  
  // Testing the system
  const savingsAccount = new SavingsAccount("John Doe", 1500, 500);
  console.log(savingsAccount.withdraw(100)); // Should succeed
  console.log(savingsAccount.withdraw(1200)); // Should fail
  console.log(savingsAccount.getBalance()); // Should show new balance
  
  const checkingAccount = new CheckingAccount("Jane Smith", 500, 300);
  console.log(checkingAccount.withdraw(200)); // Should succeed
  console.log(checkingAccount.withdraw(1000)); // Should succeed with overdraft
  console.log(checkingAccount.withdraw(500)); // Should fail due to exceeding overdraft
  console.log(checkingAccount.getBalance()); // Should show new balance