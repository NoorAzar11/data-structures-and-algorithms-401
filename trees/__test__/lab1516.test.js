'use strict';

const BinarySearchTreeTest = require('../BinarySearchTree');
const Node = require('../node');
const { expect } = require('@jest/globals');
let BinarySearchTreeTesting 
beforeEach(() => {
    BinarySearchTreeTesting = new BinarySearchTreeTest();
  });

describe('Testing if Binary Search Tree Working Right ', () => {
    it('Testing an empty tree', () => {
      
      expect(BinarySearchTreeTesting.root).toBeNull();
    });


    it('Testing tree with a single root node', () => {
        BinarySearchTreeTesting.add(20);
        expect(BinarySearchTreeTesting.root.value).toEqual(20);
        expect(BinarySearchTreeTesting.left).toBeFalsy();
        expect(BinarySearchTreeTesting.right).toBeFalsy();
      });


      it('Testing left child and right child root node', () => {
        BinarySearchTreeTesting.add(10);
        BinarySearchTreeTesting.add(5);
        BinarySearchTreeTesting.add(15);
        expect(BinarySearchTreeTesting.root.value).toEqual(10);
        expect(BinarySearchTreeTesting.root.left.value).toEqual(5);
        expect(BinarySearchTreeTesting.root.right.value).toEqual(15);
      });

});