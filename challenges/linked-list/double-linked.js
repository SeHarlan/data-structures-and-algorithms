class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
  }
  insert(data) {
    const newNode = new Node(data)
    const oldNode = this.head
    if (oldNode) oldNode.prev = newNode
    newNode.next = oldNode
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
  findNextFromValue(value) {
    let node = this.head
    while (node) {
      if (node.data === value) return node.next.data;
      node = node.next
    }
    return null
  }
  findPrevFromValue(value) {
    let node = this.head
    while (node) {
      if (node.data === value) return node.prev.data;
      node = node.next
    }
    return null
  }
}

module.exports = {
  DoubleLinkedList
}