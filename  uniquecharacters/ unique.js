'use strict'


const Hashmapinter =require ('./unique2')


function uniqueCharactersinter(string) {

    let hash1 = new Hashmapinter(1024);


    let ArrayHash = string.split("");

    let key;  let hashmaap;

   

    for (let j = 0; j < ArrayHash.length; j++) {

        if (ArrayHash[j] !== " ") {

            key = ArrayHash[j].toLowerCase();

            hash1.add(key, "noValue");

            hashmaap = hash1.hash(key);

            if (hash1.storage[hashmaap].head.next) {

                return false;
            }
        }
    }
    return true;
}




module.exports = uniqueCharactersinter












































































































