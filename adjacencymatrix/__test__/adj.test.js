'use strict';


const  {printGraphInter,addEdgeInter} = require('../adjmat');

describe("Given an adjacency matrix representation of a graph, return the adjacency list representation.", () => {

    test(" return the adjacency list representation", () => {
        let V = 5;
        let adj= [];
           
        for (let i = 0; i < V; i++)
            adj.push([]);

        addEdgeInter(adj, 0, 1);
        addEdgeInter(adj, 0, 4);
        addEdgeInter(adj, 1, 2);
        addEdgeInter(adj, 1, 3);
        addEdgeInter(adj, 1, 4);
        addEdgeInter(adj, 2, 3);
        addEdgeInter(adj, 3, 4);
        expect(printGraphInter(adj)).toEqual("0 | 1 -> 4\n1 | 0 -> 2 -> 3 -> 4\n2 | 1 -> 3\n3 | 1 -> 2 -> 4\n4 | 0 -> 1 -> 3\n"
    );
    })
  

})




































