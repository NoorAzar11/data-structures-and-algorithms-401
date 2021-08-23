'use strict';

const AnimalShelter=require('../AnimalShelter');

describe ('Testing Animal Shelter' ,() => {
    it ('Testing enqueue cat ', () =>{
  
   let animalShelter = new AnimalShelter();
   let name={};
      let animal1new = {type :'cat', name : 'caty1'};
      let animal2new = {type : 'cat', name : 'caty2'};
      animalShelter.enqueue(animal1new);
      animalShelter.enqueue(animal2new);
      expect(animalShelter.idx.storage.val).toEqual('caty2');
    });
    
    it('Testing empty dog shelter',() => {
     let animalShelter = new AnimalShelter();
        expect(animalShelter.dequeue('dog')).toEqual('its gonna be a dog place hold empty');

      });

      it('Testing empty cat shelter',() => {
        let animalShelter = new AnimalShelter();
           expect(animalShelter.dequeue('cat')).toEqual('its gonna be a cat place hold empty');
   
         });

      it('Testing new animal type',() => {
        let animalShelter = new AnimalShelter();
        let animalnew = {type :'new', name : 'newnew'};
        animalShelter.enqueue(animalnew);
    });

      it('Testing empty cat shelter',() => {
        let animalShelter = new AnimalShelter();
           expect(animalShelter.dequeue('prefCat')).toEqual(null);
   
         });

         it('dequeue another type from empty shell',() =>{
            let animalShelter = new AnimalShelter();
            expect(animalShelter.dequeue('newanimal')).toEqual (null);
          });

 
  
    });