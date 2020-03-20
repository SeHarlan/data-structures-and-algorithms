const { 
  LinkedList
} = require('./linked-list.js');
const { DoubleLinkedList } = require('./double-linked.js')
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



  const dll = new DoubleLinkedList

  describe('Double linked list', () => {
    it('instantiates an empty double ll', () => {
      expect(dll).toEqual({ head: null })
    });
    it('can properly instert into double ll', () => {
      dll.insert('test 1')
      expect(dll.head).toEqual({ data: 'test 1', next: null, prev: null })
    });
    it('head points to first node in double', () => {
      expect(dll.head.data).toEqual('test 1')
    });
    it('can insert mutiple items', () => {
      dll.insert('test 2')
      dll.insert('test 3')
      expect(dll.head).toEqual({ 
        data: 'test 3', 
        prev: null, 
        next: { 
          data: 'test 2', 
          prev: expect.objectContaining({data: 'test 3'}), 
          next: { 
            data: 'test 1', 
            prev: expect.objectContaining({ data: 'test 2' }),
            next: null
          }
        }
      })
    });
    it('it can find a prev item', () => {
      expect(dll.findPrevFromValue('test 1')).toEqual('test 2')
    })
    it('it can find a next item', () => {
      expect(dll.findNextFromValue('test 2')).toEqual('test 1')
    })
    it('returns true when finding a value in  double', () => {
      expect(dll.includes('test 2')).toEqual(true)
    });
    it('returns false when theres no item in  double', () => {
      expect(dll.includes('bad test')).toEqual(false)
    });
    it('returns a collection in  double', () => {
      expect(dll.toString()).toEqual('test 3, test 2, test 1')
    });
    console.log('===============================================')
  })