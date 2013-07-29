var todoApp = {


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



window.onload = function(){

document.getElementById('add-item').onclick = function(event);





};