class BankAccount{
	
	constructor(balance){
		this.balance = typeof balance === 'number' ? balance : 0;
	}
	deposit(amount){
		typeof amount !== 'number' ? console.log(`Amount entered is not a string`) : this.balance = this.balance + amount;
	}
	withdrawl(amount){
		typeof amount !== 'number' ? console.log(`Amount entered is not a string`) : this.balance = this.balance - amount;
	}

	printBalance(){
		console.log(`Your account balance is ${this.balance}`);
	}
}

var account = new BankAccount(100);
account.deposit(100);
account.withdrawl(10);
account.printBalance();