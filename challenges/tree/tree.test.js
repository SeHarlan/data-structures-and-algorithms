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
    bst.add(7)
    bst.add(2)
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
  it('returns true when data is contained', () => {
    expect(bst.contains(10)).toEqual(true)
    expect(bst.contains(16)).toEqual(true)
    expect(bst.contains(2)).toEqual(true)
  })
  it('returns false when data is not contained', () => {
    expect(bst.contains(33)).toEqual(false)
    expect(bst.contains(1)).toEqual(false)
  })
  it('returns a list of tree values breadth first', () => {
    bst.add(1)
    bst.add(6)
    bst.add(18)
    bst.add(24)
    expect(bst.breadthFirst()).toEqual([10, 5, 16, 2, 7, 13, 20, 1, 6, 18, 24])
  })
})






