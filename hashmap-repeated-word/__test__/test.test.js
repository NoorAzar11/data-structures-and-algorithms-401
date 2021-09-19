'use strict';




const repeatedWord = require ('../hashword');

const words1 ='Once upon a time, there was a brave princess who.......';

const words2 ='It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

const words3 ='It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';

const words4 ='nnnnnnnnnnnn';

describe('testing Repeated Word ',()=>{

  test ('Testing find first word to show up more than once in a string',()=>{

    expect(repeatedWord(words1)).toBe('a');

    expect(repeatedWord(words2)).toBe('it');

    expect(repeatedWord(words3)).toBe('summer');
  });



  it ('Testing no repeated word',()=>{
    expect(repeatedWord(words4)).toBe('no duplicated words');
  });



});
