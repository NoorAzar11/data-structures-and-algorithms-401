

'use strict';


function repeatedWord (paragraph) {

    const repeatedwords = paragraph.split(/[\s,]+/);
  
    let array = [];
  
    for (let i=0; i<repeatedwords.length; i++){

      let lowerWords = repeatedwords[i].toLowerCase();
  
      const located = array.includes(lowerWords);
  
      if(located) {

        return lowerWords;

      }
  
      array.push(lowerWords);
    }

    return 'no duplicated words';
  }
  
  module.exports = repeatedWord;