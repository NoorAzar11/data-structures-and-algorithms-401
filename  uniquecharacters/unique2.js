'use strict';




class Node {


    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }


    insert(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }
}





class Hashmap {
    constructor(size) {
        this.size = size;
        this.storage = new Array(size);
    }

    hash(key) {

        const sum = key.split("").reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);

        const hashMapKey = (sum * 19) % this.size;
        return hashMapKey;
    }


    add(key, val) {

        let hashMap;

        if (typeof key == "number") {


            hashMap = key;
            
        } else {


            hashMap = this.hash(key);
        }

        if (!this.storage[hashMap]) {


            const linkedList11 = new LinkedList();

            linkedList11.insert({ [key]: val });

            this.storage[hashMap] = linkedList11; 
        } else {

            this.storage[hashMap].insert({ [key]: val });
        }
    }

}














module.exports = Hashmap






















































