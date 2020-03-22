const { 
  LinkedList
} = require('./linked-list.js');
const { DoubleLinkedList } = require('./double-linked.js')


console.log('===============================================')

  describe('Linked List', () => {
    describe('initial implimentaion', () => {

      const ll = new LinkedList

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
    })


    describe('11 - insertions', () => {

      const insertionLL = new LinkedList
      insertionLL.insert('test 2')
      insertionLL.insert('test 1')
      it('adds node to end of list', () => {
        expect(insertionLL.append('test 3')).toEqual({ data: 'test 1', next: { data: 'test 2', next: { data: 'test 3', next: null}}})
      });
      it('adds multiple nodes to the end of list', () => {
        insertionLL.append('test 4')
        expect(insertionLL.head).toEqual({ data: 'test 1', next: { data: 'test 2', next: { data: 'test 3', next: { data: 'test 4', next: null}}}})
      })
      it('inserts node before a specified node', () => {
        expect(insertionLL.insertBefore('test 3', 'before 3')).toEqual({ data: 'test 1', next: { data: 'test 2', next: { data: 'before 3', next :{ data: 'test 3', next: { data: 'test 4', next: null}}}}})
      })
      it('inserts node before fisrt node in list', () => {
        expect(insertionLL.insertBefore('test 1', 'before 1')).toEqual({ data: 'before 1', next: {data: 'test 1', next: { data: 'test 2', next: { data: 'before 3', next :{ data: 'test 3', next: { data: 'test 4', next: null}}}}}})
      })
      it('inserts node after specified node', () => {
        expect(insertionLL.insertAfter('test 3', 'after 3')).toEqual({ data: 'before 1', next: {data: 'test 1', next: { data: 'test 2', next: { data: 'before 3', next :{ data: 'test 3', next: {data: 'after 3', next: { data: 'test 4', next: null}}}}}}})
      })
      it('inserts node after the last node in a list', () => {
        expect(insertionLL.insertAfter('test 4', 'last test')).toEqual({ data: 'before 1', next: {data: 'test 1', next: { data: 'test 2', next: { data: 'before 3', next :{ data: 'test 3', next: {data: 'after 3', next: { data: 'test 4', next: {data: 'last test', next: null }}}}}}}})
      })
    })
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
  })