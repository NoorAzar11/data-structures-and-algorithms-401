'use strict';

const array1 = [1, 2, 3, 4,5,6,7,8,9,10];
const newArray=[];
function revArray(arr){
  	for (let i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    	console.log(newArray);
}
revArray(array1);

