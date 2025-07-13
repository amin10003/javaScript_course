class BankAccount {
  // Private field (only accessible inside the class)
  #balance = 0;

  constructor(owner) {
    this.owner = owner;
  }

  // Public method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`${this.owner} deposited $${amount}.`);
    } else {
      console.log("Deposit must be greater than 0.");
    }
  }

  // Public method to withdraw money
  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`${this.owner} withdrew $${amount}.`);
    } else {
      console.log("Insufficient balance.");
    }
  }

  // Public method to view balance
  getBalance() {
    return this.#balance;
  }
}


const myAccount = new BankAccount("Mohamed");

myAccount.deposit(1000);      // Mohamed deposited $1000.
myAccount.withdraw(300);      // Mohamed withdrew $300.
console.log(myAccount.getBalance()); // 700

// Direct access to #balance is NOT allowed:
// console.log(myAccount.#balance);   // ❌ SyntaxError: Private field '#balance' must be declared in an enclosing class



const MomsAccount = new BankAccount("Barni");

MomsAccount.deposit(12500);
MomsAccount.withdraw(500);
console.log(MomsAccount.getBalance())