// var chatRooms = new Set();

// // ADD
// chatRooms.add('Runners');
// chatRooms.add('Runners');
// chatRooms.add('Bikers');
// //Size
// console.log(chatRooms.size);
// //Has
// console.log(`Does the set have Runners: ${chatRooms.has('Runners')}`)
// //Delete
// // chatRooms.delete('Bikers');
// // chatRooms.clear();

// // To Arrays
// chatRooms.add({name: 'Andrew'});
// console.log([...chatRooms]);

// chatRooms.forEach( (chatRoom) => {
// 	console.log(`Found chatroom : ${chatRoom}`);
// } );

var movieSet = new Set();

var addMovie = movieTitle => {
	if(movieSet.has(movieTitle) == true){
		console.log(`Failed to add movie as ${movieTitle} already exists in set`);
		return;
	}	

	movieSet.add(movieTitle);
	console.log(`${movieTitle} successfully added to set`);
}	

addMovie('A New Hope');
addMovie('District 9');
addMovie('A New Hope');

