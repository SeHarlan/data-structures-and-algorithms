const { LinkedList } = require('../linked-list/linked-list')

function mergeList(list1, list2) {
  const newLL = new LinkedList
  newLL.insert(list2.head.data)
  newLL.insert(list1.head.data)
  let node1 = list1.head 
  let node2 = list2.head
  while (node1 || node2) {
    if (node1 && node1.data !== list1.head.data) newLL.append(node1.data)
    if (node2 && node2.data !== list2.head.data) newLL.append(node2.data)

    if (node1) node1 = node1.next
    if (node2) node2 = node2.next
  }
  return newLL
}

module.exports = { mergeList }