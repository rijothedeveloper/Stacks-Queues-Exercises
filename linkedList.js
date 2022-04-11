/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    // empty linkedlist
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    // empty linkedlist
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length <= 1) {
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    }
    let currentNode = this.head;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    const nodeVal = currentNode.next.val;
    currentNode.next = null;
    this.length--;
    this.tail = currentNode;
    return nodeVal;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length <= 1) {
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    }
    const val = this.head.val;
    this.head = this.head.next;
    this.length--;
    return val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    while (idx !== 0) {
      currentNode = currentNode.next;
      idx--;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    while (idx !== 0) {
      currentNode = currentNode.next;
      idx--;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length) return;
    const node = new Node(val);
    if (idx === 0) {
      node.next = this.head;
      this.head = node;
      // if empty list point tail also
      if (this.length === 0) this.tail = node;
      this.length++;
    } else {
      const tail = idx === this.length ? true : false;
      let currentNode = this.head;
      while (idx !== 1) {
        currentNode = currentNode.next;
        idx--;
      }
      node.next = currentNode.next;
      currentNode.next = node;
      // if at tail
      if (tail) this.tail = node;
      this.length++;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // remove at one element linked list
    if (this.length === 1) {
      const node = this.head;
      this.tail = null;
      this.head = null;
      this.length--;
      return node;
    }
    // remove at begining
    else if (idx === 0) {
      const node = this.head;
      this.head = this.head.next;
      this.length--;
      return node;
    } else {
      const tail = idx === this.length ? true : false;
      let currentNode = this.head;
      while (idx !== 1) {
        currentNode = currentNode.next;
        idx--;
      }
      currentNode.next = currentNode.next.next;
      this.tail = currentNode;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let currentNode = this.head;
    let total = 0;
    while (currentNode) {
      total = total + currentNode.val;
      currentNode = currentNode.next;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
