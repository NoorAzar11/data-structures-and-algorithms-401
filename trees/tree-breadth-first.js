'use strict';

//Breadth-first search involves search through a tree one level at a time. 
//We traverse through one entire level of children nodes first, before moving on to traverse through the grandchildren nodes//
//find the shortest path
//BFS use queue to track which node to visit next
//it will always go from left to right)

// const Node= require('./node'); 


// class BinaryTree {

//     constructor(root=null) {
//         this.root = root;
//     } 


//      breadthfirst=(root)=>{
//         const queue=[root];
//         while(queue.length>0){
//             const curr=queue.shift();
//             console.log(curr.value)
//             if(curr.left!==null){
//                 queue.push(curr.left);
//             }
//             if(curr.right!==null){
//                 queue.push(curr.right);
//             }
//         }
//     };

// }

    // let  breadthfirst=(tree, rootNode,searchValue) =>{
    

    //     // make a queue array
    //     let queue = [];
    //     // populate it with the node that will be the root of your search
    //     queue.push(rootNode);
    
    //     // search the queue until it is empty
    //     while (queue.length > 0) {
    //     // assign the top of the queue to variable currentNode
    //         let currentNode = queue[0];
    //         console.log("Current node is:" + currentNode.value);
    
    //         // if currentNode is the node we're searching for, break & alert
    //         if (currentNode.value === searchValue) {
    //             console.log("Found it!");
    //             return;
    //         }
    
    //         // if currentNode has a left child node, add it to the queue.
    //         if (currentNode.left !== null) {
    //             queue.push(tree[currentNode.left]);
    //         }
    
    //         // if currentNode has a right child node, add it to the queue.
    //         if (currentNode.right !== null) {
    //             queue.push(tree[currentNode.right]);
    //         }
    //         // remove the currentNode from the queue.
    //         queue.shift();	
    //     }
    //     console.log("Sorry, no such node found :(");	
    // };

    // breadthfirst(tree,tree[10], "12");

    // let one = new Node(2);
    // let two = new Node(7);
    // let three = new Node(5);
    // let four = new Node(2);
    // let five = new Node(6);
    // let six = new Node(9);
    // let seven = new Node(5);
    // let eight = new Node(11);
    // let nine = new Node(4);
    
    // one.left = two;
    // one.right = three;
    // two.left = four;
    // two.right = five
    // five.left = seven;
    // five.right = eight;
    // three.right = six;
    // six.left= nine;
    
    // // create a tree and pass root to it
    // let tree = new BinaryTree(one);
    // // console.log(tree);
    // // console.log(tree.Breadthfirst());
    // let check = breadthfirst(one)
    // console.log(check);



 
// const ll=new BinaryTree();
// ll.breadthfirst(10)
// ll.breadthfirst(2)
// ll.breadthfirst(3)
// ll.breadthfirst(4)
// ll.breadthfirst(4)
// console.log(ll)

//  module.exports = BinaryTree;


// const breadthfirst=(root)=>{
//     const queue=[root];
//     while(queue.length>0){
//         const curr=queue.shift();
//         console.log(curr.value)
//         if(curr.left!==null){
//             queue.push(curr.left);
//         }
//         if(curr.right!==null){
//             queue.push(curr.right);
//         }
//     }
// };