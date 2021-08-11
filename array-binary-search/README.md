## Binary Search Array

let arr=[10,2,5,4]
let key;
function searchUsingbinary(array,key){
    let lowNumber=0;
    let highNumber=arr.length-1;
    let middleNumber;


    while(lowNumber <= highNumber){
        middleNumber=Math.floor((lowNumber+highNumber)/2);
        if(arr[middleNumber]===key){
             return middleNumber;

        }else if(arr[middleNumber]<key){
            lowNumber=middleNumber+1;
        }else {
            highNumber=middleNumber-1;
        }

    }
    return -1;
}
searchUsingbinary(arr,15)