'use strict'



function mergeArray(left, right) {
    let sortArray = []; 
    while (left.length && right.length) {

      if (left[0] < right[0]) {
        sortArray.push(left.shift());
      } else {
        sortArray.push(right.shift());
      }
    }
    return [...sortArray, ...left, ...right];
  } 




function mergeSortArray(arry) {
    const middle =Math.ceil(arry.length / 2) ;
  
    if (arry.length <= 1) {
      return arry;
    }
  
    const left = arry.splice(0, middle);
  
    const right = arry;

  
    return mergeArray(mergeSortArray(left), mergeSortArray(right));
  }

  
module.exports = mergeSortArray;

























