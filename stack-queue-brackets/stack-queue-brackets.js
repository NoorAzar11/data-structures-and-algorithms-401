'use strict';

const Stack=require('../stack-and-queue/stack');

function validateBrackets(string){

    const newStack=new Stack();

    if(string){
        for(let i=0;i<string.length;i++){

            let lastStringInput=newStack[newStack.length-1];

                if ((string[i] === '(') || (string[i] === '{') || (string[i] === '[')){

                newStack.push(string[i]);
                
                if ((lastStringInput === '(' && string[i] === ')') || (lastStringInput === '{' && string[i] === '}') || (lastStringInput === '[' && string[i] === ']'))
                {
                    newStack.pop();

                }

                if ((string[i]===')') && (lastStringInput!=='(') || (string[i]==='}') && (lastStringInput!=='{') || (string[i]===']') && (lastStringInput!=='['))
                {
                    return false;

                }
            }
            return newStack.length ? false:true;
        }
    }else{

        return "Please Enter Anything ";

    }
}

module.exports =validateBrackets;