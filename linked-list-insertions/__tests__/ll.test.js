'use strict';


const LikedListTesting = require('../linkedList2');

describe('Testing Our LinkedList ', () => {
  let linkedListtest=new LinkedList();

    it('Test Unit insert',()=>{
      let linkedListtest = new LikedListTesting();
      expect(linkedListtest.head).toBeNull();
    });

    it(' Testing insert ',()=>{
      linkedListtest.insert(1);
      expect(linkedListtest.head.value).toEqual(1);
    });

    it('Testing first node ',()=>{
      expect(linkedListtest.head.value).toEqual(1);
    });

    it(' Testing more nodes ',()=>{
      linkedListtest.insert(2);
      linkedListtest.insert(3);
      expect(linkedListtest.head.value).toEqual(3);

});

it('Testing middle node ', ()=> {
  linkedListtest.insertAfter(3, 7);
  expect(linkedListtest.toString()).toEqual('{3} -> {7} -> {null}');
});

it(' Testing empty Nodes  ', () => {
    let linkedListt = new linkedList();
    expect(linkedListt.head).tobeNull();
  });

  });

module.exports = LikedListTesting