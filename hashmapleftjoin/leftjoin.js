'use strict';



class Hashmap {
    constructor(size) {
        this.size = size;
        this.data = new Array(size);
    }



    hash(key) {
        const sum = key.split('').reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);
        const hashKey = (sum * 19) % this.size;
        return hashKey;
    }



    add(key, value) {
        const hashmappp = this.hash(key);
       
        if (!this.data[hashmappp]) {
            const obj = { [key]: [value] };
            this.data[hashmappp] = obj;
        } else {
            let entries = Object.entries(this.data[hashmappp])[0];
            entries[1].push(value);
        }
    }


    addHashed(hash, value) {
        let output = [];
        let key = Object.keys(this.data[hash])[0];
        output.push(key);
        let existingValues = Object.values(this.data[hash])[0];
        for (let i = 0; i < existingValues.length; i++) {
            output.push(existingValues[i]);
        }
        if (value) {
            let newValues = Object.values(value)[0];
            for (let i = 0; i < newValues.length; i++) {
                output.push(newValues[i]);
            }
        } else {
            output.push(null);
        }
        this.data[hash] = output;
    }
}






function leftjoin(hash1, hash2) {

    if (hash1.data.length > 1) {

        for (let i = 0; i < hash1.data.length; i++) {

            if (hash1.data[i]) {

                hash1.addHashed(i, hash2.data[i]);
            }
        }
    }
    
    return hash1;
}
















module.exports = {leftJoin: leftjoin ,Hashmap }