let todosObject ={
	
todos : ['item1','item2','item3'],

displayTodos () {
	this.todos.map(todo => console.log(todo))
},

addTodos  (item) {
	this.todos.push(item);
	this.displayTodos(this.todos);
},

changeTodos (position,item) {
	this.todos[position] = item;
	this.displayTodos(this.todos);
},

deleteTodos (position) {
	this.todos.splice(position,1)
	this.displayTodos(this.todos);
}
}


todosObject.addTodos('itemx');
todosObject.deleteTodos(todosObject.todos,3);
