
let todosObject ={
	
todos : [{todoText:'item1',isComplete :false},{todoText:'item2',isComplete :false},{todoText:'item3',isComplete :false}],

displayTodos () {
	let numTodos = this.todos.length;
	
	if(numTodos){
	this.todos.forEach(todo => console.log(todo.isComplete,todo.todoText))
	} else {
		console.log("No Todos");
	}
},

addTodos  (todoText) {
	this.todos.push({todoText : todoText, isComplete : false});
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
},

toggleAll(){
	let isComplete = true;
	
	this.todos.forEach(todo => isComplete = isComplete && todo.isComplete===true)
	
	if(isComplete === true) {
		this.todos.forEach(todo => todo.isComplete = false)
	} else {
		this.todos.forEach(todo => todo.isComplete = true)
}

}
}

let handlers = {
	displayTodos : () => {todosObject.displayTodos()},
	toggleAllTodos : () => {todosObject.toggleAll()},
	
	addTodos : function (){
		
		let todoTextInput = document.getElementById('todo-text');
		let todoText = todoTextInput.value.trim();
		
		if(todoText){
			todosObject.addTodos(todoText);
			todoTextInput.value = '';
		}
	},
	
	changeTodos : function() {
		let changedTodoTextInput = document.getElementById('todo-change-text');
		let changedTodoText = changedTodoTextInput.value.trim();
		
		let changedTodoPositionInput = document.getElementById('todo-change-position');
		let changedTodoPosition = changedTodoPositionInput.value;
		
		let numTodos = todosObject.todos.length;
		
		if(changedTodoText && changedTodoPosition && changedTodoPosition >= 0 && changedTodoPosition < numTodos) {
			todosObject.changeTodos(  changedTodoPosition, changedTodoText);
			
			
		}
		changedTodoTextInput.value='';
		changedTodoPositionInput.value = '';
	}
}


