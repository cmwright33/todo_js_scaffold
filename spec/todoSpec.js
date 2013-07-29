describe("a TodoItem Object", function() {

  it("is an Object", function(){
    var todoItem = {};
    expect(typeof todoItem).toBe("object");
  });

});


describe("creating a todoItem clone", function() {

  it("creates a clone of the Object", function() {
    todo1 = Object.create(todoItem);
    expect(todoItem).toEqual(todo1);

  });

});


