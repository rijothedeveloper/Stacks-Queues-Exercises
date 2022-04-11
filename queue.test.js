const Queue = require("./queue");

describe("queue works", function () {
  const queue = new Queue();
  it("add item to queur", function () {
    queue.enQueue(5);
    expect(queue.getLength()).toBe(1);
  });

  it("remove an item", function () {
    queue.enQueue(15);
    const val = queue.deQueue();
    expect(val).toBe(5);
  });

  it("peek item", function () {
    expect(queue.peek()).toBe(15);
  });

  it("gives isempty", function () {
    expect(queue.isEmpty()).toBe(false);
  });
});
