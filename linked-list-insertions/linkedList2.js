'use strict';

const Node = require('./node'); 

class linkedlistinsertions{
    constructor(){
        this.head=null;
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
    
    }


    module.exports=linkedlistinsertions;
