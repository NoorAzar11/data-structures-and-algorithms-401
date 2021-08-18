'use strict';



function revLinkedlist(FHead) {
  let preNode = null;


  while (FHead !== null) {

    let nextNode = FHead.next;
    
    FHead.next = preNode;
    preNode = FHead;
    FHead = nextNode;
  }

  return preNode;
}

module.exports = revLinkedlist;