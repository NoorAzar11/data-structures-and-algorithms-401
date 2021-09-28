'use strict';




class Edge {
    constructor(vertex, weight) {
        this.vertex = vertex;
        this.weight = weight;
    }
}
class Graph {

    constructor() {
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);

    }
    addEdge(start, end, weight) {

        if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
            console.log('VERTEX DOES NOT EXIST');
            return;
        }
        const adjacencies = this.adjacencyList.get(start);
        adjacencies.push(new Edge(end, weight));
    }

    getNeighbours(vertex) {
        if (!this.adjacencyList.has(vertex)) {
            console.log('VERTEX DOES NOT EXIST');
            return;
        }
        return this.adjacencyList.get(vertex);
    }

}


function depthfirst(graph, vertex) {

    const visitedVGraph = new Set();

    visitedVGraph.add(vertex);

    const locatedtraverse = (locatted, visitedGraph) => {

        visitedGraph.add(locatted);

        const neighborsGraph = graph.getNeighbours(locatted);

        for (let neighbor of neighborsGraph) {

            if (!visitedGraph.has(neighbor.vertex)) {

                locatedtraverse(neighbor.vertex, visitedGraph);
            }
        }
    };

    locatedtraverse(vertex, visitedVGraph);

    return Array.from(visitedVGraph);
}



module.exports = { Graph, depthfirst};






















