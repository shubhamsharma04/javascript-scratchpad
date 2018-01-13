
let todosObject ={
	
todos : [{todoText:'item1',isComplete :false},{todoText:'item2',isComplete :false},{todoText:'item3',isComplete :false}],

displayTodos () {
	let numTodos = this.todos.length;
	
	if(numTodos){
	this.todos.map(todo => console.log(todo.isComplete,todo.todoText))
	} else {
		console.log("No Todos");
	}
},

addTodos  (todoText) {
	this.todos.push({todoText : todoText, isComplete : false});
	this.displayTodos();
},

changeTodos (position,todoText) {
	this.todos[position].todoText = todoText;
	this.displayTodos();
},

deleteTodos (position) {
	this.todos.splice(position,1);
	this.displayTodos();
},

toggleCompleted (position) {
	this.todos[position].isComplete = true;
	this.displayTodos();
}
}


todosObject.addTodos('itemx');
todosObject.deleteTodos(3);
todosObject.toggleCompleted(2);
