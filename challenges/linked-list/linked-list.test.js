const { 
  LinkedList
} = require('./linked-list.js');

const ll = new LinkedList

  describe('linked list', () => {
    it('instantiates an empty ll', () => {
      expect(ll).toEqual({ head: null })
    });
    it('can properly instert into ll', () => {
      ll.insert('test 1')
      expect(ll.head).toEqual({ data: 'test 1', next: null })
    });
    it('head points to first node', () => {
      expect(ll.head.data).toEqual('test 1')
    });
    it('can insert mutiple items', () => {
      ll.insert('test 2')
      ll.insert('test 3')
      expect(ll.head).toEqual({ data: 'test 3', next: { data: 'test 2', next: { data: 'test 1', next: null}}})
    });
    it('returns true when finding a value', () => {
      expect(ll.includes('test 2')).toEqual(true)
    });
    it('returns false when theres no item', () => {
      expect(ll.includes('bad test')).toEqual(false)
    });
    it('returns a collection', () => {
      expect(ll.toString()).toEqual('test 3, test 2, test 1')
    });
    console.log('===============================================')
  })