'use strict'


const { leftJoin, Hashmap } = require('../leftjoin')




describe('Testing leftJoin Hashmap table ', () => {



    it('Testing table', () => {

        const hash1 = new Hashmap(1024);
        
        hash1.add('hamas', 'amaso');
        hash1.add('heba', 'amaso');
        hash1.add('lootab', 'mostafa');
        hash1.add('alaa', 'hashem');
        hash1.add('haytham', 'mohammad');


        const hash2 = new Hashmap(1024);
       
        hash2.add('hamas', 'deiawjuba');
        hash2.add('heba', 'soud');
        hash2.add('lootab', 'jweed');
        hash2.add('haytham', 'zoubi');
        hash2.add('ibrahim', 'noor');

        let joinedhash = leftJoin(hash1, hash2);
        
        expect(joinedhash.data[702]).toEqual([ 'hamas', 'amaso', 'deiawjuba' ]);
        expect(joinedhash.data[432]).toEqual([ 'heba', 'amaso', 'soud' ]);
        expect(joinedhash.data[915]).toEqual([ 'lootab', 'mostafa', 'jweed' ]);
        expect(joinedhash.data[413]).toEqual([ 'alaa', 'hashem', null ]);
        expect(joinedhash.data[900]).toEqual([ 'haytham', 'mohammad', 'zoubi' ]);

    })


})



























