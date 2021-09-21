"use strict";



class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}




class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(data) {

    const node = this.root;
    if (node === null) {
      this.root = new Node(data);

      return;

    } else {

      const searchTree = function (node) {

        if (data < node.data) {

          if (node.left === null) {

            node.left = new Node(data);

            return;

          } else if (node.left !== null) {

            return searchTree(node.left);
          }
        } else if (data > node.data) {

          if (node.right === null) {

            node.right = new Node(data);

            return;

          } else if (node.right !== null) {

            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  inOrder() {

    if (this.root == null) {

      return null;

    } else {

      let result = new Array();

      function traverseInOrder(node) {

        node.left && traverseInOrder(node.left);

        result.push(node.data);

        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      
      return result;
    };
  }

}

class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
    this.size2 = 0;
  }

  hash(key) {

    return key % this.size
  }

  add(key, value) {
    let hash = this.hash(key);
    console.log(hash);
    if (!this.map[hash]) {
      this.map[hash] = value;
    }
    let entry = { [key]: value }
    this.map[hash] = entry;
    this.size2++;
    return hash

  }


}

function treeintersection(Binarytree1, Binarytree2) {

  let hashArr = [];

  if (Binarytree1.root && Binarytree2.root) {

    let hashmap = new Hashmap(1024);

    let TreeVal1 = Binarytree1.inOrder();

    TreeVal1.forEach(value => {

      hashmap.add(value);
    });

    let TreeVal2 = Binarytree2.inOrder();

    TreeVal2.forEach(value => {

      let keyhash = hashmap.hash(value);

      if (hashmap.map[keyhash]) {
        hashArr.push(Object.keys(hashmap.map[keyhash]));
      }
    });

    return hashArr;
  }

  else

    return 'anything'

}


module.exports = { BinaryTree, tree_intersection: treeintersection }