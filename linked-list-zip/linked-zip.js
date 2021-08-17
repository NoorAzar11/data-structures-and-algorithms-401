'use strict';

const LinkedList = require('./LinkedList');

const zipLinkedList=(FirstList, secList) =>{
  
  if (FirstList.length === 0 || secList.length === 0 ) {
    return 'Exception';
  }
  let loc1 = FirstList.head;
  let loc2 = secList.head;

  let listLeng = FirstList.length;
  let listlen2 = secList.length;

  while (loc1 && loc2.next){
    FirstList.insertAfter(loc1.value,loc2.value);

    loc1 = loc1.next.next;
    loc2 = loc2.next;
  }
  if (listLeng === listlen2){
    FirstList.append (loc2.value);
  } else if (listLeng < listlen2){
    FirstList.append(loc2.value);
  } else if (listLeng > listlen2){
    FirstList.insertAfter (loc1.value,loc2.value);
  }
  return FirstList;
}

module.exports = zipLinkedList;