'use strict';


const  { Graph,depthfirst} = require('../depth');

describe("Testing depth first preorder traversal ", () => {

    let testingGraph = new Graph();


    testingGraph.addVertex("A")
    testingGraph.addVertex("B")
    testingGraph.addVertex("C")
    testingGraph.addVertex("D")
    testingGraph.addVertex("F")
    testingGraph.addVertex("E")
    testingGraph.addVertex("H")
    testingGraph.addVertex("G")
    
    testingGraph.addEdge("A", "B" )
    testingGraph.addEdge("A","D" )
    testingGraph.addEdge("B","C")
    testingGraph.addEdge("B","D")
    testingGraph.addEdge("D","E")
    testingGraph.addEdge("D","H")
    testingGraph.addEdge("F","H")
    testingGraph.addEdge("C","G")
    testingGraph.addEdge("D","F")
    
    test("Testing Input", () => {
 
        expect(depthfirst(testingGraph ,'A')).toEqual([ 'A', 'B', 'C', 'G', 'D', 'E', 'H', 'F' ]);
    })
  

})
