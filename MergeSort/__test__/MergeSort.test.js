'use strict';

const sorted= require('../MergeSort');

describe('Testing Merge Sort', ()=>{
   

    test('Testing merge Sorting', ()=> {  

        let arr = [8,4,23,42,16,15];
        let outcome = [ 4, 8, 15, 16, 23, 42 ];
        expect(sorted(arr)).toEqual(outcome);
    });

 
    });

