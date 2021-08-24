'use strict';

const validateBrackets= require('../stack-queue-brackets');

describe('Testing validateBrackets',()=>{
    it('Testing Char',()=>{
        expect(validateBrackets('()')).toBe(true);
        expect(validateBrackets('(){}[]')).toBe(true);
        expect(validateBrackets('(){[]}')).toBe(true);
        expect(validateBrackets('(){Noor}[code13]')).toBe(true);
    })

    it('Testing retrun',()=>{
        expect (validateBrackets()).toBe("Please Enter Anything ");
    });
});