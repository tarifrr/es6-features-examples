// var array = ['first','second','third'];
// var [a, , c] = array; // second is omitted
// console.log(a,c);

var todo = {
	description: 'Watch new ES6 section',
	completed: false
};

// var {description: message, completed} = todo;
// console.log(message, completed);

function getTodoStatus({completed}){
	if(typeof completed === 'boolean'){
		return [`Todo is ${completed ? '' : 'not'} completed.`]
	} else {
		return [undefined, {error: 'INVALID_TODO_ITEM'}]
	}

}

var [res,err] = getTodoStatus(todo);

if(err){
	console.log(err.error);
}else{
	console.log(res);
}

