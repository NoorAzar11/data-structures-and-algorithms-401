'use strict';


let Graph = require('../graphfirst');




describe("Testing traversal on a graph.", () => {


    test("Testing a breadth-first ", () => {
        let graphTesting = new Graph();

        graphTesting.addVertex("Pandora")

        graphTesting.addVertex("Arendelle")

        graphTesting.addVertex("Metroville")

        graphTesting.addVertex("Monstropolis")

        graphTesting.addVertex("Narnia")

        graphTesting.addVertex("Naboo")

        graphTesting.addEdge("Pandora", "Arendelle")

        graphTesting.addEdge("Arendelle", "Metroville")

        graphTesting.addEdge("Arendelle", "Monstropolis")

        graphTesting.addEdge("Metroville", "Monstropolis")

        graphTesting.addEdge("Metroville", "Narnia")

        graphTesting.addEdge("Metroville", "Naboo")
        expect(graphTesting.breadthFirst("Pandora")).toEqual([ 'Pandora',
        'Arendelle',
        'Metroville',
        'Monstropolis',
        'Narnia',
        'Naboo' ]



      );
    })

})



























