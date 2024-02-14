//LINKED LIST BY SUBHAM JOSHI //

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    console.log("Removing the first element of the linked list");
    if (!this.head) return undefined;
    if (!this.head.next) return null;

    var currentNode = this.head;
    this.head = currentNode.next;
    this.length--;
    return currentNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      var currentNode = this.head;
      this.head = newNode;
      newNode.next = this.tail;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (typeof index === "string" || index < 0) {
      return null;
    }
    var counter = 0;
    var currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  async set(val, index) {
    var searchNode = await this.get(index);
    //   if (!searchNode) {
    //     return false;
    //   }
    //   const newNode = new Node(val);
    //   var current = this.head;
    //   var counter = 0;
    //   while (counter !== searchNode) {
    //     current = current.next;
    //     current.next = newNode;
    //     counter++;
    //   }
    //   this.length++;
    //   return current;
    // }
    if (searchNode) {
      searchNode.val = val;
      return true;
    }
    return false;
  }

  async insert(val, index) {
    if (index < 0) {
      return false;
    }
    if (index === this.length) {
      return this.push(newNode);
    }
    if (index === 0) {
      return this.unshift(newNode);
    }

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return [this];
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    if (this.length === 0) {
      return this.shift();
    }

    var prev = this.get(index - 1);
    prev = prev.next;
    this.length--;
    return [this];
  }
  display() {
    var current = this.head;
    while (current) {
      console.log("Checking if there is this.head.next === null");
      console.log(current.val);
      current = current.next;
    }
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
console.log(list.push("!"));
list.pop();

console.log(list.shift());
console.log(list.unshift(20));
list.push("GOODBYE");
console.log(list.display());
