class Node {
  constructor(data) {
    this.data = data;
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null
  }
  push(data) {
    const newNode = new Node(data)
    newNode.next = this.top
    this.top = newNode
    return this.top
  }
  pop() {
    const deleted = this.top.data
    this.top = this.top.next
    return deleted
  }
  peek() {
    return this.top.data
  }
  isEmpty() {
    if (this.top === null) return true
    return false
  }
}

class Queue {
  constructor() {
    this.front = null
  }
  enqueue(data) {
    const newNode = new Node(data);
    let node = this.front
    if (!node) {
      this.front = newNode
      return this.front
    }
    while(node) {
      if (node.next === null) {
        node.next = newNode;
        return this.front
      }
      node = node.next
    }
  }
  dequeue() {
    const deleted = this.front.data
    this.front = this.front.next
    return deleted
  }
  peek() {
    return this.front.data
  }
  isEmpty() {
    if (this.front === null) return true
    return false
  }
}

class PsuedoQueue {
  constructor () {
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  }
  enqueue(data) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop())
    }
    this.stack1.push(data)
    while(!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop())
    }
    return this.stack1.top
  }
  dequeue() {
    if (this.stack1.isEmpty()) return null;
    return this.stack1.pop()
  }
}
module.exports = {
  Stack,
  Queue,
  PsuedoQueue
}