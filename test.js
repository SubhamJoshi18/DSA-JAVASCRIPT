//PRACTISE YOUR CODE HERE ABOVE IS MY PRACTISE OF SINGLE LINKED LIST

class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
  }
  pop() {
    if (!this.head || !this.tail) {
      return undefined;
    }
    var currentNode = this.head;
    var newTail = this.head;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    if (this.length === 0) {
      this.head = null;

      this.tail = null;
    }
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    var current = this.head;
    this.head = current.next;
    this.length--;
    return current;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      var current = this.head;
      this.head = newNode;
      newNode.next = this.tail;
      this.length++;
      return [current];
    }
  }

  get(index) {
    var counter = 0;
    var current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  async set(index, val) {
    //Find the following Index
    var search = await this.get(index);
    if (search) {
      search.val = val;
      return search;
    }
  }
  async insert(index, val) {
    const newNode = new Node(val);
    if (index === this.length) {
      return this.push(newNode);
    }

    if (index === 0) {
      return this.unshift(newNode);
    }

    var prev = await this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return [this];
  }

  remove(index) {
    if (!this.head) {
      return false;
    }

    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    }

    var prev = this.get(index - 1);
    prev = prev.next;
    this.length--;
    return this;
  }

  display() {
    var current = this.head;
    if (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.push(-98);

console.log(list.push(2));
console.log(list.pop());
console.log(list.shift());
