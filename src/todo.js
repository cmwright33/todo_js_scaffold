var todoApp = {

  createTask: function(){
    var newTodoItem = Object.create(todoItem);
    newTodoItem.task = document.getElementById('new-text-field').value;
    TodoItems.push(newTodoItem);
  };
};

var todoItem = {


};


if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {}
        F.prototype = o;
        return new F();
    };
};


newTodoItem = Object.create(todoItem);


//Creates an array to put the todo objects in

TodoItems = [];

// Loads the window
window.onload = function(){

//On click adds the text field to a new newTodoItem and pushs it into an arrayg
document.getElementById('add-item').onclick = function(event) {
  createTask('new-text-field.value');
};


};