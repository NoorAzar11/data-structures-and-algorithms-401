'use strict';


const LikedListTesting = require('../linkedList2');

describe('Testing Our LinkedList ', () => {

    it('Can successfully instantiate an empty linked list',()=>{
      let Inseting = new LikedListTesting();
      expect(Inseting.head).toBeNull();
    });

});

it('Insert items ', () =>{
    let  newLinkedListArr = new LikedListTesting();
     newLinkedListArr.insert(8);
    let val = 1 ;
     newLinkedListArr.insert(val);
    expect( newLinkedListArr.head.value).toEqual(1);
  });

it('can create empty linked list', () => {
    let linkedListt = new linkedList();
    expect(linkedListt.head).tobeNull();
  });



module.exports = LikedListTesting