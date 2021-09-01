
const BinaryTreeSumOdds = require('../sumtree');
const Node = require('../../trees/node');

describe('Testing SumTree', ()=>{
    it('Testing Roots', ()=> {
        let one = new Node(8);
        let two = new Node(3);
        let three = new Node(10);
        let four = new Node(1);
        let five = new Node(6);
        let six = new Node(14);
        let seven = new Node(4);
        let eight = new Node(7);
        let nine = new Node(13);
        
        one.left = two;
        one.right = three;
        two.left = four;
        two.right = five
        five.left = seven;
        five.right = eight;
        three.right = six;
        six.left = nine;
        
        let expectedOutput =24;
        let sumsumtree = new BinaryTreeSumOdds()
       
        expect(sumsumtree.sumsumtree(one)).toEqual(expectedOutput);
    });
    it('Testing Retrun', ()=> {
        let sumsumtree = new BinaryTreeSumOdds()
        expect(sumsumtree.sumsumtree()).toEqual('empty retrun');
    });

    });


































