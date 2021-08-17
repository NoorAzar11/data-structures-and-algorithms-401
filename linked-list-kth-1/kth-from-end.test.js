'use strict';


const LinkedList=require('./LinkedList');

describe('Testing Linked List',()=>{


  let LinkedTest=new LinkedList();

  it('Testing empty linked list',()=>{
    expect(LinkedTest.head).toBeNull();
  });

  it(' Testing insertingt',()=>{
    LinkedTest.insert(1);
    expect(LinkedTest.head.value).toEqual(1);
  });

  it('Testing node',()=>{
    expect(LinkedTest.head.value).toEqual(1);
  });

  it('Testing adding ',()=>{
    LinkedTest.insert(2);
    LinkedTest.insert(3);
    expect(LinkedTest.head.value).toEqual(3);
  });

  it('Testing includes ',()=>{
    expect(LinkedTest.includes(3)).toBeTruthy();
    expect(LinkedTest.includes(4)).toBeFalsy();
  });
 

  it('testing middle', ()=> {
    LinkedTest.insertAfter(3, 7);
    console.log( LinkedTest)
    expect(LinkedTest.toString()).toEqual('{3} -> {7} -> {null}');
  });

  

 

});