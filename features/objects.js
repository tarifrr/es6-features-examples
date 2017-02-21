var age = 25;

var printHello = () => {
	console.log('hello');
}


var person = {
	name : 'Tarif',
	age, //shorthand, just mention variable name
	printHello,
	['hello' + (3+2)]: 'I am  here',
	printAge () {
		console.log(this.age);
	}
};

person.printAge()