'use strict';

const Node = require('./node'); 

class linkedlistinsertions{
    constructor(){
        this.head=null;
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
      
      insert(value){
        try {
          this.head = new Node(value) ;
       
        }
        catch(error) {
          console.error(`Error ${error}`);
        }
      }

      includes(value) {
        let located = this.head;
        while (located) {
          if (value === located.value) {
            return true;
          } else if (located.next === null) {
            return false;
          } else {
            located = located.next;
          }
        }
      }

      insertBefore(value, newValue) {
        let locatted = this.head;
        let newItem = new Node(newValue);
        while (locatted.next !== null) {
          if (locatted.value === value) {
            newItem.next = locatted;
            this.head = newItem;
          } else if (locatted.next.value === value) {
            let fleeting = locatted.next;
            locatted.next = newItem;
            newItem.next = fleeting;
            return;
          }
          locatted = locatted.next;
        }
    
      }

      insertAfter(value, newValue){
        let linkedNode=new Node(newValue);
        if(this.head){
          let located=this.head;
          while(located){
            if(located.value===value){
              let fleeting=located.next;
              located.next=linkedNode;
              linkedNode.next=fleeting;
              return ;
            }
            located=located.next;
          }
        }
        return ;
      }


      kFomEnd(k) {
        let node = this.head;
        let fleeting = this.length - 1 - k;
        let idx = 0;
        while (node) {
          if (fleeting === idx) {
            return node = node.value;
          }
          node = node.next;
          idx++;
        }
        return;
      }
    
    }


    module.exports=linkedlistinsertions;
