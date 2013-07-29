var todoApp = {



//Creates an array to put the todo objects in

  todoItems: [],

//creates a new task
  createTask: function(){
    var newTodoItem = Object.create(todoItem);
    this.todo.push(newTodoItem);
  },

// appends the task to the DOM
  appendTask: function() {
      var parent = document.getElementById('todo-items');
      var tag = document.createElement('li');
      for (var i = 0; i < todoItems.length; i++) {
      tag.innerText = this.todos[i].taskText;
      parent.appendChild(tag);
    }
  }
};

var todoItem = {
  // sets the task text
  setTaskText: function(taskInput){
    newTodoItem.taskText = taskInput;
  }

};

// This creates a clones of the object

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
};


newTodoItem = Object.create(todoItem);


var input;

// Loads the window
window.onload = function(){

// On click adds the text field to a new newTodoItem and pushs it into an arrayg
document.getElementById('add-item').onclick = function(event) {
  createTask('new-text-field.value');
};


};