'use strict';

const LinkedList = require('./LinkedList');
const zipLinkedList = require('./linked-zip');

describe('Testing LinkedList zip', () => {

  it('Testing  linked list', () => {
    const Testing1 = new LinkedList();
    const Testing2 = new LinkedList();

    expect(zipLinkedList(Testing1, Testing2).toString()).toEqual('Exception');
  });

  it('Testing length', () => {
    const testing1 = new LinkedList();
    const testing2 = new LinkedList();
    const testing3 = new LinkedList();

    testing1.insert(100);
    testing1.insert(200);

    testing2.insert(300);
    testing2.insert(400);

    testing3.insert(100);
    testing3.insert(300);
    testing3.insert(200);
    testing3.insert(400);

    expect(zipLinkedList(testing1, testing2).toString()).toEqual(testing3.toString());
  });

  it('Testing Len LinkedList ', () => {
    const testing1 = new LinkedList();
    const testing2 = new LinkedList();
    const testing3 = new LinkedList();

    testing1.insert(100);
    testing1.insert(200);

    testing2.insert(300);
    testing2.insert(400);
    testing2.insert(500);

    testing3.insert(100);
    testing3.insert(300);
    testing3.insert(200);
    testing3.insert(400);
    testing3.insert(500);

    expect(zipLinkedList(testing1, testing2).toString()).toEqual(testing3.toString());
  });
  
  it('Testing  different length', () => {

    const testing1 = new LinkedList();
    const testing2 = new LinkedList();
    const testing3 = new LinkedList();

    testing1.insert(100);
    testing1.insert(200);
    testing1.insert(500);
    testing1.insert(600);

    testing2.insert(300);
    testing2.insert(400);

    testing3.insert(100);
    testing3.insert(300);
    testing3.insert(200);
    testing3.insert(400);
    testing3.insert(500);
    testing3.insert(600);

    expect(zipLinkedList(testing1, testing2).toString()).toEqual(testing3.toString());
  });
});