// var myMap = new Map();

// //Set

// myMap.set('name','Andrew');

// console.log(myMap.get('name'));

// myMap.set('age',25);
// console.log(myMap.has('age'));

// //Delete
// myMap.delete('name');

// myMap.clear();

// //Size
// console.log(myMap.size);

// var user ={name : "Tarif"};
// myMap.set(user,'Boston');
// console.log(myMap.get(user));

// var myMap = new Map();
// myMap.set(1,'Tarif');
// myMap.set(2,'Jen');
// myMap.set(3,'Abbie');

// console.log([...myMap]);
// console.log(myMap.keys());
// console.log(myMap.values());

// Challenge area

var location = {name: 'Boston'};
var secondLocation = {name: 'Stockholm'}

var weather = new Map();

var setWeather = (location, temp) => {
	weather.set(location,temp);
}

var printWeather = (location) => {
	if(!weather.has(location))
		console.log(`Weather not found for ${location.name}`);
	else
		console.log(`Temperature for ${location.name} is ${weather.get(location)}`);

}

setWeather(location,40);
setWeather(secondLocation,42);
printWeather(location);
printWeather({name: 'Washington'});
printWeather(secondLocation);
