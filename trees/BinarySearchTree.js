'use strict';

const Node= require('./node');

class BinarySearchTree{
    constructor(root=null){
        this.root = root;
    }

    //recursion to search the binary search tree for where our new data should be appended. 
    //The first thing being checked in the insert method is if our BST root is still null.
    //it means this is the first time insert has been called to insert data into the tree.
    //insert new node into treee 
add(val){
 if(this.root===null){
     this.root=new Node(val);
 }else
 {
     const node = this.root;
     const searchTreeB=node=>{
         if(val<node.value && node.left){
            searchTreeB(node.left);
         }else if(val<node.value){
           node.left=new Node(val);
         }else if(val<node.value&&node.right){
            searchTreeB(node.right);
         }else if(val>node.value){
node.right=new Node(val);
         }

         };
         return searchTreeB(node);
     }
 }

 Contains(value){
let BST=this.root;
while(BST){
    if(BST.value===value){
        return true;
    }
    if(value<BST.value){
        BST=BST.left;
    }else{
        BST=BST.right;
    }

}
return false;
 }





}




const ll=new BinarySearchTree();

// ll.add(555555555555)
// ll.add(666665555555555)
// ll.add(555666666665)
// ll.add(555666666665)
// ll.add(6000)
// ll.add(7000)
// ll.add(8000)

ll.Contains(4555)

ll.Contains(666)
ll.Contains(66666)
ll.Contains(6633)
ll.Contains(6633)
console.log(ll);





module.exports = BinarySearchTree;