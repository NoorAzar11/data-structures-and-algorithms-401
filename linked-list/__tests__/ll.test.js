'use strict';

const LikedListTesting = require('../linked-list');


describe('Testing Our LinkedList ', () => {

    it('Can successfully instantiate an empty linked list',()=>{
      let Inseting = new LikedListTesting();
      expect(Inseting.head).toBeNull();
    });


    it('Can properly insert into the linked list and then to be null ', () => {
  
        let newLinkedListArr = new LikedListTesting();
        let val = 'a';
        newLinkedListArr.insert(val);
        expect(newLinkedListArr.head.value).toEqual(val);
        expect(newLinkedListArr.head.next).toBeNull();
      });
    
      it('insert new item to linkedlist', () => {

        let newLinkedListArrNull = new LikedListTesting();
        newLinkedListArrNull.insert(10);
        let val = 6;
        newLinkedListArrNull.insert(val);
    
        expect(newLinkedListArrNull.head.value).toEqual(val);
        expect(newLinkedListArrNull.head.next).toBeNull();
      });


      it('Insert items ', () =>{
        let  newLinkedListArr = new LikedListTesting();
         newLinkedListArr.insert(8);
        let val = 1 ;
         newLinkedListArr.insert(val);
        expect( newLinkedListArr.head.value).toEqual(1);
      });

      it('testing to retrun true or false ', () =>{
        let newLinkedListArr = new LikedListTesting();
        newLinkedListArr.insert(4);
        newLinkedListArr.insert(5);
        newLinkedListArr.insert(6);
        newLinkedListArr.insert(3);
        newLinkedListArr.insert(2);
        let val1 = 1 ;
        let val2 = 7 ;
        newLinkedListArr.include(val1);
        newLinkedListArr.include(val2);
        expect(newLinkedListArr.include(val1)).toEqual(false);
        expect(newLinkedListArr.include(val2)).toEqual(false);
      });

      it('testing to retrin a string', () =>{
  
        let  newLinkedListArr = new LikedListTesting();
         newLinkedListArr.insert(10);
         newLinkedListArr.insert(1);
         newLinkedListArr.insert(6);
         newLinkedListArr.insert(7);
         newLinkedListArr.insert(5);
         newLinkedListArr.toString();
     
        expect( newLinkedListArr.toString()).toEqual(("\"{ 5 } -> NULL\""));
    
      });

});