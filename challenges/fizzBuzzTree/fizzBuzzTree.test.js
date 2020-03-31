const { BinarySearchTree } = require('../tree/tree')
const fizzBuzzTree = require('./fizzBuzzTree')

describe('fizzz buz tree test', () => {
  it('takes in a tree and outputs the correct fizzbuzz response', ()=> {
    const tree = new BinarySearchTree
    tree.add(15)
    tree.add(6)
    tree.add(30)
    tree.add(2)
    tree.add(10)
    tree.add(18)
    tree.add(34)

    expect(fizzBuzzTree(tree)).toEqual({
      data: 'FizzBuzz',
      leftChild: {
        data: 'Fizz',
        leftChild: {data: '2', leftChild: null, rightChild: null},
        rightChild: {data: 'Buzz', leftChild: null, rightChild: null}
      },
      rightChild: {
        data: 'FizzBuzz',
        leftChild: {data: 'Fizz', leftChild: null, rightChild: null},
        rightChild: {data: '34', leftChild: null, rightChild: null}
      }
    })
  })
})