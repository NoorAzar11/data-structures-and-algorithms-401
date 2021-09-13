'use strict'


function InserationSort(sortArr) {
    for (let i = 1; i < sortArr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (sortArr[j] < sortArr[j - 1]) {
                const tempArr = sortArr[j];
                sortArr[j] = sortArr[j - 1];
                sortArr[j - 1] = tempArr;
            } else {
                break;
            }
        }
    }
    return sortArr;
}

function Reversesorted(revArray) {
    for (let i = 1; i < revArray.length; i++) {
        for (let j = i; j > 0; j--) {
            if (revArray[j] > revArray[j - 1]) {
                const tempArr = revArray[j];
                revArray[j] = revArray[j - 1];
                revArray[j - 1] = tempArr;
            } else {
                break;
            }
        }
    }
    return revArray;
}


module.exports = { InserationSort, Reversesorted }