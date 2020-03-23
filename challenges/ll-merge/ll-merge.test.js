const { LinkedList } = require('../linked-list/linked-list') 
const { mergeList } = require('./ll-merge')
const LL1 = new LinkedList
const LL2 = new LinkedList

LL1.insert('test 3')
LL1.insert('test 1')
LL2.insert('test 4')
LL2.insert('test 2')

describe('combines 2 LL', () => {
  it('zips two ll', () => {
    expect(mergeList(LL1, LL2).head).toEqual({ data: 'test 1', next: { data: 'test 2', next: { data: 'test 3', next: {data: 'test 4', next: null}}}})
  })
  it('zips two ll of unequal length', () => {
    LL2.append('test 5')
    LL2.append('test 6')
    expect(mergeList(LL1, LL2).head).toEqual({ data: 'test 1', next: { data: 'test 2', next: { data: 'test 3', next: {data: 'test 4', next: {data: 'test 5', next: {data: 'test 6', next: null}}}}}})
  })
})