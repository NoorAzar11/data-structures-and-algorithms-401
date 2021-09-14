'use strict'



function QuickSort(arrayOfIndex, left, right) {
  
    let indexdigits;
    if (arrayOfIndex.length > 1) {
        indexdigits = divide(arrayOfIndex, left, right);
        if (left < indexdigits - 1) { 
            QuickSort(arrayOfIndex, left, indexdigits - 1);
        }
        if (indexdigits < right) {
            QuickSort(arrayOfIndex, indexdigits, right);
        }
    }
    return arrayOfIndex;
}




function switchfun(switcharrayfun, leftIndexarr, rightIndexarr){
    let tempelement = switcharrayfun[leftIndexarr];
    switcharrayfun[leftIndexarr] = switcharrayfun[rightIndexarr];
    switcharrayfun[rightIndexarr] = tempelement;
}




function divide(divarray, left, right) {
    let  central  = divarray[Math.floor((right + left) / 2)], 
        x = left,
        y = right; 
    while (x <= y) {
        while (divarray[x] < central ) {
            x++;
        }
        while (divarray[y] > central ) {
            y--;
        }
        if (x <= y) {
            switchfun(divarray, x, y); 
            x++;
            y--;
        }
    }
    return x;
}






module.exports = QuickSort;