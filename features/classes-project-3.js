class BankAccount{
	
	constructor(balance,foo){
		this.balance = typeof balance === 'number' ? balance : 0;
	}
	deposit(amount){
		typeof amount !== 'number' ? console.log(`Amount entered is not a string`) : this.balance = this.balance + amount;
	}
	withdrawl(amount){
		typeof amount !== 'number' ? console.log(`Amount entered is not a string`) : this.balance = this.balance - amount;
	}

	set balance(balance){
		this._balance = balance;
		this.balanceLastUpdated = new Date();
	}

	get balance(){
		return this._balance;
	}

	printBalance(){
		console.log(`Your account balance is ${this.balance} which was updated on ${this.balanceLastUpdated}`);
	}
}

class SavingsAccount extends BankAccount{
	constructor(balance){
		super(balance);
	}
	withdrawl(amount){
		console.log(`Sorry cannot withdraw from savings account`);
	}
	deposit(amount){
		console.log(`You have saved an additional $ ${amount} dollars`);
		super.deposit(amount);
	}
}

var savingsAccount = new SavingsAccount(500);
savingsAccount.deposit(100);
savingsAccount.printBalance();
savingsAccount.withdrawl(25);
savingsAccount.printBalance();
