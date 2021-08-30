'use strict';
const Node= require('./node');


class BinaryTree {

    constructor(root=null) {
        this.root = root;
    }

    // root - left - right
    preOrder() {
        let result = [];
        let traverse = (node) => {
            result.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    // left - root - right
    inOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            result.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(this.root);
        return result;
    }

    // left  - right - root
    postOrder() {
        let result = [];
        let traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            result.push(node.value);
        }
        traverse(this.root);
        return result;
    }

  
}

//root hold all tree
//it will pushor  data 
//first in first out 
//Breadth-first search involves search through a tree one level at a time. 
//We traverse through one entire level of children nodes first, before moving on to traverse through the grandchildren nodes//
//find the shortest path
//BFS use queue to track which node to visit next
//it will always go from left to right)

const breadthfirst=(root)=>{
    const queueBreadth=[root];
    let arr=[];
    while(queueBreadth.length>0){
        let curr=queueBreadth.shift();
        //to give value to retrun value for every element 
        console.log(curr.value)
        arr.push(curr.value);
        if(curr.left!==null){
            queueBreadth.push(curr.left);
        }
        if(curr.right!==null){
            queueBreadth.push(curr.right);
        }
    }
    return arr;
};




module.exports = {BinaryTree,breadthfirst};