const LinkedList = require("./linkedlist");

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(val) {
    this.list.push(val);
  }

  getLength() {
    return this.list.length;
  }

  pop() {
    return this.list.pop();
  }

  peek() {
    return this.list.tail.val;
  }

  isEmpty() {
    return this.list.length === 0 ? true : false;
  }
}

module.exports = Stack;
