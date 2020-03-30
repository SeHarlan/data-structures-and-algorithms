const { BinarySearchTree } = require('./tree.js')

describe('tree tests', () => {
  const bst = new BinarySearchTree
  it('Can successfully instantiate an empty tree', () => {
    expect(bst.root).toEqual(null)
  })

  it('Can successfully instantiate a tree with a single root node', () => {
    expect(bst.add(10)).toEqual({
      data: 10, 
      leftChild: null,
      rightChild: null  
    })
  })

  it('Can successfully add a left child and right child to a single root node', () => {
    bst.add(5)
    bst.add(16)
    expect(bst.root).toEqual({
      data: 10, 
      leftChild: {
        data: 5,
        leftChild: null,
        rightChild: null
      },
      rightChild: {
        data: 16,
        leftChild: null,
        rightChild: null
      }  
    })

  })
  it('Can successfully return a collection from a preorder traversal', () => {
    bst.add(2)
    bst.add(7)
    bst.add(20)
    bst.add(13)
    expect(bst.preOrder()).toEqual([10, 5, 2, 7, 16, 13, 20])
  })
  it('Can successfully return a collection from an inorder traversal', () => {
    expect(bst.inOrder()).toEqual([2, 5, 7, 10, 13, 16, 20])
  })
  it('Can successfully return a collection from a postorder traversal', () => {
    expect(bst.postOrder()).toEqual([2, 7, 5, 13, 20, 16, 10])
  })
})






