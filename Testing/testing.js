'use strict';
//to create a node its gonna need data and next 

class Node{
    constructor(data,next=null){
        this.data=data,
        this.next=next
    }
}

//to create linked list its gonna need head and size 
class LinkedList{
    constructor(){
        this.head=null,
        this.size=0
    }

    //insert first node through the head of
    insertFirst(data){

        this.head=new Node(data,this.head);
        this.size++;

    }

    //insert the last node 

    insertLast(data){

        let node=new Node(data);
        let current;

        //if empty make head 
        if(!this.head){ //not true or not false 
            this.head=node;
        }else{
            current=this.head;
            while(current.next){
                current=current.next;
            }
            current.next=node;
        }
        this.size++;
    }


///inser index for list elements

insertAt(data,index){
    //if index is out if range
    if(index>0 && index>this.size){
        return;
    } 
    //if first index is // case edge
    if(index===0)
{
    this.head=new Node(data,this.head);
    return;
}


 }

    ///to print all data that we insert 
    printDataList(){
        let current=this.head;
        while(current){
            console.log(current.data)
            current=current.next;
        }
    }
}


const ll=new LinkedList();

 ll.insertFirst(100);
 ll.insertFirst(200);
 ll.insertFirst(300);
 ll.insertFirst(7500);
 ll.insertLast(500000);
 ll.insertLast(600000);
 ll.insertLast(700000);
 ll.insertLast(900000);

// ll.insertAt(55555 ,0);
//  ll.insertAt(666666 ,1);
//  ll.insertAt(9999,2);
 console.log(ll);
 ll.printDataList();