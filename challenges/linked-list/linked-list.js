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
  //==========11-insertion methods
  append(value) {
    //adds vlaue to the end of the list
    const newNode = new Node(value)
    let node = this.head
    while(node) {
      if (node.next === null) {
        node.next = newNode;
        return this.head
      }
      node = node.next
    }
  }
  insertBefore(value, newVal) {
    //inserts data before the value
    let node = this.head
    if (node.data === value) return this.insert(newVal);
    const newNode = new Node(newVal)
    while(node) {
      if (node.next.data === value ) {
        // node/test2 (insert here) node/test3/value
        newNode.next = node.next;
        node.next = newNode;
        return this.head
      }
      node = node.next
    }
  }
  insertAfter(value, newVal) {
    //inserts data after given value
    let node = this.head
    const newNode = new Node(newVal)
    while(node) {
      if (node.data === value ) {
        // node/test2  node/test3/value (insert here) node/test4
        newNode.next = node.next;
        node.next = newNode;
        return this.head
      }
      node = node.next
    }
    return this.head
  }
}

module.exports = {
  LinkedList
}