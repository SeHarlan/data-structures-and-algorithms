class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
    return this.head
  }
  includes(value) {
    let node = this.head
    while (node) {
      if (node.data === value) return true;
      node = node.next
    }
    return false
  }
  toString() {
    let string = ''
    let node = this.head
    while (node) {
      string += node.data;
      if (node.next) string += ', ';
      node = node.next
    }
    return string
  }
}

module.exports = {
  LinkedList
}