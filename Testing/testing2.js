'use strict';
//to build node first for the linklist 
//node need first thing data and next and next need to be null

class Node {
    constructor(data,next=null){
        this.data=data,
        this.next=next

    }

}
//to build linkedlist we need the head as a pointer and we need the size to count the size of data 
//so linkedlist need head to be null for the first time because there no data yet!
//and the size will give it inital val for it 
class LinkedList{
    constructor(){
        this.head=null,
        this.size=0

    }
    //outpul for this one first in last out of we 20,30,50 and the 
    //the putout its gona be 50,30,20
    insertFirstNode(data){
     this.head=new Node(data,this.head)
     this.size++;
 }

//output 20,30,50,40 size 4
//when we want to add element we need data and need let curr and this.head 
//and we have to make curr.next=newNode

addelement(data){
    let newNode=new Node(data);
    let curr=this.head;
    if(!this.head){
        this.head=newNode;
    }else{
        curr=this.head;
        while (curr.next!==null) {
            curr=curr.next;
        }
        curr.next=newNode;
    }
    this.size++;
}

////////addelemetby their index
//first we have to add a data and inded //
//first we make index>0 and index>this.size;retrun anything 
//let newNode=new Node(data,index)
//then we make index==0 
//newNode
addelementAt(data, index) {
    if (index < 0 || index > this.size)
        return 'sorry enter valid index';
    else {
        let newNode = new Node(data);
        if (index == 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            let prev,cur = this.head, count = 0;
            while (count < index) {
                count++;
                prev = cur;
                cur = cur.next;

            }
            prev.next = newNode;
            newNode.next = cur;
        }
        this.size++
    }
}

}


const ll=new LinkedList();

// ll.addelement(20);
// ll.addelement(30);
// ll.addelement(50);
// ll.addelement(40);

ll.addelementAt(40)
ll.addelementAt(100)
ll.addelementAt(200)
console.log(ll);


