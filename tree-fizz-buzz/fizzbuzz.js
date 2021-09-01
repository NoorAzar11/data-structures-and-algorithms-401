'use strict';

class Node {
    
    constructor(value, left = null, right=null) {
        this.value = value;
        this.left= left;
        this.right = right;
    }
}

class BinaryTree {

    constructor(root=null) {
        this.root = root;
    }

    fizzBuzzTree(tree) {
      const arr=[];

    let FizBT = (node) => {
      if (node.left) {
        
        FizBT(node.left); 
      }
  
      if (node.value % 15 === 0) 
      { 
        node.value = 'FizzBuzz'; 
        arr.push('FizzBuzz')

    }
      else if (node.value % 5 === 0) {
           node.value = 'Buzz';
           arr.push('Buzz')
         }
      else if (node.value % 3 === 0) {
           node.value = 'Fizz'; 
           arr.push('Fizz')
        }
        else{
          arr.push(node.value)
        }
  
      if (node.right) { 
          FizBT(node.right); }
    };
  
    FizBT(tree);
  if(arr)
    return arr;
  };



}




  module.exports={BinaryTree};