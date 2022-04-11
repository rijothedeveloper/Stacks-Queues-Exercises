const LinkedList = require("./linkedlist");

class Queue {
  constructor() {
    this.list = new LinkedList();
  }

  enQueue(val) {
    this.list.push(val);
  }

  getLength() {
    return this.list.length;
  }

  deQueue() {
    return this.list.shift();
  }

  peek() {
    return this.list.head.val;
  }

  isEmpty() {
    return this.list.length === 0 ? true : false;
  }
}

module.exports = Queue;
