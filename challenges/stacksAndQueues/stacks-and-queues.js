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
module.exports = {
  Stack,
  Queue
}