// class Person{
// 	constructor(name){
// 		this.name = typeof name === 'string'? name : 'Anonymous';
// 	}

// 	printGreeting(){
// 		console.log(`Hi I am ${this.name}!`);
// 	}

// 	set name(name){
// 		this._name = Person.capitalizeWord(name);
// 	}

// 	get name(){
// 		return this._name;
// 	}


// 	static capitalizeWord(word){
// 		return word[0].toUpperCase() + word.slice(1);
// 	}
// }

// var person1 = new Person('tarif');
// person1.name = 'jarib';
// //console.log(person1.name);
// person1.printGreeting();

// var person2 =  new Person();
// //console.log(person2.name);
// person2.printGreeting();

// console.log(Person.capitalizeWord('mike'));

var obj = {

	set age(age){
		this._age = age + 12;
	},

	get age(){
		return this._age;
	}

}

obj.age = 32;
console.log(obj.age);