'use strict';




const  { Graph, businessTrip} = require('../graph');



describe("Testing how much it would cost", () => {

    let graphTrip = new Graph();

    graphTrip.addVertex("Pandora")
    graphTrip.addVertex("Arendelle")
    graphTrip.addVertex("Metroville")
    graphTrip.addVertex("Monstropolis")
    graphTrip.addVertex("Narnia")
    graphTrip.addVertex("Naboo")
    
    graphTrip.addEdge("Pandora", "Arendelle" ,150)
    graphTrip.addEdge("Metroville","Pandora" ,82)
    graphTrip.addEdge("Arendelle","Metroville",99)
    graphTrip.addEdge("Arendelle","Monstropolis",42)
    graphTrip.addEdge("Metroville","Monstropolis",150)
    graphTrip.addEdge("Metroville","Narnia",37)
    graphTrip.addEdge("Metroville","Naboo",26)
    graphTrip.addEdge("Monstropolis","Naboo",73)
    graphTrip.addEdge("Narnia","Naboo",250)




  test("Input [Metroville, Pandora, ]", () => {
 
        expect(businessTrip(graphTrip ,['Metroville', 'Pandora' ])).toEqual('True, $82');
    })

  

})




































