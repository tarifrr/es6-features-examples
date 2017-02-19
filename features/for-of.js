// var locations= [];

// locations.push({
// 	name: 'Boston',
// 	weather: 54
// });

// locations.push({
// 	name: 'New York',
// 	weather: 57
// });

// for (let location of locations) {
// 	console.log(`It's ${location.weather} in ${location.name}`);
// }

//Challenge Area

var averageGrade = (...numbers) => {
	var total = 0;
	for(let number of numbers)
		total += number;
	return total/numbers.length;
}	

console.log(averageGrade(1,44,55));