
let todosObject ={
	
todos : [],

addTodos  (todoText) {
	this.todos.push({todoText : todoText, isComplete : false});
},

changeTodos (position,todoText) {
	this.todos[position].todoText = todoText;
},

deleteTodos (position) {
	this.todos.splice(position,1);
},

toggleCompleted (position) {
	this.todos[position].isComplete = true;
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
	displayTodos : () => {view.displayTodos()},
	
	toggleAllTodos : function() {
		
		todosObject.toggleAll();
		view.displayTodos();
	},
	
	addTodos : function (){
		
		let todoTextInput = document.getElementById('todo-text');
		let todoText = todoTextInput.value.trim();
		
		if(todoText){
			todosObject.addTodos(todoText);
			todoTextInput.value = '';
		}
		view.displayTodos();
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
		view.displayTodos();
	},
	
	toggleTodos : function () {
		let toggleTodoPositionInput = document.getElementById('toggle-position');
		let toggleTodoPosition = toggleTodoPositionInput.value;
		
		let numTodos = todosObject.todos.length;
		
		if(toggleTodoPosition && toggleTodoPosition >= 0 && toggleTodoPosition < numTodos) {
			todosObject.toggleCompleted(  toggleTodoPosition);
			
			
		}
		toggleTodoPositionInput.value='';
		view.displayTodos();
	},
	
	deleteTodos : function (deleteTodoPosition) {
		todosObject.deleteTodos(  deleteTodoPosition);
		view.displayTodos();
	}
}

let view = {
	displayTodos : function () {
		let todosUL = document.querySelector('ul');
		todosUL.innerHTML = '';
		
		let numTodos = todosObject.todos.length;
		const completedPrefix = "( x ) ";
		const nonCompletedPrefix = "( ) ";
		
		for(let i=0;i < numTodos ;i++){
			let node = document.createElement('li');
			let textValue = "";
			
			if(todosObject.todos[i].isComplete){
				textValue = completedPrefix.concat(todosObject.todos[i].todoText);
			} else {
				textValue = nonCompletedPrefix.concat(todosObject.todos[i].todoText);
			}
			
			let textNode = document.createTextNode(textValue);
			
			node.appendChild(textNode);
			
			let deleteButton = document.createElement('button');
			let deleteText = document.createTextNode("DELETE");
			
			deleteButton.appendChild(deleteText);
			node.appendChild(deleteButton);
			
			let id = "delButton-".concat(i);
			
			deleteButton.setAttribute("id",id);
			deleteButton.addEventListener('click', function(){handlers.deleteTodos(i)});
			todosUL.appendChild(node);
		}
	}
}


