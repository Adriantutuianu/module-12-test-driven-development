function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance]; // Initializing statement array with initial balance
  this.getBalance = () => {
    return this.balance;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
  // Add a `setBalance` function. This function should receive a `value` parameter and assign it to the `balance` property of `MiniBank`.
  this.setBalance = (value) => {
    this.balance = value;
  };
  //  Write an `updateStatement` function that takes in a number and pushes it to the `statement` array.
  this.updateStatement = (number) => {
    this.statement.push(number);
  };
  // Write a `getStatement` function that returns the `statement` property.
  this.getStatement = () => {
    return this.statement;
  };
  //Write a `printStatement` function that prints each element in the `statement` array on its own line.
  this.printStatement = () => {
    console.log("Statement: ");
    this.statement.forEach((element) => {
      console.log(element);
    });
  };
  // Write a `deposit` function that takes a value
  this.deposit = (value) => {
    this.updateStatement(value);
    this.setBalance(this.balance + value);
  };
  this.withdraw = (value) => {
    this.updateStatement(-value); // Using a negative number for withdrawal
    this.setBalance(this.balance - value);
  };
}
