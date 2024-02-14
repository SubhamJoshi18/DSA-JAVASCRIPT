// STACK BY SUBHAM JOSHI //

class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.stack = [];
  }

  push(val) {
    const newNode = new node(val);
    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.next = newNode;
      this.tail = newNode;
      this.length++;
      return this.stack[this];
    }
  }
  pop() {
    if (!this.head) {
      return null || undefined;
    }
    var currentElement = this.head;
    var newElement = currentElement;
    while (currentElement.next) {
      newElement = currentElement;
      currentElement = currentElement.next;
    }
    this.tail = newElement;
    this.tail.next = null;
    this.length--;
    return this.stack[this];
  }

  shift() {
    if (!this.head) {
      return null || undefined;
      console.log("No head to be removed");
    }

    var currentNode = this.head; //temp value head currentNode ma hale
    this.head = currentNode.next;
    currentNode.next = this.tail;
    this.length--;
    return this.stack[this];
  }
  unshift(val) {
    const newNode = new node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      var current = this.head;
      this.head = newNode;
      newNode.next = this.tail;
      this.length++;
      return this.stack[this];
    }
  }
}

const newStack = new Stack();
