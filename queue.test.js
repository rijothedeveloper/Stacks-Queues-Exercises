const Queue = require("./queue");

describe("queue works", function () {
  it("add item to queur", function () {
    Queue.add(5);
    expect(Queue.length).tobe(1);
  });
});
