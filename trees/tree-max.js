'use strict';

 const Node= require('./node');


// class Node {
    
//     constructor(value, left = null, right=null) {
//         this.value = value;
//         this.left= left;
//         this.right = right;
//     }
// }

class BinarySearchTree{
    constructor(root=null){
        this.root = root;
    }


max(root,node){
    if(node.value<root.value){
        if(root.left===null){
            root.left=node;
        }else{
            this.max(root.left,node);
        }
        }else if(node.value>root.value){
            if(root.right===null){
                root.right=node;

            }else{
                this.max(root.right,node);
            }
        }

    }
}




const ll=new BinarySearchTree();
ll.max(5)
ll.max(10)
ll.max(20)
ll.max(15)
ll.max(21)

console.log(ll);
module.exports = BinarySearchTree;
