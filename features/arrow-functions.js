 var people = ['Tarif','Jarib','John'];

// people.forEach(function (people){
// 	console.log(people);
// });

// people.forEach((people) => console.log(people));

// people.forEach((people) => {
// 	console.log('Welcome');
// 	console.log(people);
// });

// function add(a,b){
// 	return a + b;
// }

// implicit return call
//var add = (a,b) =>  (a+b);

// explicit return call
// var add = (a,b) => {return (a+b)};
// console.log(add(8,4));

var person = {
	name: 'Tarif',
	likes: ['Running','Reading'],
	generateGreeter: function (){
		return () =>{
			console.log("Hello " + this.name);
		}
	},
	printLikes: function (){
		this.likes.forEach( 
			(like) => {
				console.log(`${this.name} likes ${like}`);
			});
		}
}

person.generateGreeter()();
person.printLikes();
