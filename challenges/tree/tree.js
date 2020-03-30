class Node {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null
  }
}



class BinarySearchTree {
  constructor() {
    this.root = null
    this.inOrderArray = []
    this.preOrderArray = []
    this.postOrderArray = []
  }
  
  add(data) {
    const newNode = new Node(data)
    if (!this.root) {
      this.root = newNode
      return this.root
    } else {
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode) {
    if(newNode.data < node.data) {
      if(!node.leftChild) {
        node.leftChild = newNode
        return this.root
      } else {
        this.insertNode(node.leftChild, newNode)
      }
    } else {
      if(!node.rightChild) {
        node.rightChild = newNode
        return this.root
      } else {
        this.insertNode(node.rightChild, newNode)
      }
    }
  }
  traversePreOrder(node) {
    if(node) {
      this.preOrderArray.push(node.data)
      this.traversePreOrder(node.leftChild)
      this.traversePreOrder(node.rightChild)
    } 
  }
  preOrder() {
    this.traversePreOrder(this.root)
    return this.preOrderArray
  }
  traverseInOrder(node) {
    if(node) {
      this.traverseInOrder(node.leftChild)
      this.inOrderArray.push(node.data)
      this.traverseInOrder(node.rightChild)
    } 
  }
  inOrder() {
    this.traverseInOrder(this.root)
    return this.inOrderArray
  }
  traversePostOrder(node) {
    if(node) {
      this.traversePostOrder(node.leftChild)
      this.traversePostOrder(node.rightChild)
      this.postOrderArray.push(node.data)
    }
  }
  postOrder() {
    this.traversePostOrder(this.root)
    return this.postOrderArray
  }
  recursiveContains(node, data){
    if (!node) {
      return false
    } else if (data < node.data) {
      return this.recursiveContains(node.leftChild, data)
    } else if (data > node.data) {
      return this.recursiveContains(node.rightChild, data)
    } else return true
  }
  
  contains(data) {
    return this.recursiveContains(this.root, data)
  }
}


module.exports = { BinarySearchTree }