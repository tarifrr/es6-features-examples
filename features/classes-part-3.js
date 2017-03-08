class Person{
	constructor(name){
		this.name = typeof name === 'string'? name : 'Anonymous';
	}

	printGreeting(){
		console.log(`Hi I am ${this.name}!`);
	}

	set name(name){
		this._name = Person.capitalizeWord(name);
	}

	get name(){
		return this._name;
	}


	static capitalizeWord(word){
		return word[0].toUpperCase() + word.slice(1);
	}
}

class Employee extends Person{
	constructor(name,jobtitle = 'Unemployed'){
		super(name);
		this.jobtitle = jobtitle;
	}

	set jobtitle(jobtitle){
		this._jobtitle = jobtitle;
	}

	get jobtitle(){
		return this._jobtitle;
	}

	printGreeting(){
		console.log(`Hi I am ${this.name} and I currently work as a ${this.jobtitle}!`);	
	}
}




var person1 = new Employee('tarif');
//console.log(person1.name);
person1.printGreeting();

var person2 =  new Person();
//console.log(person2.name);
person2.printGreeting();

console.log(Person.capitalizeWord('mike'));
