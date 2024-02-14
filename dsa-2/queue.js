// QUEUE BY SUBHAM JOSHI //

class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    console.log("Entering Enqueue");
    const newNode = new node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
      this.size++;
      return this;
    }
  }

  dequeue() {
    if (!this.first) {
      return null || undefined;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    var temp = this.first;
    this.first = this.first.next;
    this.size--;
    return this;
  }
}

const newQueue = new Queue();
