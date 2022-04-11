const Stack = require("./stack");

describe("stack works", function () {
  const stack = new Stack();
  it("add item to stack", function () {
    stack.push(5);
    expect(stack.getLength()).toBe(1);
  });

  it("remove an item", function () {
    stack.push(15);
    const val = stack.pop();
    expect(val).toBe(15);
  });

  it("peek item", function () {
    stack.push(15);
    expect(stack.peek()).toBe(15);
  });

  it("gives isempty", function () {
    expect(stack.isEmpty()).toBe(false);
  });
});
