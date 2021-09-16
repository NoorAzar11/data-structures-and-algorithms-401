'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }
}



class Hashmap {
    constructor(size) {
        this.size = size;
        this.map = new Array(size);
    }
    hash(key) {
        return key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt();
        }, 0) * 1000 % this.size;
    }


    add(key, value) {

        let hashArray = this.hash(key);
     

        if (!this.map[hashArray]) {
            this.map[hashArray] = new LinkedList();
        }
        let entry = { [key]: value }
        this.map[hashArray].append(entry);
    }


    get(key) {
        let hashArray = this.hash(key);
        if (this.map[hashArray]){

            let current = this.map[hashArray].head;
            while (current) {
                if (Object.keys(current.value) == key)
                    return current.value
                current = current.next
    
            }
        }
        return 'Its Not There Array';
     



    }


    contains(key) {
        let hashArray = this.hash(key);

        if (this.map[hashArray]) {

            let current = this.map[hashArray].head;

            while (current) {

                if (Object.keys(current.value) == key)

                    return true;
                current = current.next
            }
        }
        return false;
    }
}





















 
module.exports = Hashmap;