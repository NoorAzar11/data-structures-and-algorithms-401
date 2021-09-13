'use strict';

const { InserationSort,Reversesorted} = require('../insertsort');

describe('Testing InsertionSort Array', ()=>{
   

    test('Testing from the low to high ', ()=> {   
        let sortedArray = [ 1, 2, 4, 5, 7, 8 ]
        expect(InserationSort([5, 4, 2, 1, 7, 8])).toEqual(sortedArray);
    });

    test('Testing from high to low ', ()=> {   
        let revSortedArray = [ 8, 7, 5, 4, 2, 1 ]

        expect(Reversesorted([5, 4, 2, 1, 7, 8])).toEqual(revSortedArray);
    });
 
    });

