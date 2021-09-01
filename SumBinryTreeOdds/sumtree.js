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

    sumsumtree(root) {
        let arr = 0;
        const sumQueue = [root];
        if(root){
            while (sumQueue.length > 0) {
                let locatted = sumQueue.shift();
                {
                    if(locatted.value%2!==0)
                    arr+=locatted.value; 
                }
               
                if (locatted.left)
                    sumQueue.push(locatted.left)
                if (locatted.right)
                    sumQueue.push(locatted.right)
        
            }
            return arr
    
        }
        else return 'empty retrun';
    }
    
}

module.exports =BinaryTree;