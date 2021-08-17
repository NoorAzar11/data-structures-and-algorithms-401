'use strict';

const Node = require ('./Node');

class LinkedList {

  constructor(){
    this.head = null;
    this.length=0;
  }

  append(value) {
    let Located = this.head;
 
    while (Located) {
     
      if (Located.next === null) {
        Located.next = new Node(value);
        return;
      }
      Located = Located.next;
     
    }
  }




  insert (value){
    const Firstnode = new Node(value);
    if (!this.head){
      this.head = Firstnode;
      this.length++;
    }else {
      let located = this.head;
      while (located.next){
        located = located.next;
      }
      located.next=Firstnode;
      this.length++;
    }
  }

  include (val){
    let locatedNode = this.head;
    let result=false;
    while(locatedNode.next){
      locatedNode = locatedNode.next;
      if(locatedNode.value === val){
        result = true;
        return result;
      }
    }
    return result;
  }

  toString (){
    let located = this.head;
    let strinRes ='';
    while (located){
      strinRes += `{${located.value}}->`;
      located =located.next;
      if(!located){
        strinRes += 'NULL';
      }
    }
    return strinRes;
  }

  append (value){
    let locatedNode = new Node(value);
    this.length++;
    if(!this.head){
      this.head=locatedNode;
    }else {
      let locatednode2 = this.head;
      while (locatednode2.next){
        locatednode2 = locatednode2.next;
      }
      locatednode2.next = locatedNode;
    }
  }


  insertAfter (value,newValue){
    let locatedNode = new Node (newValue);
    let located = this.head;
    while(located){
      if(located.value === value){
        let temNext = located.next;
        this.length++;
        located.next = locatedNode;
        locatedNode.next = temNext;
        return;
      }
      located = located.next;
    }
    return 'Exception';
  }

  insertBefore (value,newValue){
    let locatedNode = new Node (newValue);
    let located = this.head;
    while(located.next){
      if(located.next.value === value){
        let temNext = located.next;
        this.length++;
        located.next = locatedNode;
        locatedNode.next = temNext;
        return;
      }
      located = located.next;
    }
    return 'Exception';
  }


  kthFromEnd(k){
    let locatedNode = this.head;
    let fleeting = this.length-1-k;
    let idx=0;
    while(locatedNode){
      if(fleeting === idx){
        return locatedNode.value;
      }
      locatedNode = locatedNode.next;
      idx++;
    }
    return 'Exception';
  }

}

module.exports = LinkedList;