

'use strict';

const Node = require('../node');

describe('Node Module', ()=> {

    it('Testing Node ()', ()=> {

        let value = 'my node value';
        let newLinkedNode = new Node(value);
        
        expect(newLinkedNode.value).toEqual(value);

        expect(newLinkedNode.next).toBeNull();
    }) 
});