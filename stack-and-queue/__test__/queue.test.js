'use strict';

const Queue = require('../queue');


describe('Testing queue', ()=> {

  it ('Testing enqueue queue', () => {
    let queue = new Queue();
    queue.enqueue(1000);
    expect(queue.dequeue().val).toEqual(this.storage);
  });


  it ('Testing dequeue queue',()=>{
    let queue = new Queue();
    queue.enqueue(20);
    queue.enqueue(40);
    queue.enqueue(30);

    queue.dequeue();
    expect(queue.dequeue().val).toEqual(this.storage);

  });


      it('testing queue ', () => {
        let queue = new Queue();
        queue.enqueue(10);
        queue.enqueue(20);

        expect(queue.peek(this.storage)).toEqual(10)
    })


    it('Testing ... ', () => {
      let queue = new Queue();
      queue.dequeue()
      queue.dequeue()
      queue.dequeue()
      queue.dequeue()
      expect(queue.peek()).toBe(this.storage);
  })

  it('can instantiate an empty Queue',() =>{
    let queue = new Queue();
    queue.enqueue(50);
    queue.enqueue(20);
    queue.enqueue(30);
    queue.enqueue(40);
    queue.dequeue();
    queue.dequeue();
    expect(queue.dequeue().val).toEqual( this.storage);
  });

  it('Testing empty queue',()=>{
    let queue = new Queue();
    expect(() => {
      queue. EmptyQ();

    }).toThrow(Error);
  });

    });
