const { Stack, Queue, PsuedoQueue } = require('./stacks-and-queues')


describe('stacks test', ()=> {
  const stack = new Stack
  
  it('Can successfully instantiate an empty stack', () => {
    expect(stack.top).toEqual(null)
  })
  it('Can successfully push onto a stack', () => {
    expect(stack.push('test 1')).toEqual({data: 'test 1', next: null})
  })
  it('Can successfully push multiple values onto a stack', () => {
    stack.push('test 2')
    expect(stack.push('test 3')).toEqual({data: 'test 3', next: {data: 'test 2', next: {data: 'test 1', next: null
    }}})
  })
  it('Can successfully peek the next item on the stack', () => {
    expect(stack.peek()).toEqual('test 3')
  })
  it('Can successfully pop off the stack', () => {
    expect(stack.pop()).toEqual('test 3')
  })
  it('Can successfully empty a stack after multiple pops', () => {
    stack.pop()
    stack.pop()
    expect(stack.isEmpty()).toEqual(true)
  })

describe('queue test', () => {
  const q = new Queue
  
  it('Can successfully instantiate an empty queue', () => {
    expect(q.front).toEqual(null)
  })
  it('Can successfully enqueue into a queue', () => {
    expect(q.enqueue('test 1')).toEqual({data: 'test 1', next: null})
  })
  it('Can successfully enqueue multiple values into a queue', () => {
    q.enqueue('test 2')
    expect(q.enqueue('test 3')).toEqual({data: 'test 1', next: {data: 'test 2', next: {data: 'test 3', next: null
  }}})
  })
  it('Can successfully dequeue out of a queue the expected value', () => {
    expect(q.dequeue()).toEqual('test 1')
  })
  it('Can successfully peek into a queue, seeing the expected value', () => {
    expect(q.peek()).toEqual('test 2')
  })
  it('Can successfully empty a queue after multiple dequeues', () => {
    q.dequeue()
    q.dequeue()
    expect(q.isEmpty()).toEqual(true)
  })
});

describe('psuedo queue test', () => {
  const pq = new PsuedoQueue
  
  it('Can successfully enqueue into a queue', () => {
    expect(pq.enqueue('test 1')).toEqual({data: 'test 1', next: null})
  })
  it('Can successfully enqueue multiple values into a queue', () => {
    pq.enqueue('test 2')
    expect(pq.enqueue('test 3')).toEqual({data: 'test 1', next: {data: 'test 2', next: {data: 'test 3', next: null
  }}})
  })
  it('Can successfully dequeue out of a queue the expected value', () => {
    expect(pq.dequeue()).toEqual('test 1')
  })
  it('Can successfully empty a queue after multiple dequeues', () => {
    pq.dequeue()
    pq.dequeue()
    expect(pq.isEmpty()).toEqual(true)
  })

});

