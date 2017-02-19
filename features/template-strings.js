// function sayHello (name = 'world'){
// 	console.log('Hello ' + name + "!");
// 	console.log(`Hello ${name}!`);
// }

// sayHello();
// sayHello('Kate');

// console.log(`1 + 6 = ${1 + 6}`);
// console.log(`Hey,

// THis looks like an email!
// - ANdrew

// `);

var person = {
	name: 'Andrew',
	age: 25
};

var default = {
	name: 'anonymous',
	age: 25
};


function printPerson (person = default){
	console.log(`Hello ${person.name} your age is ${person.age}` );
}

printPerson();
printPerson(person);