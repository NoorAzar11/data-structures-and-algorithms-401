'use strict';

const Node = require('./node');

class LinkedList {

  constructor() {
    this.head = null;
    this.length = 0;
  }


  insert(value) {
    try {
      this.head = new Node(value);
    }
    catch (err) {
      console.error('Error !!:', err);
    }
  }
  // insert(value) {
  //     // create a node for this value
  //     let newNode = new Node(value);

  //     if (!this.head) {
  //         this.head = newNode;
  //     } else {
  //         let currentNode = this.head;
  //         while(currentNode.next) {
  //             currentNode = currentNode.next;
  //         }
  //         // reached the end of the linkedlist
  //         currentNode.next = newNode;
  //     }
  // }



  include(value) {
    try {
      let trulyfalse = false;
      let locater = this.head;
      while (locater) {
        if (locater.value === value) {
          trulyfalse = true;
          console.log('Is there an Error', trulyfalse);
          return trulyfalse;
        }
        locater = locater.next;
      }
      console.log('Is there an Error', trulyfalse);
      return trulyfalse;
    }

    catch (err) {
      console.error('Error !!', err);
    }
  }

  toString() {

    try {
      let newArr = [];
      let head = this.head;
      while (head) {
        newArr.push('{ ');
        newArr.push(head.value);
        newArr.push(' }');
        newArr.push(' -> ');
        head = head.next;
      }

      newArr.unshift('"');
      newArr.push('NULL"');
      let newArray = newArr.join('');
      console.log(newArray);
      return newArray;
    }

    catch (err) {
      console.error('Error!!!', err);
    }
  }



}

module.exports = LinkedList