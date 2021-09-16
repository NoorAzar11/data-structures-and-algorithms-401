const HashmapArray = require('../hashtable')





describe('Testing HashTrable ', () => {


    
    it('Testing hash table', () => {

        let newHashArray = new HashmapArray(1024);
        newHashArray.add('name', 'noor');
        newHashArray.add('age', '23');
        expect( newHashArray.map[232].head.value).toEqual({ name: 'noor' })
        expect( newHashArray.map[968].head.value).toEqual({ age: '23' })
    })


    it('Testing Getting Data', () => {

        let newHash = new HashmapArray(1024);
        newHash.add('name', 'noor');
        const get = newHash.get('name');
        expect(get).toEqual({ name: 'noor' })
       
    })

})