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

var account = new BankAccount(100);
account.deposit(100);
account.withdrawl(10);
account.printBalance();