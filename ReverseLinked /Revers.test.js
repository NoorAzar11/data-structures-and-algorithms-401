'use strict';


 const LinkedList = require('../linked-list-zip/LinkedList');
 
const reverse = require('./Reverse');

describe('Testing Reverse ', () => {

  it ('Testing ...', () => {

    let Testing = new LinkedList();

    Testing.insert(100);
    Testing.insert(200);
    Testing.insert(300);

    let testing2 = new LinkedList();

    testing2.insert(300);
    testing2.insert(200);
    testing2.insert(100);

    expect(reverse(Testing.head)).toEqual(testing2.head);
  });
});