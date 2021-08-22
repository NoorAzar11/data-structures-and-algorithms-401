'use strict';

const Stack = require('../stack-and-queue/stack');
 const Node = require('./node');

class Pseudoqueue {
    constructor(){
        this.newPush= new Stack();
        this.newpop=new Stack();

    }
    enqueue(val){
        this.newPush.push(val);
    }

    dequeue(){
        // return this.storage.shift();
        if(this.empty()){
            return 'dequeueempty';
        }
        if(this.newpop.isEmpty()){
            while(!this.newPush.isEmpty()) {
                this.newpop.push(this.newPush.pop());

            }
        }
        return this.newpop.pop();
    }

    peek(){
        if(this.empty()){
            return 'peek';

        }
        if(this.newpop.isEmpty()){
            while(!this.newPush.isEmpty()){
                this.newpop.push(this.newPush.pop());
            
            }
        }
        return this.newpop.peek();
    }

    SQempty(){
        return this.newpop.isEmpty() && this.newPush.isEmpty();
    }


}

module.exports =Pseudoqueue;