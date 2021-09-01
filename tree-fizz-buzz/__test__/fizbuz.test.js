'use strict';

const { BinaryTree} = require('../fizzbuzz');
const Node = require('../../trees/node');

describe('Testing Fizz Buzz Tree', ()=>{

    let expectedOutput =[ 2, 7, 'Buzz', 'Fizz', 'FizzBuzz', 2, 'Buzz', 4, 'Fizz' ]
    let tree = new BinaryTree();

    let one = new Node(2);
    let two = new Node(7);
    let three = new Node(5);
    let four = new Node(2);
    let five = new Node(6);
    let six = new Node(9);
    let seven = new Node(5);
    let eight = new Node(15);
    let nine = new Node(4);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five
    five.left = seven;
    five.right = eight;
    three.right = six;
    six.left = nine;

    it('Testing FizBuz', ()=> {   
       
        expect(tree.fizzBuzzTree(one)).toEqual(expectedOutput);
    });

});