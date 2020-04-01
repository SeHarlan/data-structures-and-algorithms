const { BinarySearchTree } = require('../tree/tree')
module.exports = function(tree) {

  const newTree = {...tree.root}

  function recursiveReplace(node) {
    if(node) {
      recursiveReplace(node.leftChild)
      
      if (node.data % 3 === 0 && node.data % 5 === 0) {
        node.data = 'FizzBuzz'
      } else if (node.data % 3 === 0) {
        node.data = 'Fizz'
      } else if (node.data % 5 === 0) {
        node.data = 'Buzz'
      } else {
        node.data = `${node.data}`
      }

      recursiveReplace(node.rightChild)
    } 
  }

  recursiveReplace(newTree)

  return newTree
}