'use strict';

const Stack = require('../stack');

describe('Testing stack', ()=> {

    it('Testing Creating ', ()=> {
        let stack = new Stack();
        expect(stack instanceof Stack).toBeTruthy();
        expect(stack.top).toBeNull();
    });

    it('Testing null on peek', ()=> {
        let stack = new Stack();
        expect(stack.peek()).toBeNull();
    });

    it('Testing last item in stack', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.peek()).toEqual(1);
        stack.push(2);
        expect(stack.peek()).toEqual(2);
        stack.push(3);
        expect(stack.peek()).toEqual(3);
    });

    it('Testing updates top', ()=> {
        let stack = new Stack();
        stack.push(1);
        expect(stack.top).toEqual(1);
        stack.push(2);
        expect(stack.top).toEqual(2);
        stack.push(3);
        expect(stack.top).toEqual(3);
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

    it('Testing empty stack',() =>{
        let stack = new Stack();
        expect(stack.idx).toEqual(0);
      });

      it('Testing pop and peek ',()=>{
        let stack = new Stack();
        expect(() => {
            stack.expectEmpty();
    
        }).toThrow(Error);
      });

});