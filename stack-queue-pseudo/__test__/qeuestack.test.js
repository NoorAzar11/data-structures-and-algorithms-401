'use strict';

// const Stack = require('../../stack-and-queue/stack');
// const Queue = require('../../stack-and-queue/queue');

const Stack = require('../stackqueupsudo');



describe('Testing stack', ()=> {

    it('Testing SQ ', ()=> {
        let stack = new Stack();
        stack.enqueue(20)
        stack.enqueue(30)
        expect(stack.this.newpop(val)).toEqual(30);
    });

    it('Testing empty queue',()=>{
        let queue = new Queue();
        expect(() => {
          queue. SQempty();
    
        }).toThrow(Error);

      });


    it('Testing pop', ()=> {
        let stack = new Stack();
        stack.push(6);
        stack.push(5);
        stack.push(4);
        expect(stack.pop()).toEqual(4);
        expect(stack.pop()).toEqual(5);
        expect(stack.pop()).toEqual(6);
    });

    it ('peek from empty stack return exception', () => {
        let stack = new Stack();
        expect (stack.peek()).toEqual('dequeueempty');
      });

      it ('dequeue from empty stack return exception', () => {
        let stack = new Stack();
        expect (stack.dequeue()).toEqual('dequeueempty');
      });

      it('Testing pop and peek ',()=>{
        let stack = new Stack();
        expect(() => {
            stack.newpop();
    
        }).toThrow(Error);
      });

});