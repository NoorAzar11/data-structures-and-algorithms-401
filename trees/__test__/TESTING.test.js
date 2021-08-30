'use strict';

const { expect } = require('@jest/globals');
const {BinaryTree} = require('../BinaryTree');
const Node = require('../node');
let tree = null;

describe('Binary Tree', ()=>{

    beforeAll(()=> {
        let one = new Node(2);
        let two = new Node(7);
        let three = new Node(5);
        let four = new Node(2);
        let five = new Node(6);
        let six = new Node(9);
        let seven = new Node(5);
        let eight = new Node(11);
        let nine = new Node(4);

        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five
        five.left = seven;
        five.right = eight;
        three.right = six;
        six.left= nine;
        // create a tree and pass root to it
        tree = new BinaryTree(one);
    });

    it('constructor', ()=>{
        const newTree = new BinaryTree();
        expect(newTree.root).toBeNull();
        expect(tree.root.value).toEqual(2);
    });

    it('preOrder', ()=> {
        let expectedOutput = [  2, 7, 2, 6, 5,11, 5, 9, 4];
        let preOrder = tree.preOrder();
        console.log("preOrder output ---->", preOrder);
        expect(preOrder).toEqual(expectedOutput);
    });

    it('inOrder', ()=> {
        let expectedOutput = [  2, 7, 5, 6, 11, 2, 5, 4, 9];
        let inOrder = tree.inOrder();
        console.log("inOrder output ---->", inOrder);
        expect(inOrder).toEqual(expectedOutput);
    });

    it('postOrder', ()=> {
        let expectedOutput = [ 2, 5, 11, 6, 7,
            4, 9,  5, 2];
        let postOrder = tree.postOrder();
        console.log("postOrder output ---->", postOrder);
        expect(postOrder).toEqual(expectedOutput);
    });
 
});